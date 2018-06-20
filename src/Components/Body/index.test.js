import Enzyme,{shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import Body from './index.js';

Enzyme.configure({ adapter: new Adapter() });
describe('testing test component',()=>{
    it('Check if it contains contri_body',()=>{
        const wrapper = shallow(<Body/>);
        expect(wrapper.find('div.contri_body')).toHaveLength(1);
    });
   
    it('Check if Contain Search ',()=>{
        const wrapper = shallow(<Body/>);
        expect(wrapper.find('Search')).toHaveLength(1);
    });
})