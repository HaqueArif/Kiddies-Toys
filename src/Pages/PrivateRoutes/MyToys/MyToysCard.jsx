


const MyToysCard = ({ toy }) => {

    const { photo_url, name, seller_name, seller_email, category, price, rating, available_quantity, detail_description } = toy;

    return (
        <tr>
            <td>
                <div className="avatar flex flex-col">
                    <div className="mask mask-squircle w-24">
                        <img src={photo_url} alt={name} />
                    </div>
                    <h3>{name}</h3>
                    <p title={detail_description}>
                        <span className="font-bold">Description: </span><span>{detail_description.slice(0, 30)}{detail_description.length > 10 ? '...' : ''}</span>
                    </p>
                    {/* <h3 title={name}>{name.slice(0, 30)}{name.length > 10 ? '...' : ''}</h3> */}
                </div>
            </td>
            <td><p><span className="font-bold">Name: </span>{seller_name}</p> 
            <p><span className="font-bold">Email: </span>{seller_email}</p></td>
            <td><p><span className="font-bold">Category: </span>{category}</p>
            <p><span className="font-bold">Ratings: </span>{rating}</p></td>
            <td><p><span className="font-bold">Quantity: </span>{available_quantity}</p>
            <p><span className="font-bold">Price: </span>${price}</p></td>

            <td className="flex flex-col gap-1">
                <button className="p-2 rounded-md font-bold text-white bg-[#a5c927] hover:rounded-2xl  hover:bg-[#ffc22c] border-none">Update</button>
                <button className="p-2 rounded-md font-bold text-white bg-red-500 hover:rounded-2xl  hover:bg-orange-700 border-none ">Delete</button>
            </td>
        </tr>

    );
};

export default MyToysCard;