import React  from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './index.css';
import bg from './background.jpg'
import Rectangle from './App';
import Search from './Search';
class Woc_header extends React.Component
{
    render()
    {
    return (
        <div className="wall">
            <div className="Rectangle-3">

                <div className="Bitmap">
                    <div className="Wall-of-Contribution" >
                        WALL OF CONTRIBUTION
                    </div>
                    <div className="Coming-together-is-a">
                        Coming together is a beginning. Keeping together is progress. Working together is success.
                    </div>
                </div>
                <div>
                    <Search />
                </div>

                <div className="rect">
                     <Rectangle />
                </div>
            </div>
        </div>
        

    );
    }
}

ReactDOM.render(<Woc_header />,document.getElementById('root'));