import React, {Component} from 'react';

import './add-item.css'

export default class AddItem extends Component{

    state = {
        label:''
    }

    onLabelChange = (e) => {
        this.setState({
            label:e.target.value
        })
    } 

    onSubmit = (e) => {
        e.preventDefault();
        const {label } = this.state
        if(label.length === 0){
            return false
        }
        this.props.addItem(label);
        this.setState({
            label:''
        })
    }

    render(){
        return(
            <form className='add-item d-flex'
                onSubmit={this.onSubmit}>
            <input type='text'
                   className='form-control'
                   onChange={this.onLabelChange}
                   value={this.state.label}
            />
                <button 
                        className='btn btn-outline-secondary btn-sm float-right'
                        >
                        Add Item
                </button>
            </form>
        )
    }
}
