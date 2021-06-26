import React, {useState} from 'react';
import data from './data';
import {FaQuoteRight, FaChevronLeft, FaChevronRight} from 'react-icons/fa';

const Reviews = () => {
    console.log(data);
    const [index, setIndex] = useState(0);
    const {id, image, job, name, text} = data[index];
    return (
       <article className="review">
         <div className="img-container">
           <img src={image} alt={name} className="person-img"/>
           <span className="quote-icon">
               <FaQuoteRight />
           </span>
         </div>
         <h4 className="author">{name}</h4>
         <p className="job">{job}</p>
         <p className="info">{text}</p>
         <div className="button-container">
             <button className="prev-btn">
                 <FaChevronLeft />
             </button>
             <button className="next-btn">
                 <FaChevronRight />
             </button>
         </div>
         <button className="random-btn">surprise me</button>
       </article>
    )
}


export default Reviews