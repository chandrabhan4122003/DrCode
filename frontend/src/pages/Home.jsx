import React from 'react';
import { motion } from 'framer-motion';
import headphone from '../assets/headphone.jpg';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import style from '../styles/Home.module.css';

const Home = () => {
  const userId = localStorage.getItem("userId"); // Assuming userId is stored in localStorage

  const handleAddToCart = async () => {
    if (!userId) {
      console.error("User not logged in");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/lead/interact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({ userId, interaction: "item added to cart" }),
      });

      const data = await response.json();

      if (!response.ok) {
        console.error(data.message);
        return;
      }

      console.log("Interaction recorded:", data);
    } catch (error) {
      console.error("Failed to record interaction:", error);
    }
  };
  
  return (
    <div>
      <Navbar />
      <div className={style.container}>
        <div className={style.hero}>
          <span style={{ fontFamily: "Bebas Neue" }}>Shop</span>
        </div>
        <div style={{
          position:"absolute",
          backgroundColor:"#FFCC00",
          height:"2rem",
          width:"81.2%",
          top:"56%"
        }}/> 
        <div className={style.products}>
          <div className={style.heading}>
            <h2>Give All You Need</h2>
          </div>
          <div className={style.productList}>
            <div className={style.product}>
              <div className={style.productImage}>
                <img src={headphone} alt='headphone' />
              </div>
              <div className={style.details}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                  <div><span style={{ fontWeight: "500" }}>Headphone</span></div>
                  <div><span style={{ color: "red" }}>$200</span></div>
                </div>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                  style={{ display: 'flex', justifyContent: 'center', cursor: 'pointer' }}
                  onClick={handleAddToCart}>
                  <button className={style.btn}>Add to Cart</button>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;