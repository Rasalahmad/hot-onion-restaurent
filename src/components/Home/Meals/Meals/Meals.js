import React, { useEffect, useState } from 'react';
import { Tabs, Tab, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Breakfast from '../Breakfast/Breakfast';
import Dinner from '../Dinner/Dinner';
import Lunch from '../Lunch/Lunch';
import './Meals.css';

const Meals = () => {
    const [foods, setFoods] = useState([])
    useEffect(() => {
        fetch('./foods.json')
            .then(res => res.json())
            .then(data => setFoods(data));
    }, [])
    return (
        <div className='container'>
            <div>
                <Tabs defaultActiveKey="Breakfast" id="uncontrolled-tab-example" className="mb-3 meals-container">
                    <Tab eventKey="Breakfast" title="Breakfast">
                        <div className='row my-5'>
                            {
                                foods.slice(0, 6).map(food => <Breakfast
                                    key={food.id}
                                    food={food}
                                >
                                </Breakfast>)
                                
                            }
                        </div>
                    </Tab>
                    <Tab eventKey="Lunch" title="Lunch">
                        <div className='row my-5'>
                            {
                                foods.slice(6, 12).map(food => <Lunch
                                    key={food.id}
                                    food={food}
                                >
                                </Lunch>)
                            }
                        </div>
                    </Tab>
                    <Tab eventKey="Dinner" title="Dinner">
                        <div className='row my-5'>
                            {
                                foods.slice(12, 18).map(food => <Dinner
                                    key={food.id}
                                    food={food}
                                ></Dinner>)
                            }
                        </div>
                    </Tab>
                </Tabs>
                <Link to='/food'>Book Your Order</Link>
            </div>
        </div>
    );
};

export default Meals;