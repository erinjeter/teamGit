const RestaurantName = ({name, id}) => {
    return (
        <div>
            <ul key={id}>
                <li>{name}</li>
            </ul>
        </div>
    );
};

export default RestaurantName;