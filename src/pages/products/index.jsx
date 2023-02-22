import { useEffect, useState } from "react";
import Filter from "../../components/filter";
import Header from "../../components/header";
import {
    collection,
    getDocs,
} from "firebase/firestore";
import { db } from "../../firebase";
import './products.css';
import Footer from '../../components/footer';

const Products = () => {
    let productsCollectionRef = collection(db, "products");
    const [products, setProducts] = useState();
    const [filterText, setFilterText] = useState();
    const handleFilterTextChange = (e) => {
        setFilterText(e.target.value.toLowerCase())
    }

    const getProducts = async () => {
        const data = await getDocs(productsCollectionRef);
        setProducts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    // filtering products
    const filteredProducts = [];
    products?.forEach((product) => {
        if (filterText && product.name.toLowerCase().indexOf(filterText) === -1
            && product.description.toLowerCase().indexOf(filterText) === -1
            && product.category.toLowerCase().indexOf(filterText) === -1) {
            return;
        }
        filteredProducts.push(
            <div className="card" style={{ "width": "18rem" }}>
                <img className="card-img-top" src={product.imageURL} alt={product.name} />
                <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">{product.description}</p>
                    <div className="buttons-prod">
                        <a href="/href" className="btn btn-primary">Buy</a>
                    </div>


                </div>
            </div>
        );
    })

    useEffect(() => {
        if (!products) {
            getProducts();
        }
    });
    return (
        <>
            <Header />
            <Filter
                filterText={filterText}
                handleFilter={handleFilterTextChange} />
            {
                filteredProducts
            }
            <Footer />
        </>
    )
};

export default Products;