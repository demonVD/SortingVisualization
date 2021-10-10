import React from 'react';
import CustomBox from './Box.js';
import './BoxContainer.css';




// const array = [5, 4, 3, 2, 1];
// const listItems = array.map((number) => <CustomBox number={number}/>);

class BoxContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = { array: props.array };
    }
    render() {
        return (<div className='flexbox-container'>{ this.state.array.map((number) => <CustomBox number={number}/>)}</div>);
    }
}

export default BoxContainer;