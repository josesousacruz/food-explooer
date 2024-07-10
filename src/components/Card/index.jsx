import PropTypes from 'prop-types';
import { CiHeart } from 'react-icons/ci';
import { FaPencilAlt } from "react-icons/fa";
import { useAdmin } from '../../contexts/AdminContext';
import { useNavigate } from 'react-router-dom';
import {
  CardContainer,
  CardImage,
  CardTitle,
  CardDescription,
  CardPrice,
  CardControls,
  CardButton,
  QuantityControl,
  Icon,
} from './styles';

export const Card = ({ image, title, description, price }) => {
  const { isAdmin } = useAdmin();
  const navigate = useNavigate();

  const  handleShow = () =>{
    navigate('/produto/show')
  }

  return (
    <CardContainer>
      <Icon onClick={handleShow} > {isAdmin ?<FaPencilAlt/> :<CiHeart/>}</Icon>
      <CardImage src={image} alt={title} />
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
      <CardPrice>{`R$ ${price}`}</CardPrice>
      {!isAdmin ? (<>
        <CardControls>
        <QuantityControl>-</QuantityControl>
        <span>01</span>
        <QuantityControl>+</QuantityControl>
        <CardButton>incluir</CardButton>
      </CardControls>
      </>) : null}

    </CardContainer>
  );
};

Card.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

