import React from 'react'
import {useContext} from 'react';
import { RoomContext } from "../context";
import Title from '../components/Title';

const getUnipue = (items, value) => {
    return [...new Set(items.map(item => item[value]))];
};

export default function RoomsFilter( { rooms }) {
    const context = useContext(RoomContext);
    const {
        handleChange,
        type,
        capacity,
        price,
        minPrice,
        maxPrice,
        maxSize,
        minSize,
        breakfast,
        pets 
    } = context;

    let types = getUnipue(rooms, "type");
    types = ["all", ...types];
    //map to JSX
    types = types.map((item, index) => {
        return (
            <option value={item} key={index}>{item}</option>
        );
    });

    let people = getUnipue(rooms, 'capacity');
    people = people.map((item, index) => {
        return <option key={index} value={item}>{item}</option>
    });

    return (
       <section className="filter-container">
           <Title title="search rooms" />
            <form className="filter-form">
                    {/* Select type room */}
                <div className="form-group">
                    <label htmlFor="type">Room type</label>
                    <select name="type" id="type" value={type} 
                    className="form-control"
                    onChange={handleChange}>
                      {types}
                    </select>
                </div>
                    {/* Select capacity room */}
                <div className="form-group">
                    <label htmlFor="capacity">Guests</label>
                    <select name="capacity" id="capacity" value={capacity} 
                    className="form-control"
                    onChange={handleChange}>
                      {people}
                    </select>
                </div>
                    {/* Price bar choose */}
                <div className="form-group">
                    <label htmlFor="price">Room price ${price}</label>
                    <input type="range" name="price" min={minPrice} max={maxPrice}
                    id="price" value={price} onChange = {handleChange} className="form-control" />
                </div>
                    {/* Choose Size */}
                <div className="form-group">
                    <label htmlFor="size">Room size</label>
                    <div className="size-inputs">
                        <input type="number" name="minSize" id="size"
                        value={minSize} onChange={handleChange}
                        className="size-input"/>
                         <input type="number" name="maxSize" id="size"
                        value={maxSize} onChange={handleChange}
                        className="size-input"/>
                    </div>
                </div>
                    {/* Extras */}
                <div className="form-group">
                    <div className="single-extra">
                        <input type="checkbox" name="breakfast" id="breakfast"
                        checked={breakfast} onChange={handleChange}/>
                        <label htmlFor="breakfast">Breakfast</label>
                    </div>
                    <div className="single-extra">
                        <input type="checkbox" name="pets" id="pets"
                        checked={pets} onChange={handleChange}/>
                        <label htmlFor="pets">Pets</label>
                    </div>
                </div>
            </form>
       </section>
    );
}
