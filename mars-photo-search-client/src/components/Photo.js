import React from 'react';
import './Photo.css';

const Photo = (props) => {
  return (
        <div className="SongCard">
            <img
            src={props.img}
            alt={`Mars at sol ${props.sol} with camera ${props.camera}`}
            // width='100%'
            height='100%'
          />
          </div>
        )
}

export default Photo;
