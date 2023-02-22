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
    // get collection which is going to be used
    let productsCollectionRef = collection(db, "products");

    // declare states of filtered text and products
    const [products, setProducts] = useState();
    const [filterText, setFilterText] = useState();

    // handle onchange effect and put it into lowercase so that it can be filtered correctly
    const handleFilterTextChange = (e) => {
        setFilterText(e.target.value.toLowerCase())
    }

    // get all products
    const getProducts = async () => {
        const data = await getDocs(productsCollectionRef);
        setProducts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    // add ids of products to local storage
    const addToCart = (product) => {
        let products = localStorage.getItem('cart') ? [localStorage.getItem('cart')] : []
        if (!products.includes(product.id)) {
            products.push(product.id)
        }
        localStorage.setItem('cart', products)
    }
    
    // filtering products
    const filteredProducts = [];
    products?.forEach((product) => {
        if (filterText && product.name.toLowerCase().indexOf(filterText) === -1
            && product.description.toLowerCase().indexOf(filterText) === -1
            && product.category.toLowerCase().indexOf(filterText) === -1) {
            return;
        }
        filteredProducts.push(
            <div className="card" key={product.id} style={{ "width": "18rem" }}>
                <img className="card-img-top" src={product.imageURL} alt={product.name} />
                <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">{product.description}</p>
                    <div className="buttons-prod">
                        <a href="/href" onClick={(e) => {
                            e.preventDefault();
                            addToCart(product)
                        }} className="btn btn-primary">Add To Cart</a>
                    </div>
                </div>
            </div>
        );
    })

    useEffect(() => {
        if (!products) {
            getProducts();
        } else {
            console.log(products)
        }
    });
    return (
        <>
            <Header />
            <Filter
                filterText={filterText}
                handleFilter={handleFilterTextChange} />
            <div className="products-client">
                {
                    filteredProducts
                }
            </div>
            <Footer />
        </>
    )
};

export default Products;