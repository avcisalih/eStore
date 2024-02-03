import { useContext } from "react";
import { BasketContext } from "../context/basketContext";
import BasketItem from "../components/BasketItem";

const CheckoutPage = () => {
  const { basket, addToBasket, removeFromBasket } = useContext(BasketContext);

  const totalAmaount = basket.reduce((total, i) => total + i.amount,0
  );

  const totalPrice =basket.reduce((total,i) => total + i.price * i.amount, 0 );
  return (
    <div className="containe my-5">
      <div className="d-flex flex-column gap-5">
      {/*Sepette ürün yoksa */}
      {basket.length === 0 && (
        <p className="text-center my-5">
          <span className="mx-3 ">Sepetiniz Boş. Lütfen Sepetinize Ürün Ekleyiniz.</span>
          <Link to={'/'} >Ürünler</Link>
        </p>
      )}

        {basket.map((item) => (
          <BasketItem key={item.id} item={item} addToBasket={addToBasket}
          removeFromBasket={removeFromBasket} />
        ))}
      </div>

      <div className="border p-5 rounded my-5 fs-4">

        <p>
          Sepetteki Ürün: <span className="text-warning">{totalAmaount} ₺</span> adet
        </p>
        <p>
          Toplam Fiyat: <span className="text-success">{totalPrice.toFixed(2)} ₺</span>
        </p>

      </div>
    </div>
  );
};

export default CheckoutPage;
