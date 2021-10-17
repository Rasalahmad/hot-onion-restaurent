import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const FoodDetails = () => {
    const {foodId} = useParams();
    const [details, setDetails] = useState([]);
    const [singleFood, setSingleFood] = useState([])
    useEffect( () => {
        fetch('details.json')
        .then(res => res.json())
        .then(data => setDetails(data))
    }, []);
    console.log(details);
    // useEffect( () => {
    //     const foundFood = details.find(dt => dt.id === foodId);
    //     setSingleFood(foundFood);
    // } , [details])
    // console.log(singleFood);
    return (
        <div>
            <h2>Details is here {foodId}</h2>
        </div>
    );
};

export default FoodDetails;
