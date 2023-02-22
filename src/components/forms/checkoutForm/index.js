import { useContext, useEffect, useState } from "react";
import { doc, getDoc, updateDoc } from "@firebase/firestore";
import { appContext } from "../../../appContext";
import { db } from '../../../firebase';
import './checkoutForm.css';

const CheckoutForm = (props) => {
    const { state, setState } = useContext(appContext);
    const [products, setProducts] = useState([]);
    const handleChange = (e) => {
        console.log(e.target.name);
        setState({
            ...state,
            inputValues: {
                ...state.inputValues,
                [e.target.name]: e.target.value,
            }
        })
    }
    useEffect(() => {
        const fetchData = async () => {
            const uniqueArr = [...new Set(localStorage.getItem('cart').split(','))]
            const promises = uniqueArr.map(id => getDoc(doc(db, 'products', id)));
            const results = await Promise.all(promises);
            const documentsData = results.map(result => ({ ...result.data(), id: result.id }));
            setProducts(documentsData);
        };
        fetchData();
    }, []);
    const filteredProducts = [];
    products?.forEach((product) => {
        if (props.filterText && product.name.toLowerCase().indexOf(props.filterText) === -1
            && product.description.toLowerCase().indexOf(props.filterText) === -1
            && product.category.toLowerCase().indexOf(props.filterText) === -1) {
            return;
        }
        filteredProducts.push(
            <tr key={product.id}>
                <td><img className="check-out-img" src={product.imageURL} alt={product.name} /></td>
                <td className="checkout-content">
                    <div className='mb-3 input'>
                        <p>Price: Ksh{product.price}</p>

                    </div>
                    <div className='mb-3 input'>
                        <label id="icon" className='form-label' htmlFor="productName">
                            Quantity:
                        </label>
                        <input type="number" className='form-control' name={`input${product.id}`}
                            id="quantity" onChange={handleChange}
                            placeholder="e.g. 1" value={state.inputValues[`input${product.id}`]}
                            required
                        />
                    </div>
                </td>
            </tr>
        );
    })
    const handleSubmit = (e) => {
        e.preventDefault();
        products.forEach(async (product) => {
            const productDoc = doc(db, "products", product.id);
            console.log(state.inputValues);
            if ((product.quantity - state.inputValues[`input${product.id}`]) >= 0) {
                let newFields = {
                    quantity: (product.quantity - state.inputValues[`input${product.id}`]),
                }
                await updateDoc(productDoc, newFields)
                localStorage.removeItem('cart');
            } else {
                alert('we do not have that amount of ' + product.name)
            }
            window.location.href = "http://localhost:3000/"
        })
    }
    return (
        <>
            <form onSubmit={handleSubmit} className="checkout-form">
                <table>
                    {filteredProducts}
                </table>
                <div className='button'>
                    <button type='submit' className='btn'>Checkout</button>
                </div>
            </form>

        </>
    );
}
export default CheckoutForm;