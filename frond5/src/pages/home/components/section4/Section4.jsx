import React, { useEffect } from 'react'
import styles from '../section4/Section4.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { getProductsThunk } from '../../../../redux/reducers/productSlice'

const Section4 = () => {
    const dispatch = useDispatch()

    const data = useSelector(state => state.product.product)
    const loading = useSelector(state => state.product.loading)
    const error = useSelector(state => state.product.error)

    useEffect(() => {
        dispatch(getProductsThunk())
    }, [])

    if (loading) return <span>Loading..</span>
    if (error) return <span>Probelm Deteced While Loading Process0</span>
    
  return (
    <section className={styles.main}>
    <div className={styles.mainText}>
        <p>New</p>
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
                <button className={styles.btn}>Order Now!</button>      
              </div>
              
          </div>
        )
      }).slice(0,3)}
    </div> 
    </section>
  )
}

export default Section4