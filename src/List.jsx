import React, {Component} from 'react';

class List extends Component{
render(){

const films = this.props.films; 

return (
    <div className='info'>
    {
    films.map((f) => {
        return <div key={f.episode_id} className='film'>Episode {f.episode_id}: {f.title} </div>
    })
    }
    </div>
    ); 
}
}

export default List; 