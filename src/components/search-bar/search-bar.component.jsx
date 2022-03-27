import { Component } from "react";
import './search-box.style.css';

class SearchBox extends Component{
    render(){
        const {filterMonster,placeholder,className} = this.props;
        return(
            <div>
            <input className={`search-box ${className}`}
             type="search" 
             placeholder={placeholder}
             onChange={filterMonster}
            />
            </div>
        )
    }
}

export default SearchBox;