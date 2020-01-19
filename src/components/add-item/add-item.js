import React, {Component} from 'react';

import './add-item.css'

export default class AddItem extends Component{
    render(){
        const{addItem} = this.props;
        return(
            <div className='add-item'>
                <button type='button'
                        className='btn btn-outline-secondary btn-sm float-right'
                        onClick={() => addItem("hello world")}>
                        Add Item
                </button>
            </div>
        )
    }
}
