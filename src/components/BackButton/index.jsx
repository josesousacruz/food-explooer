import { Container } from "./styles";
import { FiArrowLeft } from "react-icons/fi";
import PropTypes from 'prop-types';

export const BackButton = ({onClick}) => {

    return (
        <Container onClick={onClick}>
            <FiArrowLeft />
            <span>voltar</span>
        </Container>

    );
}

BackButton.propTypes = {
    onClick: PropTypes.func.isRequired,
  };