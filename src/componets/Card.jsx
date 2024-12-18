import { faHourglass1 } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
export default function Card({production}){
    const [hover, setHover]=useState(false);
   
   
    const formatLanguage=()=>{
        if(production.original_language==='en') return'GB'
        return production.original_language.toUpperCase();
    } 
    const createdUrlImg=(poster)=>{
    const imgUrl=`https://image.tmdb.org/t/p`;
    const size=`/w342`;
    return imgUrl+size+poster;
    }
    const newVote = Math.ceil(production.vote_average/2)




    return(
        <div 
        className='card'
        onMouseEnter={()=> setHover(true)}
        onMouseLeave={()=>setHover(false)}
        >
        <img src={createdUrlImg(production.poster_path)} alt="{production.title}"
         className=''
        />
        {
            hover && (
                <div className='card-body'>
                  <h5 className='card-title'>{production.title}</h5>
                  <h6 card-subtitle>{production.original_title}</h6>
                  <img src={`https://flagsapi.com/${formatLanguage()}/flat/64.png`} className='flag'></img>
                  <p card-text>{newVote}/5</p>

                </div>
            )
        }
        </div>
       
        
       
    )
      }
/**<ul >
        <li className="text-white">{production.title} </li>
        <li className="text-white">{production.original_title}
        </li>
        <li className="text-white">{production.original_language}
        <img src={`https://flagsapi.com/${formatLanguage()}/flat/64.png`}></img>
        </li>
        <li className="text-white">{newVote}</li>
        <li><img src={createdUrlImg(production.poster_path)} alt="" className='border border-light'/></li>
      </ul>*/