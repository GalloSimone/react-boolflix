export default function Card({production}){
    const formatLanguage=()=>{
        if(production.original_language==='en') return'GB'
        return production.original_language.toUpperCase();
    } 
    const createdUrlImg=(poster)=>{
    const imgUrl=`https://image.tmdb.org/t/p`;
    const size=`/w342`;
    return imgUrl+size+poster;
    }


    
    return(
    <ul >
        <li>{production.title}</li>
        <li>{production.original_title}
        </li>
        <li>{production.original_language}
        <img src={`https://flagsapi.com/${formatLanguage()}/flat/64.png`}></img>
        </li>
        <li>{production.vote_average}</li>
        <li><img src={createdUrlImg(production.poster_path)} alt="" /></li>
      </ul>
      )
}