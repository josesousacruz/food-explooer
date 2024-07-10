import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Title, Input, Button, SignUpLink } from './styles';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Inicializar o hook useNavigate

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log('Formulário enviado');
// teste
    try {
      const response = await fetch('http://localhost:3333/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, senha })
      });

      const data = await response.json();

      if (response.ok) {
        // Armazene o token JWT (por exemplo, no localStorage)
        localStorage.setItem('token', data.token);
        console.log('Login bem-sucedido:', data);
        // Redirecionar ou executar outras ações após o login bem-sucedido
        navigate('/');

      } else {
        setError(data.message || 'Erro ao fazer login');
      }
    } catch (error) {
      console.error('Erro:', error);
      setError('Erro ao fazer login');
    }
  };

  return (
    <Form onSubmit={handleLogin}>
      <Title>Faça login</Title>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <Input
        type="email"
        placeholder="Exemplo: exemplo@exemplo.com.br"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        type="password"
        placeholder="No mínimo 6 caracteres"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
      />
      <Button type="submit">Entrar</Button>
      <SignUpLink>Criar uma conta</SignUpLink>
    </Form>
  );
};

export default LoginForm;
