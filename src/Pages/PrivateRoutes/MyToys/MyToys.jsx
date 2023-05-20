import React, { useContext } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';

const MyToys = () => {
    const {user} = useContext(AuthContext);

    const url = `http://localhost:5000/myToys?seller_email=${user.email}`
    
    return (
        <div>
            
        </div>
    );
};

export default MyToys;