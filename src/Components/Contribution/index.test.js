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
    it('Check if it the Regex works properly',()=>{
        const wrapper = shallow(<Contribution/>);
        const instance=wrapper.instance();
        var check_iflink=new RegExp("(https|http)://[A-Za-z./0-9?#=:%\"_&'@$^*;()-]+",'gm');
     
        expect(instance.checkLink(check_iflink," hello world https://www.google.com this is ")).toEqual(true);
        expect(instance.checkLink(check_iflink," hello ")).toEqual(false);
        expect(instance.checkLink(check_iflink," hello www.google.com ")).toEqual(false);
        expect(instance.checkLink(check_iflink," hello http://onhax ")).toEqual(true);
        expect(instance.checkLink(check_iflink," hello www.stu.upes.ac.in ")).toEqual(false);
        expect(instance.checkLink(check_iflink," hello http://stu.upes.ac.in ")).toEqual(true);
        
        });
})