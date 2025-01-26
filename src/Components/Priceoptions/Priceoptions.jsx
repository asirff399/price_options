import { useEffect, useState } from "react";
import Priceoption from "../Priceoption/Priceoption";

const Priceoptions = () => {
    const [priceopt,setPriceopt] = useState([])
    useEffect(()=>{
        fetch('prices.json')
        .then(res=>res.json())
        .then(data=>setPriceopt(data))
    },[])
    return (
        <div>
            <h2 className="text-5xl text-center">Best Prices</h2>
            <div className="md:w-5/6 lg:w-4/6 mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-4 items-center p-5">
                {
                    priceopt.map(option=> <Priceoption key={option.id} option={option}></Priceoption>)
                }
            </div>
            
        </div>
    );
};

export default Priceoptions;