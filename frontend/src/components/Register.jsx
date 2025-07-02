import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from '../styles/Signup.module.css';

function Register() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password
        })
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message);
        return;
      }

      navigate('/login');
    } catch (err) {
      setError('Registration failed. Please try again.');
    }
  };

  return (
    <div className={styles.signupContainer}>
      <h2 className={styles.title}>Sign Up</h2>
      {error && <div className={styles.error}>{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            className={styles.input}
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            className={styles.input}
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label>Confirm Password:</label>
          <input
            type="password"
            name="confirmPassword"
            className={styles.input}
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className={styles.signupButton}>Sign Up</button>
      </form>
      <div className={styles.linkContainer}>
        <p>Already have an account? <Link to="/login" className={styles.link}>Login</Link></p>
      </div>
    </div>
  );
}

export default Register;