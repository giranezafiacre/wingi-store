import React from 'react';
import './productForm.css'

const ProductForm = (props) => {
    return (
        <div className='product-form'>
            <div className='prod-img'>
                <h1>Create New Product</h1>
                <form onSubmit={props.handleSubmit} method='POST' action='/'>
                    <div className='mb-3 input'>
                        <label id="icon" className='form-label' htmlFor="productName">
                            Product Name*
                        </label>
                        <input type="text" className='form-control' name="productName"
                            id="productName" onChange={props.handleChange}
                            placeholder="e.g. MacBook Pro Laptop" value={props.productName}
                            required
                        />
                    </div>
                    <div className='mb-3 input textarea'>
                        <label id="icon" className='form-label' htmlFor="description">
                            Description*
                        </label>
                        <textarea type="text" className='form-control' name="description"
                            id="description" onChange={props.handleChange}
                            placeholder="e.g. MacBook Pro Laptop The new M2 chip makes the 13‑inch MacBook Pro more capable than ever...." value={props.description}
                            required
                        />
                    </div>
                    <div className='mb-3 input'>
                        <label id="icon" className='form-label' htmlFor="productName">
                            Price*
                        </label>
                        <input type="number" className='form-control' name="price"
                            id="price" onChange={props.handleChange}
                            placeholder="e.g. 14000ksh" value={props.price}
                            required
                        />
                    </div>
                    <div className='mb-3 input'>
                        <label id="icon" className='form-label' htmlFor="quantity">
                            Quantity*
                        </label>
                        <input type="number" className='form-control' name="quantity"
                            id="quantity" onChange={props.handleChange}
                            placeholder="e.g. 140" value={props.quantity}
                            required
                        />
                    </div>
                    <div className='mb-3 input'>
                        <label id="icon" className='form-label' htmlFor="password">
                            Category*
                        </label>
                        <select className='form-select' value={props.category} onChange={props.handleCategory}>
                            <option value="select">Select a category</option>
                            <option value="1">Electronics</option>
                            <option value="2">Clothes</option>
                            <option value="3">Furnitures</option>
                            <option value="4">Jeweleries</option>
                            <option value="5">Party & Gifts</option>
                        </select>
                    </div>

                    <div className='mb-3 input'>
                        <label id="icon" className='form-label' htmlFor="file">
                            Upload Image of product*
                        </label>
                        <input type="file" className='form-control' onChange={props.handleChangeFile}
                            accept="*" required/>
                    </div>
                    <div className='button'>
                        <button type='submit' className='btn'>upload</button>
                    </div>
                </form>
            </div>

        </div>
    )
}
export default ProductForm;