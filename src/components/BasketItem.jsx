

const BasketItem = (item, addToBasket, removeFromBasket) => {
  return (
    <div className="d-flex align-items-center gap-3">
            <div>
              <div className="rounded bg-white">
                <img
                  className="object-fit-contain"
                  width={100}
                  height={100}
                  src={item.image}
                />
              </div>

              <h4 className="text-truncate">{item.title}</h4>
            </div>

            <div>
              <h3>{item.price}</h3>

              <p className="d-flex align-items-center gap-1 text-nowrap">
                <span>Miktar:</span>
                <span className="fw-bold"> {item.amount}</span>
              </p>

              <div className="d-flex gap-2">
                <button 
                onClick={() => removeFromBasket(item.id)}
                className="btn btn-danger">-</button>
                <button onClick={() => addToBasket(item)} className="btn btn-success">+</button>
              </div>
            </div>
          </div>
  )
}

export default BasketItem