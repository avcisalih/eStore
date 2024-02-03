import { useContext } from "react";
import { BasketContext } from "../context/basketContext";

const Card = ({ products }) => {
  const { addToBasket } = useContext(BasketContext);
  return (
    <div className="card py-2" style={{ width: "250px" }}>
      <div className="d-flex justify-content-center">
        <img
          className="object-fit-contain"
          height={120}
          src={products.image}
          alt={products.name}
        />
      </div>
      <div className="card-body d-flex flex-column gap-1">
        <h4 className="text-truncate">{products.title}</h4>
        <p>{products.price} </p>
        <p>{products.category} </p>
        <button onClick={() => addToBasket(products)}>Sepete Ekle</button>
      </div>
      Card
    </div>
  );
};

export default Card;
