import React,{Component} from 'react';
import './App.css';
import './index.css';
import {SearchBox} from './components/search-box/search-box.components.jsx';
import {CardList} from './components/card-list/card-list.component';
class App extends Component{
  constructor(){
    super();
    this.state={
      monsters:[],
      searchField:''
    };
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(users=>this.setState({monsters:users}));
  }
  render(){
    const {monsters,searchField}=this.state;
    const  fliteredMonsters=monsters.filter(monster=>monster.name.toLowerCase().includes(searchField.toLowerCase()));
    return(
      <div className='App'>
      <h1>Monster Rolodex</h1>
      <SearchBox
        placeholder='search monsters'
        handleChange={e=>this.setState({searchField:e.target.value})}
      />
      <CardList monsters={fliteredMonsters}>
      </CardList>
      </div>
    )
  }
}
export default App;