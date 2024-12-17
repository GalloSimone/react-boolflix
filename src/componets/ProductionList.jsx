import Card from "./Card"
export default function ProductionList({children,productions}){
   return <section>
    {children}
    {productions.map((production)=>(
      <Card production={production}/>
    ))}
   </section>
}