import PropTypes from 'prop-types';
import { FiPlus, FiMinus } from 'react-icons/fi';
import { BackButton } from '../BackButton/'
import { useAdmin } from '../../contexts/AdminContext';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Content,
  ProductImage,
  ProductInfo,
  Title,
  Description,
  Ingredients,
  IngredientTag,
  QuantityControl,
  AddButton,
  EditProd
} from './styles';

export const ProductDetail = ({ product }) => {
  const navigate = useNavigate();
  const { isAdmin } = useAdmin();

  const handleEdit = () => {
    navigate('/produto/edit'); // Navegar para a página de pedidos
  };

  return (
    <Container>
      <BackButton onClick={() => navigate(-1)} />
      <Content>
        <ProductImage src={product.image} alt={product.title} />
        <ProductInfo>
          <Title>{product.title}</Title>
          <Description>{product.description}</Description>
          <Ingredients>
            {product.ingredients.map((ingredient, index) => (
              <IngredientTag key={index}>{ingredient}</IngredientTag>
            ))}
          </Ingredients>
          <QuantityControl>
            {!isAdmin ? <>
              <FiMinus />
              <span>01</span>
              <FiPlus />
              </> : null}
              {isAdmin ?
            <EditProd onClick={handleEdit}>Editar Prato</EditProd> : 
            
            <AddButton>incluir · R$ {product.price}</AddButton> }
          </QuantityControl>
        </ProductInfo>
      </Content>
    </Container>

  );
};

ProductDetail.propTypes = {
  product: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};