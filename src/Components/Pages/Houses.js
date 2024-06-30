import React from 'react';
import { HousesList } from "../HousesList";
import summer from '../assets/summer.jpg';
import styles from './Houses.module.css';

 function Houses() {
      return (
        <>
        <div>
            <h1 className={styles.title}>Available Houses for Rent</h1>
        </div>
        <div className={styles.container}>
            <img  src={summer} alt="a house with a pool by the ocean" />
            
        </div>
        <div className={styles.container}>
            <HousesList />
        </div>
        </>
        )
    
 }
  
  export default Houses;