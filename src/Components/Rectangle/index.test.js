import Enzyme,{shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import Rectangle from './index.js';
// const Rectangle=require('./index.js')
Enzyme.configure({ adapter: new Adapter() });
describe('testing test component',()=>{
    it('Check if it contains Div3',()=>{
        const wrapper = shallow(<Rectangle/>);
        expect(wrapper.find('div.Div3')).toHaveLength(1);
    });
    
    it('Check if Contain Search ',()=>{
        const wrapper = shallow(<Rectangle/>);
        expect(wrapper.find('Search')).toHaveLength(1);
    });
})