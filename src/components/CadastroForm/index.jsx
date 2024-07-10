import { Form, Title, Input, Button } from './styles';

const CadastroForm = () => {
  return (
    <Form>
      <Title>Crie sua conta</Title>
      
      <Input type="text" placeholder="Exemplo: Joe Sousr" />
      <Input type="email" placeholder="Exemplo: exemplo@exemplo.com.br" />
      <Input type="password" placeholder="No mínimo 6 caracteres" />
      <Button>Cadastrar</Button>
    </Form>
  );
}

export default CadastroForm ;
