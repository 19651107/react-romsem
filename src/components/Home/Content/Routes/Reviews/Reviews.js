import React, {useEffect, useState} from 'react';
import './reviews.css'
import axios from "axios";
import {useForm} from 'react-hook-form'

const Reviews = () => {

    const {
        register,
        handleSubmit,
        formState : {
            errors
        },
        reset
    } = useForm({
        mode : 'onBlur'
    })

    const [reviews,setReviews] = useState([])

    const [add,setAdd] = useState(false)

    useEffect(()=>{
        axios(`http://localhost:8080/reviews`)
            .then(({data})=> setReviews(data))
    },[add])

    const toDate = (date) => {
        return new Intl.DateTimeFormat('ru-Ru', {
            day:'2-digit',
            month:'2-digit',
            year:'2-digit',
        }).format(new Date(date))
    }

    const addReview = (data) => {
        axios.post('http://localhost:8080/reviews',data).then(({data})=> {
            setAdd(!data)
            reset()
        })
    }

    return (
        <div className="reviews">
            <div className="reviews__header">
                <h2 className="reviews__header-title">Отзывы</h2>
                <button type="button" className="reviews__header-btn" onClick={()=> setAdd(!add)}>+ Добавить отзыв</button>
            </div>
            <form onSubmit={handleSubmit(addReview)} className="reviews__form" style={{display : add ? 'flex' : 'none'}}>
                    <label className="reviews__form-label">
                        <input {...register('name',{
                            required : "Поле обязательно к заполнению",
                            minLength : {
                                value : 3,
                                message : 'Введите минимум 3 символа'
                            }})}
                               placeholder="Введите имя"
                               type="text"
                               className="reviews__form-input"/>
                        <br/>
                        <span className="reviews__form-not">{errors?.name && errors?.name?.message}</span>
                    </label>
                <label className="reviews__form-label">
                         <textarea {...register('text',{
                             required : 'Поле обязательно к заполнению',
                             minLength : {
                                 value : 5,
                                 message : 'Введите минимум 5 символа'
                             }
                         })} placeholder="Напишите отзыв" className="reviews__form-text" name="text"/>
                    <br/>
                    <span className="reviews__form-not">{errors?.text && errors?.text?.message}</span>
                </label>
                <input {...register('date')} type="hidden" value={toDate(Date.now())}/>
                <div className="reviews__form-btns">
                    <button type="submit" className="reviews__form-btn">Отправить</button>
                    <button type="reset" className="reviews__form-btn" onClick={()=> {
                        setAdd(!add)
                    }}>Отмена</button>
                </div>
            </form>
            <ul className="reviews__list">
                {reviews.map((item)=>(
                    <li key={item.id} className="reviews__item">
                        <div className="reviews__item-header">
                            <h3 className="reviews__item-name">{item.name}</h3>
                            <span className="reviews__item-date">02.22.22</span>
                        </div>
                        <p className="reviews__item-text">{item.text}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Reviews;