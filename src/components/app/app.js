import React, {Component} from 'react';
import './app.css'

import AppHeader from '../app-header';
import SearcPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';


export default class App extends Component{  
    render(){

        const todos = [
            {label:'Drink Coffee', important:false , id:1},
            {label:'Make Awesome App', important:true, id:2},
            {label:'Have a lunch', important:false, id:3}
        ]
    
        return(
            <div className='todo-app'>
                <AppHeader toDo={3} done={1}/>
                <div className='top-panel d-flex'>
                    <SearcPanel/>
                    <ItemStatusFilter/>
                </div>
                <TodoList 
                    todos = {todos}
                    onDeleted={(id) => console.log('del ', id)}
                />
            </div>
        )
    }
    }

