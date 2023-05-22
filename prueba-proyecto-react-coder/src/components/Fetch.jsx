import { useState, useEffect } from "react";

// ItemListContainer.jsx
const Fetch = () => {
    const [datos, setDatos] = useState([]);

    useEffect (() => {
        fetch("https://api.mercadolibre.com/sites/MLA/search?q=razer&limit=18")
        .then(response => response.json())
        .then(data => {
            setDatos(data.results);
        })
    },[datos]);
// ItemListContainer.jsx    

    return (
        <div className="row">
            <h4 class="pt-3" style={{ fontFamily: "RazerF5" , fontSize : 40}}>Productos</h4>
            {
            // ItemList.jsx
            datos.map(item => 
                // ItemDetail.jsx
                <div key={item.id} className="col-md-2 p-3">
                    <div className="card">
                        <img src={item.thumbnail} className="card-img-top" alt={item.title} />
                            <div className="card-body">
                                <p className="card-text"><b>{item.title}</b><br/>${item.price}</p>
                            </div>
                     </div>
                </div>
                // ItemDetail.jsx
                )    
            // ItemList.jsx
            }           
        </div>
    )
}

export default Fetch;