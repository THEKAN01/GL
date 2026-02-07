// src/pages/Login.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Input from '../components/common/Input';
import Button from '../components/common/Button';

export default function Login() {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);
    
    const result = await login(credentials);
    if (result.success) {
      navigate('/dashboard');
    } else {
      setError(result.message);
    }
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-3xl shadow-xl border border-slate-100">
        <h2 className="text-3xl font-black text-slate-900 mb-2">Bienvenue</h2>
        <p className="text-slate-500 mb-8">Connectez-vous pour gérer vos biens.</p>
        
        {error && <div className="mb-4 p-3 bg-red-50 text-red-600 rounded-lg text-sm font-medium">{error}</div>}
        
        <form onSubmit={handleSubmit} className="space-y-5">
          <Input 
            label="Email" 
            type="email" 
            required 
            onChange={e => setCredentials({...credentials, email: e.target.value})}
          />
          <Input 
            label="Mot de passe" 
            type="password" 
            required 
            onChange={e => setCredentials({...credentials, password: e.target.value})}
          />
          <Button variant="primary" className="w-full py-4" isLoading={isSubmitting}>
            Se connecter
          </Button>
        </form>
      </div>
    </div>
  );
}
