import React  from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Rectangle from './Components/Rectangle/';
class Index extends React.Component {
    render() {
        return (
            <Rectangle />
        );
    }
}
ReactDOM.render(<Index />,document.getElementById('root'));
