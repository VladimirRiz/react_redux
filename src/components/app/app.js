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
        ],
        term:'',
        filter:'all'
    }

    createToDoItem(label){
        return{
            label,
            important: false,
            done:false,
            id:this.maxId++
        }
    }

    search(items,term) {
        if(term.length === 0){
            return items;
        }
        return items.filter((item) => {
            return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
        })
    }

    onSearch = (term) =>{
        this.setState({term})
    }

    filter(items,filter){
        switch(filter){
            case 'all':
                return items;
            case 'active':
                return items.filter((item) => !item.done);
            case 'done':
                return items.filter((item) => item.done);
            default:
                return items
        }
    }

    onFilter = (filter) =>{
        this.setState({filter})
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

        const {todos,term,filter} = this.state,
              doneCount = todos.filter((el) => el.done).length,
              toDoCount = todos.length - doneCount,
              visibleItems = this.filter(this.search(todos,term),filter);

        return(
            <div className='todo-app'>
                <AppHeader toDo={toDoCount} done={doneCount}/>
                <div className='top-panel d-flex'>
                    <SearcPanel
                        onSearch={this.onSearch}
                    />
                    <ItemStatusFilter
                        filter={filter}
                        onFilter={this.onFilter}
                    />
                </div>
                <TodoList 
                    todos = {visibleItems}
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

