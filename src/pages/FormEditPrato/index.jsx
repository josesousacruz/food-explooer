import  {  } from 'react';
import { useNavigate } from 'react-router-dom';
import { BackButton } from '../../components/BackButton';
import PageLayout from '../Layout'
import {
  FormContainer,
  FormTitle,
  FormGroup,
  Label,
  Input,
  TextArea,
  Select,
  Button,
  IngredientsContainer,
  IngredientInput,
  FormRow,
} from './styles';

export const ProductEdit = () => {
  const navigate = useNavigate();



  return (
    <PageLayout>
    <FormContainer>
      <BackButton onClick={() => navigate(-1)}>
      </BackButton>
      <FormTitle>Editar prato</FormTitle>
      <FormRow>
        <FormGroup>
          <Label>Imagem do prato</Label>
          <Button>Selecione imagem</Button>
        </FormGroup>
        <FormGroup>
          <Label>Nome</Label>
          <Input type="text" placeholder="Ex.: Salada Caesar" />
        </FormGroup>
        <FormGroup>
          <Label>Categoria</Label>
          <Select>
            <option>Refeição</option>
            <option>Bebida</option>
            <option>Sobremesa</option>
          </Select>
        </FormGroup>
      </FormRow>
      <FormRow>
        <FormGroup>
          <Label>Ingredientes</Label>
          <IngredientsContainer>
            
            <IngredientInput
              type="text"
              placeholder="Adicionar +"
            />
          </IngredientsContainer>
        </FormGroup>
        <FormGroup>
          <Label>Preço</Label>
          <Input type="text" placeholder="R$ 00,00" />
        </FormGroup>
      </FormRow>
      <FormGroup>
        <Label>Descrição</Label>
        <TextArea placeholder="Fale brevemente sobre o prato, seus ingredientes e composição" />
      </FormGroup>
      <Button>Salvar alterações</Button>
      <Button>Excluir Prato</Button>
    </FormContainer>
    </PageLayout>
  );
};

