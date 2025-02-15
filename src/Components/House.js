import React from 'react';
import { NewRoomForm } from './NewRoomForm';

export const House = (props) => {
    const { house, updateHouse, deleteHouse} = props;

    //the method to delete a room from a house
    const deleteRoom = (roomId) => { 
        const updatedHouse = {
            ...house,
            rooms: house.rooms.filter((x) => x._id !== roomId)
        };
        updateHouse(updatedHouse);
    }

    const addNewRoom = (room) => updateHouse({ ...house, rooms: [...house.rooms, room]})

    const rooms = () => (
        <ul>
            {house.rooms.map((room, index) => (
                <li key={index}>
                    <label> {`${room.name} Area: ${room.area}`}</label>
                    <button className="delete" onClick={(e) => deleteRoom(room._id)}>Delete</button> 
                </li>
            ))}
        </ul>
    );

    return (
        <div className='house-container'> 
            <span><h2 className='text-shadow'>{house.name}</h2> <button className="delete" onClick={(e) => deleteHouse(house._id)}>Delete House</button></span>
            {
                rooms({ rooms, houseId: house._id, deleteRoom})
            }
            <NewRoomForm addNewRoom={addNewRoom} />
        </div>
    );
};