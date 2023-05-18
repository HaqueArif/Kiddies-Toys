

const AlltoysCard = ({ toy }) => {

    const { photo_url, name, seller_name, seller_email, price, rating, available_quantity, detail_description, category} = toy;

    return (
        <div>
            <tr>
                <th>Toy Name: {name}</th>
                <td>Seller Name: {seller_name}</td>
                <td>Sub Category: {category}</td>
                <td>Price: ${price}</td>
                <td>Available Quantity : ${available_quantity}</td>
            </tr>
        </div>
    );
};

export default AlltoysCard;