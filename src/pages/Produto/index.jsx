import PageLayout from "../Layout"
import { ProductDetail } from "../../components/ProdutoDetalhes"
import img from  '../../assets/foods/Mask group-1.png'

const product = {
    image: img,
    title: 'Salada Ravanello',
    description: 'Rabanetes, folhas verdes e molho agridoce salpicados com gergelim. O pão naan dá um toque especial.',
    ingredients: ['alface', 'cebola', 'pão naan', 'pepino', 'rabanete', 'tomate'],
    price: '25,00'
  };

export const Produto = () => (
    <PageLayout>
        <ProductDetail product={product}/>
    </PageLayout>
)
    