import CategoriesItem from './CategoriesItem';

const Categories = () => {
    const categories = ['All', 'Business', 'Social', 'Home', 'Personal'];

    return (
        <div className="flex gap-[12px]">
            {categories.map((item) => (
                <CategoriesItem key={item} item={item} />
            ))}
        </div>
    );
};

export default Categories;
