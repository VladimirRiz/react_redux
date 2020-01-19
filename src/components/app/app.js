import React, {Component} from 'react';
import './app.css'

import AppHeader from '../app-header';
import SearcPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';


export default class App extends Component{  

    state = {
        todos : [
            {label:'Drink Coffee', important:false , id:1},
            {label:'Make Awesome App', important:true, id:2},
            {label:'Have a lunch', important:false, id:3}
        ]
    }

    deleteItem = (id) =>{
        this.setState(({todos}) =>{

            const idx = todos.findIndex((el) => el.id === id),
                newArr = [
                    ...todos.slice(0,idx),
                    ...todos.slice(idx+1)
                ]
            
            return{
                todos:newArr
            }

        })
    }

    render(){

        const {todos} = this.state;

        return(
            <div className='todo-app'>
                <AppHeader toDo={3} done={1}/>
                <div className='top-panel d-flex'>
                    <SearcPanel/>
                    <ItemStatusFilter/>
                </div>
                <TodoList 
                    todos = {todos}
                    onDeleted={this.deleteItem}
                />
            </div>
        )
    }
    }

