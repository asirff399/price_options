import { useEffect, useState } from "react";
import Priceoption from "../Priceoption/Priceoption";

const Priceoptions = () => {
    const [option,setOption] = useState([])
    useEffect(()=>{
        fetch('prices.json')
        .then(res=>res.json())
        .then(data=>setOption(data))
    },[])
    return (
        <div>
            <h2 className="text-5xl text-center">Best Prices</h2>
            {
                option.map(price=> <Priceoption key={price.id} price={price}></Priceoption>)
            }
        </div>
    );
};

export default Priceoptions;