import { Rating } from "@smastrom/react-rating";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";



const MyToysCard = ({ toy, myToys, setMyToys }) => {

    const { loading, _id, photo_url, name, seller_name, seller_email, category, price, rating, available_quantity, detail_description } = toy;

   

    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#a5c927',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {

            if (result.isConfirmed) {
                fetch(`https://little-wonder-toys-server-haquearif143-gmailcom.vercel.app/myToys/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Toy has been deleted.',
                                'success'
                            )
                            const remaining = myToys.filter(mT => mT._id !==_id );
                            setMyToys(remaining);
                        }
                    })

            }
        })
    }
    

    return (
        <tr>
            <td>
                <div className="avatar flex flex-col">
                    <div className="mask mask-squircle w-24">
                        <img src={photo_url} alt={name} />
                    </div>
                    <h3 title={name}>
                   <span>{name.slice(0, 25)}{name.length > 25 ? '...' : ''}</span></h3>
                    <p title={detail_description}>
                        <span className="font-bold">Description: </span><span>{detail_description.slice(0, 30)}{detail_description.length > 30 ? '...' : ''}</span>
                    </p>
                </div>
            </td>
            <td><p><span className="font-bold">Name: </span>{seller_name}</p>
                <p><span className="font-bold">Email: </span>{seller_email}</p></td>
            <td><p><span className="font-bold">Category: </span>{category}</p>
            <Rating style={{ maxWidth: 100 }} value={rating} readOnly /></td>
            <td><p><span className="font-bold">Quantity: </span>{available_quantity}</p>
                <p><span className="font-bold">Price: </span>${price}</p></td>

            <td className="flex flex-col gap-1">
                <Link to={`/updateToys/${_id}`}>
                    <button className="btn w-full rounded-md font-bold text-white bg-[#a5c927] hover:rounded-2xl  hover:bg-[#ffc22c] border-none">Update</button>
                </Link>
                <button
                    onClick={() => handleDelete(_id)}
                    className="btn w-full rounded-md font-bold text-white bg-red-500 hover:rounded-2xl  hover:bg-orange-700 border-none ">Delete</button>
            </td>
            
        </tr>

    );
};

export default MyToysCard;