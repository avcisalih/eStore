import { useLocalStorage } from "@uidotdev/usehooks";
import { createContext, useState } from "react";
import { toast } from "react-toastify";


/* 1-) Context Yapısını Tanımla */
export const BasketContext = createContext();

/*2-) Context'de tutulan verileri uygulamaya aktaracak bir sağlayıcı bileşeni tanımla */

export function BasketProvider({ children }) {
  const [basket, setBasket] = useLocalStorage('basket',[]);
  /*
  Sepete Ürün Ekleme
  */
  const addToBasket = (newProduct) => {
    /*1-) Bu üründen sepette var mı kontrol et */
    const found = basket.find((i) => i.id === newProduct.id);

    if (found) {
      /*2-) Bu üründen sepette varsa miktarı arttır */
      /* a) bulunan ürünün miktarını arttır */
      const updated = { ...found, amount: found.amount + 1 };

      console.log(updated)

      /* b) sepet dizisindeki eskş ürünün yerine güncel halini koy */
      const newBasket = basket.map((item) =>
        item.id === updated.id ? updated : item
      );

      /* c) state'i güncelle */
      setBasket(newBasket);

      toast.info('Ürün Miktarı Arttırıldı')
      
    } else {
      /*3-) Bu üründen sepette yoksa ürünü sepete ekle */
      setBasket([...basket, { ...newProduct, amount: 1 }]);

      toast.success('Ürün Sepete Eklendi')
    }

    setBasket([...basket, newProduct]);
    console.log(basket);
  };

  /* ürünü sepetten kaldır */

  const removeFromBasket = (delete_id) =>{
    const found = basket.find(i => i.id === delete_id);

    if(found.amount > 1){

      const updated = { ...found, amount: found.amount - 1};

      const newBasket = basket.map((i) =>
      i.id === updated.id ? updated : i)

      setBasket(newBasket);

    }else{
      const filtred = basket.filter((i) => i.id !== delete_id);

      setBasket(filtred);
    }
  }

  return (
    <BasketContext.Provider value={{ basket, addToBasket, removeFromBasket }}>
      {children}
    </BasketContext.Provider>
  );
}
