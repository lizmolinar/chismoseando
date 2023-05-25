import Layout from "../../components/Layout/Layout.jsx";
import Card from "../../components/Card/Card.jsx";
import {infoProducts} from '../../utils/dataProducts.js'

const Home = () => {

    let numeros = [1,2,3,4,5,6,7,8,9,10];

    numeros.map((numero) => {
        console.log(numero);
    });
    return (
        <Layout>
            <div>
                <h1>Productos exclusivos</h1>
            </div>
            <input type="text" placeholder="Search product"/>
            <div>
                {
                    infoProducts.map((product) => (
                        <Card key={product.id} product={product}/>
                    ))
                }
            </div>
        </Layout>
    );
};

export default Home;