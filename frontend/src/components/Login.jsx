import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from '../styles/Login.module.css';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
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
    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message);
        return;
      }

      localStorage.setItem('userId', data.userId); // Store userId in localStorage
      localStorage.setItem('token', data.token); // Store token in localStorage
      navigate('/home');
    } catch (err) {
      setError('Login failed. Please try again.');
    }
  };

  return (
    <div className={styles.loginContainer}>
      <h2 className={styles.title}>Login</h2>
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
        <button type="submit" className={styles.loginButton}>Login</button>
      </form>
      <div className={styles.linkContainer}>
        <p>Don't have an account? <Link to="/" className={styles.link}>Sign up</Link></p>
      </div>
    </div>
  );
}

export default Login;