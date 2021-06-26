import React, {useState} from 'react';
import data from './data';
import {FaQuoteRight, FaChevronLeft, FaChevronRight} from 'react-icons/fa';

const Reviews = () => {
    const [index, setIndex] = useState(0);
    const {image, job, name, text} = data[index];

     const newPerson = (number) => {
        if(number > data.length - 1) {
           return 0;
        }
        if(number < 0) {
          return data.length - 1;
        }
        return number;
     }

     const nextPerson = () => {
         setIndex((index) => {
             let newIndex = index + 1;
             return newPerson(newIndex);
         })
     }

     const prevPerson = () => {
         setIndex((index) => {
             let newIndex = index - 1;
             return newPerson(newIndex);
         })
     }

     const randomPerson = () => {
          let rand = Math.floor(Math.random() * data.length);
          if(rand === index) {
            rand = index + 1;
          }
          setIndex(newPerson(rand));
     }

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
             <button className="prev-btn" onClick={prevPerson}>
                 <FaChevronLeft />
             </button>
             <button className="next-btn" onClick={nextPerson}>
                 <FaChevronRight />
             </button>
         </div>
         <button className="random-btn" onClick={randomPerson}>surprise me</button>
       </article>
    )
}


export default Reviews