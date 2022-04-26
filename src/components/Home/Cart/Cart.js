import React, {useContext} from 'react';
import './Cart.css'
import Map from '../../../assets/Home/Cart/Info.png'
import {CustomContext} from "../../../Context";

const Cart = () => {

    const {cart,plusOne,minusOne,deleteProduct} = useContext(CustomContext)

    return (
        <div className="home__cart">
            {cart.length !== 0 ?
                <div className="home__cart-basket">
                    <div className="home__cart-basket-title">
                        Корзина
                    </div>
                    <ul className="home__cart-list">
                            {cart.map((item,idx)=>(
                                    <li key={`${idx}${item.id}${item.title}${item.price}`} className="home__cart-item">
                                        <img className="home__cart-item-img" src={item.imageUrl} alt=""/>
                                        <div className="home__cart-item-info">
                                            {/*<h3 className="home__cart-item-title">{item.title.slice(0,15)}...</h3>*/}
                                            <div className="home__cart-item-buy">
                                                <div className="home__cart-item-math">
                                                    <span className="home__cart-item-min" onClick={()=> minusOne(item)}>-</span>
                                                    <span className="home__cart-item-check">{item.count}</span>
                                                    <span className="home__cart-item-min" onClick={()=> plusOne(item)}>+</span>
                                                </div>
                                                <span className="home__cart-item-price">{item.categories === 'pizza' && item.size === 0 ? item.price * item.count : item.categories === 'pizza' && item.size === 1 ? item.priceMiddle * item.count : item.categories === 'pizza' && item.size === 2 ? item.priceLarge * item.count : item.price * item.count} сом</span>
                                            </div>
                                        </div>
                                        <span className="home__cart-item-delete" onClick={()=> deleteProduct(item)}>✗</span>
                                    </li>
                            ))}
                        <div className="home__cart-order">
                            <h3 className="home__cart-order-price">{cart.reduce((acc,rec)=> {
                                return acc + (rec.categories === 'pizza' && rec.size === 0 ? rec.price * rec.count : rec.categories === 'pizza' && rec.size === 1 ? rec.priceMiddle * rec.count : rec.categories === 'pizza' && rec.size === 2 ? rec.priceLarge * rec.count : rec.price * rec.count)
                            },0)} сом</h3>
                            <button type="button" className="home__cart-order-btn">Оформить заказ</button>
                        </div>
                    </ul>
                </div>
            : <>
                    <div className="home__cart-card">
                        <h2 className="home__cart-title">Ваша корзина пуста.</h2>
                        <p className="home__cart-subtitle">Добавьте же скорее что-нибудь!</p>
                    </div>
                    <div className="home__cart-delivery">
                        <span className="home__cart-delivery-com">Бесплатная доставка от 800 СОМ</span>
                    </div>
                    <div className="home__cart-row">
                        <img className="home__cart-img" src={Map} alt="Cart"/>
                        <button type="button" className="home__cart-info"><svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g>
                                <path d="M19 0C11.8889 0 6.10352 5.78532 6.10352 12.8964C6.10352 15.754 7.7859 20.0999 11.3981 26.5731C13.863 30.9899 16.3166 34.7206 16.4201 34.8778L18.1935 37.5658C18.3723 37.8369 18.6752 38 19 38C19.3248 38 19.6278 37.8369 19.8066 37.5658L21.5799 34.8779C21.6824 34.7226 24.1181 31.0241 26.6019 26.5731C30.2141 20.1002 31.8965 15.7543 31.8965 12.8964C31.8965 5.78532 26.1111 0 19 0ZM24.9144 25.6313C22.4651 30.0201 20.0679 33.6605 19.9669 33.8135L19 35.2791L18.0335 33.8139C17.9319 33.6597 15.5163 29.9866 13.0856 25.6313C9.73498 19.6268 8.03605 15.3422 8.03605 12.8964C8.03605 6.85092 12.9544 1.93254 19 1.93254C25.0456 1.93254 29.964 6.85092 29.964 12.8964C29.964 15.3425 28.2651 19.627 24.9144 25.6313Z" fill="#F2F2F2"/>
                                <path d="M19 5.6655C15.0572 5.6655 11.8496 8.8732 11.8496 12.8159C11.8496 16.7586 15.0572 19.9663 19 19.9663C22.9428 19.9663 26.1504 16.7586 26.1504 12.8159C26.1504 8.8732 22.9428 5.6655 19 5.6655ZM19 18.0337C16.1228 18.0337 13.7821 15.693 13.7821 12.8159C13.7821 9.93872 16.1228 7.59803 19 7.59803C21.8772 7.59803 24.2178 9.93872 24.2178 12.8159C24.2178 15.693 21.8772 18.0337 19 18.0337Z" fill="#F2F2F2"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_17_854">
                                    <rect width="38" height="38" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg></button>
                        <div className="home__cart-address">
                            <h3 className="home__cart-title">Укажите адрес</h3>
                            <p className="home__cart-subtitle">И узнайте время доставки</p>
                        </div>
                    </div>
                </>
            }
        </div>
    );
};

export default Cart