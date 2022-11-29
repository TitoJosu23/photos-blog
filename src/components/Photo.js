import React from 'react';
import './Photo.css';

function Photo(props) {
  return (
    <>
      <img className='img ' src={props.img_url}></img>
      {/* <div className='vp-line'></div> */}
    </>
  );
}

export default Photo;
