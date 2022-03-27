import { Component } from "react";
import './card-list.style.css';
class CardList extends Component{  
     
    render(){
        console.log('render1');
        const {monsters} = this.props;
        return(
        <div className="card-list">
            {
               monsters.map(monster =>{
               return <div className="card-container" key={monster.id}>
                   <img src={`https://robohash.org/${monster.id}?set=set2&size=180x180`} alt={`monster-${monster.name}`}/>
                   <h3>{monster.name}</h3>
                   <p>{monster.email}</p>
               </div>
               })
            }
            </div>)
    }
}
export default CardList;