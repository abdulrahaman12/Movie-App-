import React from 'react';
import Tshirt from "../../../public/shirt.jpg"
import { CiStar } from "react-icons/ci";



const CardItem: React.FC = () => {
    const totalstars: number = 5;
    return (
        <div >
            <img src={Tshirt} alt="tshirt" style={{ width: "150px" }} className='mt-2' />
            <p className='fw-bold'>Handmade Rubber keyboard</p>
            <p>$953</p>
            <p>4 days delivery</p>
            <p>{Array.from({ length: totalstars }).map((_, index) => (<CiStar key={index} />))}</p>
            <button className='btn btn-primary'>Add to cart</button>

        </div>
    )
}

export default CardItem