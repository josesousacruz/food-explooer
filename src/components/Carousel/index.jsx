
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { SwiperContainer } from './styles';
import { Card } from '../Card';
import 'swiper/swiper-bundle.css'
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';
import PropTypes from 'prop-types';



export const Carousel = ({ cards, title, isActive }) => {
  return (
    <SwiperContainer isActive={isActive}>
      <h2>{title}</h2>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar]}
        spaceBetween={50}
        slidesPerView={3}
        navigation={isActive}
        pagination={{ clickable: isActive }}
        scrollbar={{ draggable: isActive }}
        allowTouchMove={isActive}
        allowSlideNext={isActive}
        allowSlidePrev={isActive}
        breakpoints={{
          1024: {
            slidesPerView: 3,
          },
          600: {
            slidesPerView: 2,
          },
          320: {
            slidesPerView: 1,
          },
        }}
      >
        {cards.map((card, index) => (
          <SwiperSlide key={index}>
            <Card
              image={card.image}
              title={card.title}
              description={card.description}
              price={card.price}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </SwiperContainer>
  );
};

Carousel.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    })
  ).isRequired,
  title: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
};

Carousel.defaultProps = {
  isActive: true,
};