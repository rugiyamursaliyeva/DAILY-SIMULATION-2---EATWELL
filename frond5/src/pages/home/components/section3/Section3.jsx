import React, { useEffect } from 'react'
import styles from '../section3/Section3.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { getProductsThunk } from '../../../../redux/reducers/productSlice'
import axios from 'axios'

const Section3 = () => {
  const dispatch =  useDispatch()

  const data = useSelector(state => state.product.product)
  const loading = useSelector(state => state.product.loading)
  const error = useSelector(state => state.product.error)

  useEffect(() => {
    dispatch(getProductsThunk())
  }, [])

  const addToBasket = async (data) => {
    const res = await axios.post("http://localhost:5000/basket", data)
    const result = res.data
    console.log(result);
    alert(`${result.name} sebete elave olundu`)
  }

  const addToWishlist = async (data) => {
    const res = await axios.post("http://localhost:5000/wish", data)
    const result = res.data
    console.log(result);
    alert(`${result.name} istek listine elave olundu`)
    if(result.id==ite._id){
      alert("Mehsul Onsuzda basketde var")
      return
    }
    
  }

  return (
    <section className={styles.main}>
        <div className={styles.mainText}>
            <p>Our Offer This Summer</p>
            <span>Far far away, behind the word mountains, far from the countries <br/> Vokalia and Consonantia, there live the blind texts.</span>
        </div>

        <div className={styles.data}>
          {data && data.map(item => {
            return (
              <div className={styles.card}>
                <div className={styles.image}>
                <img src={item.image} alt="" /> 
                </div>
                  
                  <div className={styles.cardText}>
                    <span>{item.price}</span>
                    <h1>{item.name}</h1>
                    <p>{item.decription}</p>    
                    <button onClick={() => addToBasket(item)}>Basket</button>
                    <button onClick={() => addToWishlist(item)}>Wishlist</button>
                  </div>
                  
              </div>
            )
          }).slice(0,3)}
        </div>
    </section>
  )
}

export default Section3