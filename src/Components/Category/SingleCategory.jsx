import PropTypes from "prop-types";
const SingleCategory = ({ Category }) => {
    const { logo, category_name, availability } = Category

    return (
        <div className="bg-[#f9f9ff] p-7 rounded-md font-manrop flex-1">
            <img src={logo} className="bg-[#eceaff] p-4 rounded-lg mb-7" />
            <h5 className="text-xl font-bold">{category_name}</h5>
            <p className="text-[#1d1c1c78] font-semibold">{availability}</p>
        </div>
    );
};

SingleCategory.propTypes = {
    Category: PropTypes.object
}
export default SingleCategory;