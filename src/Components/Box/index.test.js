import Enzyme,{shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import Box from './index.js';
// const Rectangle=require('./index.js')
Enzyme.configure({ adapter: new Adapter() });
describe('Testing Box Component',()=>{
    it('Check if it contains all Divs',()=>{

        const company = {
            name: "Stride Man",
            height: 14,
            mass:100,
        }
        const wrapper = shallow(<Box it={company}/>);
        expect(wrapper.find('.row1')).toHaveLength(1);

        expect(wrapper.find('.col2')).toHaveLength(1);

        expect(wrapper.find('.row2')).toHaveLength(1);
    });
    
})