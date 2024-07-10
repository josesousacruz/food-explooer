import { BannerContainer, Content, TextContainer, Title, Subtitle, Image } from "./styles";


export const Banner = ({ image }) => {
    return (
        <BannerContainer>
            <Content>
            <Image src={image} alt="Delicious Macarons" />
                <TextContainer>
                    <Title>Sabores inigualáveis</Title>
                    <Subtitle>Sinta o cuidado do preparo com ingredientes selecionados</Subtitle>
                </TextContainer>
            </Content>
        </BannerContainer>
    );
};