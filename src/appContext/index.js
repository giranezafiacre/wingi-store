import React, { useState } from 'react';

var store = {
    productName:'',
    description:'',
    category:'',
    quantity:0,
    file:null
}
export const appContext = React.createContext(store);

const AppContext=(props)=>{
    const [state, setState] = useState(store);
    return (
        <appContext.Provider value={{ state, setState }}>
            {props.children}
        </appContext.Provider>
    );

}
export default AppContext;