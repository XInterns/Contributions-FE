import React  from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Body from './Components/Body/';
class Index extends React.Component {
    render() {
        return (
            <div className="window">
                <div className="header" >
                    <div className="Wall-of-Contribution" >WALL OF CONTRIBUTION</div>
                    <div className="Coming-together-is-a">Coming together is a beginning. Keeping together is progress. Working together is success.</div>
                </div>
                <Body />
            </div>
        );
    }
}
ReactDOM.render(<Index />,document.getElementById('root'));
