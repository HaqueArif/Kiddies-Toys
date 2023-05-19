import { useState } from "react";
import { Link } from "react-router-dom";

const AlltoysCard = ({ toy }) => {

    const [viewToy, setViewToy] = useState(null);
    const { _id, photo_url, name, seller_name, seller_email, price, rating, available_quantity, detail_description, category } = toy;




    return (

        <tr>
            <td>{name}</td>
            <td>{seller_name}</td>
            <td>{category}</td>
            <td>${price}</td>
            <td>{available_quantity}</td>
            <td className="text-end">
                <Link to= {`/toyDetails/${_id}`}>
                    <button className="btn bg-[#a5c927] hover:bg-[#ffc22c] border-none mt-1" htmlFor="my-modal" >View Details</button >
                </Link>
            </td>
        </tr>

    );
};

export default AlltoysCard;