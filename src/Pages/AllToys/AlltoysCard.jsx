import { useState } from "react";

const AlltoysCard = ({ toy }) => {

    const [viewToy, setViewToy] = useState(null);
    const { photo_url, name, seller_name, seller_email, price, rating, available_quantity, detail_description, category } = toy;


    

    return (

        <tr>
            <td>Name: {name}</td>
            <td>Seller Name: {seller_name}</td>
            <td>Sub Category: {category}</td>
            <td>Price: ${price}</td>
            <td>Available Quantity : {available_quantity}</td>
            <button className="btn bg-[#a5c927] border-none mt-1"  htmlFor="my-modal" >View Details</button >
        </tr>

    );
};

export default AlltoysCard;