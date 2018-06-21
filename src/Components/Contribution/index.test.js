import Enzyme,{shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import Contribution from './index.js';
// const Rectangle=require('./index.js')
Enzyme.configure({ adapter: new Adapter() });
describe('testing Contribution component',()=>{
    it('Check if it contains contribution div',()=>{
        const wrapper = shallow(<Contribution/>);
        expect(wrapper.find('.contribution')).toHaveLength(1);
    });
})