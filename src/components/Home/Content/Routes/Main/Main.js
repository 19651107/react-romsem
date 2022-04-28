import React, {useContext} from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation, Pagination } from "swiper";
import Logo1 from '../../../../../assets/Home/Main/logo1.png'
import pizza from '../../../../../assets/Home/Main/Pizza.jpg'
import salad from '../../../../../assets/Home/Main/salad.jpg'
import './Main.css'
import {Link} from "react-router-dom";
import chicken from '../../../../../assets/Home/Main/Middle/chiken.png'
import cornDog from '../../../../../assets/Home/Main/Middle/cornDog.png'
import losos from '../../../../../assets/Home/Main/Middle/losos.png'
import pizzaSize from '../../../../../assets/Home/Main/Middle/pizza.png'
import Action from '../../../../../assets/Home/Main/Middle/actia.png'
import {CustomContext} from "../../../../../Context";
import Price from "../RouteContent/Price";


const Main = () => {


    const {switches,setSwitches,slider,main,addItem} = useContext(CustomContext)


    return (
        <>
            <Swiper
                spaceBetween={30}
                effect={"fade"}
                pagination={{
                    clickable: true,
                }}
                modules={[EffectFade, Navigation, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <Link to="/sushi"><img className="swiper-img" src={Logo1} alt="Sushi"/></Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to="/pizza"><img className="swiper-img" src={pizza} alt="pizza"/></Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to="/salad"><img className="swiper-img" src={salad} alt="Salad"/></Link>
                </SwiperSlide>
            </Swiper>
            <div className="middle">
                <div className="middle__card">
                    <div className="middle__imges">
                        <img className="middle__img1" src={losos} alt="chicken"/>
                        <p className="middle__subtitle">Чикен</p>
                    </div>
                    <div className="middle__imges">
                        <img className="middle__img2" src={chicken} alt="chicken"/>
                        <p className="middle__subtitle">С угрем</p>
                    </div>
                    <div className="middle__imges">
                        <img className="middle__img2" src={cornDog} alt="cornDog"/>
                        <p className="middle__subtitle">Корн дог</p>
                    </div>
                </div>
                <div className="middle__cart">
                    <div className="middle__imges">
                        <img className="middle__img1" src={pizzaSize} alt="pizza"/>
                        <p className="middle__subtitle">Пицца</p>
                    </div>
                    <div className="middle__imges">
                        <img className="middle__img3" src={Action} alt="action"/>
                        <p className="middle__subtitle">Акции</p>
                    </div>
                </div>
            </div>
            <div className="sliderUp">
                    <div className="sliderUp__choose">
                        <h4 className={`sliderUp__button ${switches ? 'active' : ''}`} onClick={()=> setSwitches(true)}>Новинки</h4>
                        <h4 className={`sliderUp__button ${!switches ? 'active' : ''}`} onClick={()=> setSwitches(false)}>Популярное</h4>
                    </div>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    slidesPerGroup={3}
                    loop={true}
                    loopFillGroupWithBlank={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper"
                >
                    {switches ? Object.values(slider).map((item)=>(
                            item.slice(7).map((el)=>(
                                    <SwiperSlide>
                                        <div key={el.title} className="sliderUp__card">
                                            <img className="sliderUp__swiper-img" src={el.imageUrl} alt={el.title}/>
                                            <h3 className="sliderUp__swiper-title">{el.title}</h3>
                                            <div className="sliderUp__swiper-buy">
                                                <Price item={el.price}/>
                                                <button className="sliderUp__swiper-btn" onClick={()=> addItem(el)}>Хочу!</button>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )
                            ))) : Object.values(main).map((item)=>(
                            item.slice(7).map((el)=>(
                                    <SwiperSlide>
                                        <div key={el.title} className="sliderUp__card">
                                            <img className="sliderUp__swiper-img" src={el.imageUrl} alt={el.title}/>
                                            <h3 className="sliderUp__swiper-title">{el.title}</h3>
                                            <div className="sliderUp__swiper-buy">
                                                <Price item={el.price}/>
                                                <button className="sliderUp__swiper-btn">Хочу!</button>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )
                            )))}
                </Swiper>
            </div>
        </>
    );
};

export default Main;