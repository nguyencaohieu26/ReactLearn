import {Component} from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-bar/search-bar.component';
import './App.css';
class App extends Component {
  constructor(){
    super();
    this.state = {
      monsters:[],
      searchField:'',
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((result)=>result.json()
    .then(users => this.setState(()=>{
      return {monsters:users}
    },()=>{console.log(this.state);})))
    .catch(err =>console.log(err))
  }

  onSearchChange =(e)=>{
    const searchField = e.target.value.toLocaleLowerCase();
    this.setState(()=>{
      return {searchField}
    })
  }

  render(){
    const {searchField,monsters} = this.state; 
    const {onSearchChange} = this;

    const filterMonster = monsters.filter((monster)=>{
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    return (
      <div className="App">
        <h3 className='app-title'>Monsters Rolodex</h3>
        <div><SearchBox filterMonster = {onSearchChange} className="search-box" placeholder="search monsters"/></div>
        <CardList monsters={filterMonster}/>
      </div>
    );
  }
}
/** 
 * componentDidMount: method 
 *  -> run when ever the component mount
 *  -> mounting is the first time a component gets placed onto the top
 *  
 */
export default App;
