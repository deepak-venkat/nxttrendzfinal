import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      const priceList = cartList.map(
        eachProduct => eachProduct.price * eachProduct.quantity,
      )
      const totalPrice = priceList.reduce((acc, curr) => acc + curr)
      return (
        <div className="summ-cont">
          <h1 className="summ-head">
            Order Total: <span className="tot-amnt">{totalPrice}/-</span>
          </h1>
          <p className="summ-description">{cartList.length} in cart</p>
          <button type="button" className="checkout-btn">
            Checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
