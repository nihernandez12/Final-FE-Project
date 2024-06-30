import React from 'react';
import ocean from "../assets/oceanHouse.jpg";
import cabin from '../assets/cabin.jpeg';
import spanish from '../assets/spanish.jpg';
import styles from './About.module.css';

const About = () => {
    return (
     <>
     <h1 className={styles.title}>About</h1>
       <div className={styles.container}>
          
        <img className={styles.image} src={ocean} alt="house on the coast" />
        <img className={styles.image} src={cabin} alt="log house on the river" />
        <img className={styles.image} src={spanish} alt="Spanish style house" />
        </div>
        <div>
       <p className={styles.p}>Welcome to Vacay Home! We are the answer to your vacation rental needs! Check out our Houses for Rent page and see what we have available!
        You are also welcome to add any rentals that you may own. Consider us your one stop shop for Vacation Rental Homes.  </p>
       </div>
     </>
    )
 };

 export default About;