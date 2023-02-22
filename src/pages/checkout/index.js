import { useState } from "react";
import CheckoutForm from "../../components/forms/checkoutForm";
import Header from "../../components/header";
import Filter from "../../components/filter";

const Checkout=()=>{
    const [filterText, setFilterText] = useState();
    const handleFilterTextChange = (e) => {
        setFilterText(e.target.value.toLowerCase())
    }
    return(
        <>
        <Header/>
        <Filter
                filterText={filterText}
                handleFilter={handleFilterTextChange} />
        <CheckoutForm filterText={filterText}/>
        </>
    )
}
export default Checkout;