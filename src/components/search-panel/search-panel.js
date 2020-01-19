import React, {Component} from 'react'
import './search-panel.css'

export default class SearcPanel extends Component{
    state = {
        term:''
    }

    changeHandler = (e) =>{
        const term = e.target.value
        this.props.onSearch(term);
        this.setState({
            term:term
        })
    }

    render(){

        return  <input
                    placeholder='search' 
                    className='form-control search-input'
                    value={this.state.search}
                    onChange={this.changeHandler}
                    />
    }
}
