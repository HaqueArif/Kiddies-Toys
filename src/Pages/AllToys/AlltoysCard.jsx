import { useState } from "react";
import { Link } from "react-router-dom";

const AlltoysCard = ({ toy }) => {

    const [viewToy, setViewToy] = useState(null);
    const { _id, name, seller_name, price, available_quantity,category } = toy;




    return (

        <tr>
            <td>{name}</td>
            <td>{seller_name}</td>
            <td>{category}</td>
            <td>${price}</td>
            <td>{available_quantity}</td>
            <td className="text-end">
                <Link to= {`/toyDetails/${_id}`}>
                    <button className="btn bg-[#a5c927] hover:bg-[#ffc22c] border-none mt-1">View Details</button >
                </Link>
            </td>
        </tr>

    );
};

export default AlltoysCard;