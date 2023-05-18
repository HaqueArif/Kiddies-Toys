import { useState } from "react";

const AlltoysCard = ({ toy }) => {

    const [viewToy, setViewToy] = useState(null);
    const { photo_url, name, seller_name, seller_email, price, rating, available_quantity, detail_description, category } = toy;


    

    return (

        <tr>
            <td>{name}</td>
            <td>{seller_name}</td>
            <td>{category}</td>
            <td>${price}</td>
            <td>{available_quantity}</td>
            <button className="btn bg-[#a5c927] border-none mt-1"  htmlFor="my-modal" >View Details</button >
        </tr>

    );
};

export default AlltoysCard;