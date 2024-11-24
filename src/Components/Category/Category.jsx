import SingleCategory from "./SingleCategory";
import PropTypes from "prop-types";
const Category = ({ JobCategory }) => {
    return (
        <div className="space-y-5 mx-[5%] lg:mx-[10%]">
            <h3 className="text-5xl font-bold text-center mb-5">Job Category List</h3>
            <p className="text-center">Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="flex justify-evenly items-center gap-8">
                {
                    JobCategory.map(Category =>
                        <SingleCategory
                            key={Category.id}
                            Category={Category}
                        ></SingleCategory>)
                }
            </div>
        </div>
    );
};
Category.propTypes = {
    JobCategory: PropTypes.array
}
export default Category;