import Enzyme,{shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import Search from './index'
// const Rectangle=require('./index.js')
Enzyme.configure({ adapter: new Adapter() });
describe(' Check If the Class contains all the elements',()=>{
    it('Check if it contains Div2',()=>{
        const wrapper = shallow(<Search/>);
        expect(wrapper.find('.Div2').exists()).toEqual(true);
    });

    it('Check if it contains a Tag Div',()=>{
        const wrapper = shallow(<Search/>);
        expect(wrapper.find('.Tag').exists()).toEqual(true);
    });
    it('Check if it contains a Search Div',()=>{
        const wrapper = shallow(<Search/>);
        expect(wrapper.find('.Search').exists()).toEqual(true);
    });

    it('Check if it contains a search button',()=>{
        const wrapper = shallow(<Search/>);
        expect(wrapper.find('button')).toHaveLength(1);
    });
    it('Check if it contains a search text Box',()=>{
        const wrapper = shallow(<Search/>);
        expect(wrapper.find('input')).toHaveLength(1);
    });
  
    // it('simulates click events', () => {
    //     const onButtonClick = sinon.spy();
    //     const wrapper = shallow(<input onButtonClick={onButtonClick} />);
    //     wrapper.find('button').simulate('click');
    //     expect(onButtonClick).to.have.property('callCount', 1);
    // });

   

    // const spy = expect.spyOn(Search.prototype, "onButtonClick");
    // const wrapper = mount(<Search />);
    // expect(spy).toNotHaveBeenCalled();
    // wrapper.find("Go").simulate("click");
    // expect(spy).toHaveBeenCalled();
    // spy.restore();
})