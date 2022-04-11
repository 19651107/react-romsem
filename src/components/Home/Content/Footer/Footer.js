import React from 'react';
import './Footer.css'
import Logo from '../../../../assets/Home/Footer/whatsapp.svg'
import Tel from '../../../../assets/Home/Footer/telegram.svg'
import Insta from '../../../../assets/Home/Footer/insta.svg'
import {Link} from "react-router-dom";


const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__card">
                <ul className="footer__list">
                    <li className="footer__item">О компании</li>
                    <Link to="/delivery"><li className="footer__item">Доставка и оплата</li></Link>
                    <li className="footer__item">Лента материалов</li>
                    <li className="footer__item">Политика возврата</li>
                </ul>
                <div className="footer__info">
                    <h3 className="footer__info-title">Введите номер</h3>
                    <input maxLength="9" type="tel" className="footer__info-number" placeholder="+996(___-__-__-__)"/>
                    <br/>
                    <span className="footer__info-messenger">Выберите удобный  <br/> мессенджер для общения</span>
                    <div className="footer__info-imges">
                        <a target="_blank" href="https://web.whatsapp.com/"><img className="footer__info-img1" src={Logo} alt="whatsapp"/></a>
                        <a target="_blank" href="https://web.telegram.com/"><img className="footer__info-img2" src={Tel} alt="telegram"/></a>
                        <a target="_blank" href="https://www.instagram.com/"><img className="footer__info-img3" src={Insta} alt="instagram"/></a>
                    </div>
                </div>
                    <ul className="footer__foot">
                        <li className="footer__foot-item"><a style={{color : '#A4ACAD'}} href="tel:+996 705 188 955">Тел:+996 705 188 955</a></li>
                        <li className="footer__foot-item"><a style={{color : '#A4ACAD'}} href="tel:+996 555 188 955 ">Тел:+996 705 188 955</a></li>
                        <li className="footer__foot-item"><a target="_blank" style={{color : '#A4ACAD'}} href="https://2gis.kg/bishkek/search/%D0%91%D0%B0%D0%BA%D0%B0%D0%B5%D0%B2%D0%B0%20126?m=74.577186%2C42.843877%2F17.63">Адрес:Бакаева 126</a></li>
                    </ul>
            </div>
        </div>
    );
};

export default Footer;