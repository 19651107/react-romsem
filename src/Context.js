import React, {createContext, useEffect, useState} from 'react'
import axios from "axios";

export const CustomContext = createContext()

export const Context = (props) => {

    const [cart, setCart] = useState([])



    const addItem = (item) => {
        let idx = cart.findIndex((el)=> {
            if (item.categories === 'pizza'){
                return el.title === item.title && el.size === item.size
            } else {
                return el.title === item.title
            }
        })
            if (idx >= 0){
                cart[idx].count++
                setCart([...cart])
            } else {
                setCart([...cart,{
                    ...item,
                    count : 1
                }])
            }
    }

    const plusOne = (item) => {
        let idx = cart.findIndex((el)=> el.title === item.title)
        if (idx >= 0) {
            setCart(cart.map((el)=>{
                if (item.title === el.title && item.size === el.size){
                    if (item.count >= 9){
                        return el
                    } else {
                        return {...el, count: el.count + 1}
                    }
                } else {
                    return el
                }
            }))
        } else {
                setCart([...cart,{
                    ...item,
                    count : 1
                }])
            }
    }

    const minusOne = (item) => {

        if (item.count > 1){
            setCart(cart.map((el)=>{
                if (item.title === el.title && item.size === el.size){
                    return {...el, count: el.count - 1}
                } else {
                    return el
                }
            }))
        } else  {
            setCart(cart.filter((el)=>{
                return el.title !== item.title
            }))
        }
    }

    const deleteProduct = (item) => {
        setCart(cart.filter((el)=> {
            if (item.size === el.title && item.size !== el.size){
                return el.title !== item.title
            }
        }))
    }

    const [switches,setSwitches] = useState(true)

    const [slider,setSlider] = useState([])

    const [main,setMain] = useState([])

    useEffect(()=>{
        axios('http://localhost:8080/slider')
            .then(({data})=> setSlider(data))
        axios('http://localhost:8080/sliderUp')
            .then(({data})=> setMain(data))
    },[])


    const value = {
        cart,
        addItem,
        plusOne,
        minusOne,
        deleteProduct,
        switches,
        setSwitches,
        slider,
        main,
    }


    return <CustomContext.Provider value={value}>
        {props.children}
    </CustomContext.Provider>
}



// import React, {createContext, useEffect, useState} from 'react'
// import axios from "axios";
//
// export const CustomContext = createContext()
//
// export const Context = (props) => {
//
//     const [cart, setCart] = useState([])
//
//
//
//     const addItem = (item) => {
//         let idx = cart.findIndex((el)=> el.title === item.title)
//             if (idx >= 0){
//                 cart[idx].count++
//                 setCart([...cart])
//             } else {
//                 setCart([...cart,{
//                     ...item,
//                     count : 1
//                 }])
//             }
//     }
//
//     const plusOne = (item) => {
//         let idx = cart.findIndex((el)=> el.title === item.title)
//         if (idx >= 0) {
//             setCart(cart.map((el)=>{
//                 if (item.title === el.title){
//                     return {...el, count: el.count + 1}
//                 } else {
//                     return el
//                 }
//             }))
//         } else {
//                 setCart([...cart,{
//                     ...item,
//                     count : 1
//                 }])
//             }
//     }
//
//     const minusOne = (item) => {
//
//         if (item.count >= 1){
//             setCart(cart.map((el)=>{
//                 if (item.title === el.title){
//                     return {...el, count: el.count - 1}
//                 } else {
//                     return el
//                 }
//             }))
//         } else {
//            setCart(cart.filter((el)=>{
//                return el.title !== item.title
//            }))
//         }
//     }
//
//     const deleteProduct = (item) => {
//         setCart(cart.filter((el)=> el.title !== item.title))
//     }
//
//     const [switches,setSwitches] = useState(true)
//
//     const [slider,setSlider] = useState([])
//
//     const [main,setMain] = useState([])
//
//     useEffect(()=>{
//         axios('http://localhost:8080/slider')
//             .then(({data})=> setSlider(data))
//         axios('http://localhost:8080/sliderUp')
//             .then(({data})=> setMain(data))
//     },[])
//
//
//     const value = {
//         cart,
//         addItem,
//         plusOne,
//         minusOne,
//         deleteProduct,
//         switches,
//         setSwitches,
//         slider,
//         main,
//     }
//
//
//     return <CustomContext.Provider value={value}>
//         {props.children}
//     </CustomContext.Provider>
// }