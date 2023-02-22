import React, { useContext, useEffect, useState } from 'react';
import Header from '../../components/header';
import ProductForm from '../../components/forms/productForm';
import { appContext } from '../../appContext';
import {
    getDoc, doc, updateDoc
} from "firebase/firestore";
import { db, storage } from "../../firebase";
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';

const UpdateProduct = () => {
    const { state, setState } = useContext(appContext);
    const [product, setProduct] = useState()
    
    // retrieve product
    const getProduct = async () => {
        const productDoc = doc(db, "products", localStorage.getItem('id'));
        const docVar = await getDoc(productDoc);
        console.log(docVar.data());
        setProduct(docVar.data());

        setState({
            ...state,
            productName: docVar.data().name,
            description: docVar.data().description,
            category: docVar.data().category,
            price: docVar.data().price,
            quantity: docVar.data().quantity,
            file: docVar.data().file
        })
    };
    useEffect(() => {
        if (!product) {
            getProduct();
        }
    })
    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    const handleChangeFile = (e) => {

        // use this function which take firebase URL
        getImage(e.target.files[0])
        
    }

    // handle category on change
    const handleCategory = (e) => {
            setState({
                ...state,
                category: e.target.value
            })
    }
    
    // to get Image URL
    const getImage = (file) => {
        var image = file;

        var imageName = image.name;
        const imageRef = ref(storage, `fiacre-brand/${imageName}`);
        
        uploadBytes(imageRef, file).then((snapshot) => {
            getDownloadURL(snapshot.ref).then(async (url) => {
                console.log(url)
                setState({
                    ...state,
                    file: url
                })
            });
        });
    }

    // onsubmit function
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(state)
        const productDoc = doc(db, "products", localStorage.getItem('id'));
        let newFields = {
            name: state.productName,
            description: state.description,
            quantity: state.quantity,
            category: state.category,
            price: state.price,
            imageURL:state.file
        }
        await updateDoc(productDoc, newFields)

        setState({
            productName: '',
            description: '',
            category: '',
            price: 0,
            quantity: 0,
        })

        // redirect after updating
        window.location.href = "https://wingi-store.vercel.app/admin";
    }
    return (
        <div className='auth-form'>
            <Header />
            <ProductForm
                productName={state.productName}
                description={state.description}
                price={state.price}
                category={state.category}
                quantity={state.quantity}
                handleCategory={handleCategory}
                handleChangeFile={handleChangeFile}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
            />
        </div>
    )
}
export default UpdateProduct;
