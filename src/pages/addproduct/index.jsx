import React, { useContext } from 'react';
import Header from '../../components/header';
import ProductForm from '../../components/forms/productForm';
import { appContext } from '../../appContext';
import AddProd from '../../firebase/addProduct';

const AddProduct = () => {
    const { state, setState } = useContext(appContext);
    console.log(state)

    // handle onchange event
    const handleChange = (e) => {
        console.log(e.target.value)
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    // handle onchange of image input
    const handleChangeFile = (e) => {
        console.log(e.target.value)
        setState({
            ...state,
            file: e.target.files[0]
        })
    }

    // handle onchange of category
    const handleCategory = (e) => {
            setState({
                ...state,
                category: e.target.value
            })
    }

    // handle onsubmit function
    const handleSubmit = async (e) => {
        e.preventDefault();
        AddProd(
            state.productName,
            state.description,
            state.price,
            state.quantity,
            state.category,
            state.file);
        setState({
            productName: '',
            description: '',
            category: '',
            quantity: 0,
        })
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
export default AddProduct;
