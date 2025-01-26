import PropTypes from "prop-types";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const Features = ({feature}) => {
    return (
        <div>
            <p className="flex justify-start items-center px-2 gap-1"><IoMdCheckmarkCircleOutline/> {feature}</p>
        </div>
    );
};
Features.propTypes = {
    feature:PropTypes.string.isRequired,
}
export default Features;