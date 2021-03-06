import CardList from '../Components/CardList'
import SearchBox from '../Components/SearchBox'
import React,{ Component } from "react";
import './App.css'
import Scroll from '../Components/Scroll'
class App extends Component{
    constructor(){
        super()
        this.state={
            robots:[],
            searchfield:''
        }
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users').then(response=>response.json())
        .then(users=>this.setState({robots:users}))
    }
    onSearchChange=(event) => {
        this.setState({searchfield:event.target.value})
      
    }
    render(){
        const filterrobots=this.state.robots.filter(robots=>{
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        if(this.state.robots.length===0){
          return  <h1>Loading</h1>
        }
        else{
    return(
<div className="tc">
    <h1 className='f1'>ROBOFRIENDS</h1>
    <SearchBox searchchange={this.onSearchChange}/>
    <Scroll>
    <CardList robots={filterrobots}/>
   </Scroll>
</div>
    );
        }
    }
}
export default App;
