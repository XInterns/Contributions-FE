import Enzyme,{shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import Page from './index'
import {mount} from 'enzyme';
// const Rectangle=require('./index.js')
Enzyme.configure({ adapter: new Adapter() });
describe(' Checking Pages components ',()=>{
    it('Checking if it contains pagination div',()=>{
        const wrapper = shallow(<Page />);
        expect(wrapper.find('div.pagination')).toHaveLength(1);
    });

    it('Return limit should always be 5 or less than 5', () => {
        const wrapper = shallow(<Page/>);
        const int=wrapper.instance();
        
        expect(int.returnLimit(15)).toBeLessThan(6);
        
        expect(int.returnLimit(3)).toBeLessThan(6);
        
        expect(int.returnLimit(5)).toBeLessThan(6);
        
        expect(int.returnLimit(100)).toBeLessThan(6);
        
      });
});
