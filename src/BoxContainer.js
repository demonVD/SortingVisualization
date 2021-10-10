import React from 'react';
import CustomBox from './Box.js';
import './BoxContainer.css';

const array = [5, 4, 3, 2, 1];
const listItems = array.map((number) => <CustomBox number={number}/>);

class BoxContainer extends React.Component {
    render() {
        return (<div className='flexbox-container'>{ listItems }</div>);
    }
}

export default BoxContainer;