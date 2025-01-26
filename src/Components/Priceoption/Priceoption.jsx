import PropTypes from "prop-types";
import Features from "../Features/Features";
const Priceoption = ({option}) => {
    const {name,price,features} = option;
    return (
        <div className="h-full flex flex-col text-center bg-slate-800 rounded-2xl py-5">
            <h2>
                <span className="text-5xl">{price}</span>
                <span>/mon</span>
            </h2>
            <h4 className="text-3xl pt-4">{name}</h4>
            <div className="px-20 flex-grow py-3">
                {
                    features.map((feature,idx) => <Features key={idx} feature={feature}></Features>)
                }
            </div>
            <button className="bg-green-400 text-black font-bold py-2 px-11 rounded-lg mt-3 mx-5">Buy Now</button>
        </div>
    );
};
Priceoption.propTypes = {
    option:PropTypes.object.isRequired,
}
export default Priceoption;