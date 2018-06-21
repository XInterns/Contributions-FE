import React  from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Rectangle from './Components/Rectangle/';
class Index extends React.Component {
    render() {
        return (
            <div className="Rectangle-3">
                <div className="Div1" >
                    <div className="Wall-of-Contribution" >WALL OF CONTRIBUTION</div>
                    <div className="Coming-together-is-a">Coming together is a beginning. Keeping together is progress. Working together is success.</div>
                </div>
                <Rectangle />
            </div>
        );
    }
}
ReactDOM.render(<Index />,document.getElementById('root'));
