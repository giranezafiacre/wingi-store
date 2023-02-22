import { useState } from "react";
import CheckoutForm from "../../components/forms/checkoutForm";
import Header from "../../components/header";
import Filter from "../../components/filter";

const Checkout=()=>{

    // declare states of filtering text and handling onchange events in its input
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