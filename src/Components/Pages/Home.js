import React from 'react';

import styles from "./Home.module.css";
import nice from "../assets/niceHouse.jpeg"


const Home = () => {
    return (
     <>
     <h1 className={styles.title}>Home</h1>
     <div className={styles.container}>
          
        <img className={styles.image} src={nice} alt="house on the coast" />
       </div>
     </>
    )
 };

 export default Home;