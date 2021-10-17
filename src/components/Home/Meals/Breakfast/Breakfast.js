import React from 'react';
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Breakfast.css'

const Breakfast = ({ food }) => {
    const { name, img, description, price, id } = food;
    return (
        <div className='col-md-4 col-sm-12 my-3 single-meals'>
            <img className='breakfast-img' src={img} alt="" />
            <p>{name}</p>
            <small>{description}</small>
            <h5>$ {price}</h5>
            <NavLink to = {`/breakfast/${id}`}>
                <Button>Details</Button>
            </NavLink>
        </div>
    );
};

export default Breakfast;
