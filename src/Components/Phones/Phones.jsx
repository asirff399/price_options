import { useEffect, useState } from "react";
import axios from "axios";
import { BarChart, Bar, XAxis, YAxis, Tooltip} from 'recharts';
import { InfinitySpin } from "react-loader-spinner";

const Phones = () => {
    const [phones,setPhones] = useState([])
    const [loader,setLoader] = useState(true)
    useEffect(()=>{
        // fetch("https://openapi.programming-hero.com/api/phones?search=iphone")
        // .then(res=>res.json())
        // .then(data=>setPhones(data.data))
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(data=>{
            const phoneData = data.data.data 
            const fakePhoneData = phoneData.map(phone=> {
                const obj ={
                    name: phone.phone_name,
                    price: parseInt(phone.slug.split('-')[1])
                }
                return obj
            })
            setPhones(fakePhoneData)
            setLoader(false)
        })
        
    },[])

    

    return (
        <div>
            <h1 className="text-2xl">Phones: {phones.length}</h1>
            <BarChart width={600} height={400} data={phones}>
                <Bar dataKey="price" fill="#8884d8" />
                <XAxis dataKey="name"></XAxis>
                <YAxis dataKey="price"></YAxis>
                <Tooltip></Tooltip>
            </BarChart>

            {loader && <InfinitySpin
            visible={true}
            width="200"
            color="#4fa94d"
            ariaLabel="infinity-spin-loading"
            />}
        </div>
    );
};

export default Phones;