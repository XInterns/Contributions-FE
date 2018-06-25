import Enzyme,{shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import Date from './index.js';
// const Rectangle=require('./index.js')
Enzyme.configure({ adapter: new Adapter() });
describe('testing test component',()=>{
    it('Check if it contains Date Div',()=>{
        const wrapper = shallow(<Date date="23:05T2390"/>);
        expect(wrapper.find('.date')).toHaveLength(1);
    });
    it('Check return value contain date',()=>{
        const wrapper=shallow(<Date date="2017-05-05T12:23:46"/>);
        const instance=wrapper.instance();
        expect(instance.Seperate()).toHaveLength(10);
    })
    
    
})