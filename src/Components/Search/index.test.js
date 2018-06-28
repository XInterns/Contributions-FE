import Enzyme,{shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import Search from './index'
// const Rectangle=require('./index.js')
Enzyme.configure({ adapter: new Adapter() });
describe(' Check If the Class contains all the elements',()=>{
  
    it('Check if it contains a taskbar Div',()=>{
        const wrapper = shallow(<Search/>);
        expect(wrapper.find('.taskbar').exists()).toEqual(true);
    });
    it('Check if it contains a tag Div',()=>{
        const wrapper = shallow(<Search/>);
        expect(wrapper.find('.tag').exists()).toEqual(true);
    });

    it('Check if it contains a button element',()=>{
        const wrapper = shallow(<Search/>);
        expect(wrapper.find('button')).toHaveLength(1);
    });
  
})