import React  from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import bg from './background.jpg';
import Rectangle from './App';
class Index extends React.Component {
    render() {
        return (
            <Rectangle />
        );
    }
}
ReactDOM.render(<Index />,document.getElementById('root'));
