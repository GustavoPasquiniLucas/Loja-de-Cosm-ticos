import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
const url = "http://localhost:3000/products";
import Carousel from 'react-bootstrap/Carousel';

export default function home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(url);
      const data = await res.json();
      setProducts(data);
    }
    fetchData();
  }, []);
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <>
 <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="1"
          src="https://guiamake.com.br/static/3273696ddc7332fe799a5857ea6cfcc4/4be66/tipos-de-cosmeticos-1.png"
          alt="Produtos de Beleza"
        />
        <Carousel.Caption>
          <h3>Maquiagem</h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="Perfumes"
          src="https://gowhere.com.br/wp-content/uploads/2021/04/02_10_2020_OUI_5142-re-1024x683.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Perfumes</h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://storage.googleapis.com/eureciclo-blog/1/7a66b7ba1ffa4dc336b96f63cc5aa527_XL.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={product.img} />
              <Card.Body>
                <Card.Title>{product.nome}</Card.Title>
                <Card.Text>
                 R${product.price}
                </Card.Text>
              </Card.Body>
            </Card>
          </li>
        ))}
      </ul>
    </>
  );
}
