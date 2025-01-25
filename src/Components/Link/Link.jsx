import PropTypes from 'prop-types';

const Link = ({route}) => {
    return (
        <div><a href={route.path}>{route.name}</a></div>
    );
};
Link.propTypes={
    route: PropTypes.array.isRequired,
}
export default Link;