import Enzyme,{shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import Page from './index'
// const Rectangle=require('./index.js')
Enzyme.configure({ adapter: new Adapter() });
describe(' Checking Pages components ',()=>{
    it('Checking if it contains pagination div',()=>{
        const wrapper = shallow(<Page />);
        expect(wrapper.find('div.pagination')).toHaveLength(1);
    });
});
