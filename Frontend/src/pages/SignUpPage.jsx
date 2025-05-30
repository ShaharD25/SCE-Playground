// frontend/src/pages/SignUpPage.jsx
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { StoreContext } from '../store/StoreContext.jsx';
import api from '../services/api.js';

export default function SignUpPage() {
  const { signIn } = useContext(StoreContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: ''
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      await api.post('/auth/signup', form); // register

      // login immediately after registration
      await signIn(form.email, form.password);
      navigate('/products');
    } catch (err) {
      setError(err.response?.data?.message || 'Sign up failed');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className='auth-container'>
      {loading && (
        <div className='loader-overlay'>
          <div className='spinner' />
        </div>
      )}

      <img
        className='university-icon'
        src='https://www.sce.ac.il/ver/14/tpl/website/img/SamiSH-logo_2.png'
        alt='University Icon'
      />

      <h3>Sign Up</h3>
      {error && <p className='error-message'>{error}</p>}
      <form className='auth-form' onSubmit={handleSubmit}>
        <input type='email' name='email' placeholder='Email' value={form.email} onChange={handleChange} required />
        <input type='password' name='password' placeholder='Password' value={form.password} onChange={handleChange} required />
        <input type='text' name='firstName' placeholder='First Name' value={form.firstName} onChange={handleChange} />
        <input type='text' name='lastName' placeholder='Last Name' value={form.lastName} onChange={handleChange} />

        <button type='submit' disabled={loading}>
          {loading ? 'Creating account…' : 'Sign Up'}
        </button>
      </form>
    </div>
  );
}
