import React from 'react';
import { Button } from 'react-bootstrap';
import { Link} from 'react-router-dom';

const Lunch = ({ food }) => {
    const { img, name, description, price } = food;
    return (
        <div className='col-md-4 col-sm-12 my-3 single-meals'>
            <img className='breakfast-img' src={img} alt="" />
            <p>{name}</p>
            <small>{description}</small>
            <h5>$ {price}</h5>
            <Link to='/food'>
                Details
            </Link>
        </div>
    );
};

export default Lunch;