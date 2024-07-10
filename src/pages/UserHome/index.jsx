import { Container } from "./styles";
import { Banner } from "../../components/Banner";
import PageLayout from "../Layout";
import { Carousel } from "../../components/Carousel"
import img from "../../assets/Mask group.png"
import img1 from "../../assets/foods/Mask group-1.png"
import img2 from "../../assets/foods/Mask group-2.png"
import img3 from "../../assets/foods/Mask group-3.png"
import img4 from "../../assets/foods/Mask group-4.png"
import img5 from "../../assets/foods/Mask group-5.png"
import img6 from "../../assets/foods/Mask group-6.png"
import img7 from "../../assets/foods/Mask group-7.png"
import img8 from "../../assets/foods/Mask group-8.png"
import img9 from "../../assets/foods/Mask group-9.png"
import img10 from "../../assets/foods/Mask group-10.png"
import img11 from "../../assets/foods/Mask group-11.png"

const refeicoes = [
    { image: img1, title: 'Card 1', description: 'Description for card 1', price: 100 },
    { image: img2, title: 'Card 2', description: 'Description for card 2', price: 100 },
    { image: img3, title: 'Card 3', description: 'Description for card 3', price: 100 },   
    { image: img4, title: 'Card 4', description: 'Description for card 4', price: 100 },
    { image: img5, title: 'Card 5', description: 'Description for card 5', price: 100 },

  ];

  
const sobremesas = [
  { image: img6, title: 'Card 6', description: 'Description for card 6', price: 100 },
  { image: img7, title: 'Card 7', description: 'Description for card 7', price: 100 },
  { image: img8, title: 'Card 8', description: 'Description for card 8', price: 100 }
  // Adicione mais cards conforme necessário
];



const bebidas = [
  { image: img9, title: 'Card 9', description: 'Description for card 9', price: 100 },
  { image: img10, title: 'Card 10', description: 'Description for card 10', price: 100 },
  { image: img11, title: 'Card 11', description: 'Description for card 11', price: 100 },
  // Adicione mais cards conforme necessário
];

export const UserHome = () => (
    <PageLayout>
   <Container>
        <Banner image={img} />
        <Carousel cards={refeicoes} title="Refeições" isActive={true}/>
        <Carousel cards={sobremesas} title="Sobremesa" isActive={false}/>
        <Carousel cards={bebidas} title="Bebidas" isActive={true}/>
    </Container>
    </PageLayout>
 
); 