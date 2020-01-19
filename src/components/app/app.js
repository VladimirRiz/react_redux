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
            this.createToDoItem('Drink Coffee'),
            this.createToDoItem('Make Awesome App'),
            this.createToDoItem('Have a lunch')
        ]
    }

    createToDoItem(label){
        return{
            label,
            important: false,
            done:false,
            id:this.maxId++
        }
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
        const newItem = this.createToDoItem(text)

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
    
    toggleProperty(arr, id, propName){
        const idx = arr.findIndex((el) => el.id === id),
              oldItem = arr[idx],
              newItem = {...oldItem, [propName]:!oldItem[propName]};
              return[
                    ...arr.slice(0,idx),
                    newItem,
                    ...arr.slice(idx+1)
                  ];
        }

    onToggleDone = (id) => {
        this.setState(({todos}) => {
            return{
                todos:this.toggleProperty(todos,id,'done')
            }
        })
    }

    onToggleImportant = (id) => {
        this.setState(({todos}) => {
            return{
                todos:this.toggleProperty(todos,id,'important')
            }
        })
    }

    render(){

        const {todos} = this.state,
              doneCount = todos.filter((el) => el.done).length,
              toDoCount = todos.length - doneCount;

        return(
            <div className='todo-app'>
                <AppHeader toDo={toDoCount} done={doneCount}/>
                <div className='top-panel d-flex'>
                    <SearcPanel/>
                    <ItemStatusFilter/>
                </div>
                <TodoList 
                    todos = {todos}
                    onDeleted={this.deleteItem}
                    onToggleDone={this.onToggleDone}
                    onToggleImportant={this.onToggleImportant}
                />
                <AddItem
                    addItem={this.addItem}
                />
            </div>
        )
    }
    }

