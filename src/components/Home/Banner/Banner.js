import React from 'react';
import { FormControl, InputGroup, Button } from 'react-bootstrap';
import './Banner.css';

const Banner = () => {
    return (
        <div className='banner-container'>
            <div>
            <h1 className = 'text-uppercase'>Best food waiting for your belly</h1>
            <InputGroup className="mb-3 w-75 mx-auto">
                <FormControl
                    className='input-cont'
                    placeholder="Search your food items"
                    aria-label="Search your food items"
                    aria-describedby="basic-addon2"
                />
                <Button variant="outline-secondary" className='input-cont' id="button-addon2">
                    Search
                </Button>
            </InputGroup>
            </div>
        </div>
    );
};

export default Banner;