import PropTypes from 'prop-types';

const Link = ({route}) => {
    return (
        <li className='py-1 px-2 hover:bg-slate-900 rounded-lg'><a href={route.path}>{route.name}</a></li>
    );
};
Link.propTypes={
    route: PropTypes.array.isRequired,
}
export default Link;