import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import style from "../styles/Navbar.module.css";

const Navbar = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogout = async () => {
    const userId = localStorage.getItem("userId"); // Assuming userId is stored in localStorage
    if (!userId) {
      navigate("/login");
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch("http://localhost:5000/api/lead/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({ userId }),
      });

      const data = await response.json();

      if (!response.ok) {
        console.error(data.message);
        setIsLoading(false);
        return;
      }

      // Clear local storage and navigate to login page
      localStorage.removeItem("userId");
      localStorage.removeItem("token");
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error);
      setIsLoading(false);
    }
  };

  const handleCart = async () => {
    const userId = localStorage.getItem("userId"); // Assuming userId is stored in localStorage
    if (!userId) {
      navigate("/cart");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/lead/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({ userId }),
      });

      const data = await response.json();

      if (!response.ok) {
        console.error(data.message);
        return;
      }

      alert("Your order has been placed!");
    } catch (error) {
      console.error("Failed to send email:", error);
    }
  };

  return (
    <div className={style.navbar}>
      {isLoading && (
        <div className={style.loadingOverlay}>
          <FontAwesomeIcon icon={faGear} spin size="3x" className={style.loadingIcon} />
          <p>Logging out...</p>
        </div>
      )}
      <div className={style.nav}>
        <div>
          <span
            style={{ cursor: "pointer", color: "red", fontWeight: "600" }}
            onClick={handleLogout}
            className={style.logoutButton}
          >
            Logout
          </span>
        </div>
      </div>
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.2 }}
        className={style.cart}
      >
        <button onClick={handleCart}>Buy Cart</button>
      </motion.div>
    </div>
  );
};

export default Navbar;