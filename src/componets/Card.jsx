export default function Card({production}){
    return(
    <ul >
        <li>{production.title}</li>
        <li>{production.original_title}</li>
        <li>{production.original_language}</li>
        <li>{production.vote_averange}</li>
      </ul>
      )
}