import React  from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './index.css';
import bg from './background.jpg';
import Rectangle from './App';
import Search from './Search';
class Woc_header extends React.Component
{
    render()
    {
    return (
            
            <Rectangle />  
    );
    }
}

ReactDOM.render(<Woc_header />,document.getElementById('root'));
