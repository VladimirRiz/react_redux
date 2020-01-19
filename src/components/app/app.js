import React, {Component} from 'react';
import './app.css'

import AppHeader from '../app-header';
import SearcPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import AddItem from '../add-item'


export default class App extends Component{  

    maxId = 50;

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

    addItem = (text) =>{
        const newItem = {
            label : text,
            important: false,
            id:this.maxId++
        }

        this.setState(({todos}) =>{
            const newArr = [
                ...todos,
                newItem
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
                <AddItem
                    addItem={this.addItem}
                />
            </div>
        )
    }
    }

