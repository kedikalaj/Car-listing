import { useState } from "react";
import f40 from './img/f4001.jpg';
import supra from './img/sssupra.jpg';
import gtr from './img/gtr.jpg';
import rx from './img/rx.jpg';
import ford from './img/mustang.jpeg';
import heart from './img/heart.svg';
import './CarShow.css';

const imgMap={
    supra : supra,
    skyline :gtr,
    mazda : rx,
    mustang : ford,
    ferrari: f40
}



function CarShow({type}){
    const[clicks, setClicks]=useState(0);
       const handleClick = () =>{
        setClicks(clicks+1);
   }


return(
    <div className="car-show" onClick={handleClick}>
        <img className="car" alt='animal' src={imgMap[type]} style={ {width:600 + 'px'} } />
        <img alt="heart" className="heart" 
        src={heart} 
        style={ {width:25 + 10 * clicks + 'px'} }/>
    </div>
);

}

export default CarShow;