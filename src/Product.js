import "./Product.css"
import { useStateValue } from './StateProvider'

const Product = ({id, title, price, rating, image}) => {
  const [state, dispatch] = useStateValue();

  const addToBasket = () =>{
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id, title ,image, price, rating
      }
    })
  }
  return (
    <>
        <div className="product" key={id}>
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">{price}$</p>
                <div className="product__rating">{
                  Array(rating).fill().map((_,i)=>(
                    <p>⭐</p>
                  ))
                }</div>
            </div>
            <img src={image} alt="product_image" />
            <button onClick={addToBasket}>Add to basket</button>
        </div>
    </>
  )
}

export default Product