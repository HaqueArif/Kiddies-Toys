import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";

const AlltoysCard = ({ toy }) => {

    const { user} = useContext(AuthContext);
    const { _id, name, seller_name, price, available_quantity,category } = toy;


    const handleAlert = ()=>{
        if(!user){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'You have to log in first to view details',
              })
        }
    }


    return (

        <tr>
            <td>{name}</td>
            <td>{seller_name}</td>
            <td>{category}</td>
            <td>${price}</td>
            <td>{available_quantity}</td>
            <td className="text-end">
                <Link to= {`/toyDetails/${_id}`}>
                    <button onClick={handleAlert} className="btn bg-[#a5c927] hover:bg-[#ffc22c] border-none mt-1">View Details</button >
                </Link>
            </td>
        </tr>

    );
};

export default AlltoysCard;