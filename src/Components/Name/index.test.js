import Enzyme,{shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import Name from './index'
// const Rectangle=require('./index.js')
Enzyme.configure({ adapter: new Adapter() });
describe(' Checking components ',()=>{
    it('Checking if it contains name div',()=>{
        const wrapper = shallow(<Name />);
        expect(wrapper.find('div.name')).toHaveLength(1);
    });
})
