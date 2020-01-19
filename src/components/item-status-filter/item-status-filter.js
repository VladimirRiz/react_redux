import React,{Component} from 'react';
import './item-status-filter.css';

export default class ItemStatusFilter extends Component{

    btns = [
        {name:'all' , label: "All"},
        {name:'active' , label: "Active"},
        {name:'done' , label: "Done"}
    ]

    render(){
        const {filter,onFilter} = this.props;
         const arr = this.btns,
               list = arr.map(({name, label}) => {
                const isActive = filter === name,
                      clazz = isActive ? 'btn-info' : 'btn-outline-secondary'
                  return(
                    <button key={name} 
                            type='button' 
                            className={`btn ${clazz}`}
                            onClick={() => onFilter(name)}
                            >
                    {label}
                    </button>
                  )
              })

        return(
            <div className='btn-group'>
                {list}
            </div>
        )
    }
}
