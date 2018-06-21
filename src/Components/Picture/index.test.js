import Enzyme,{shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import Picture from './index.js';
// const Rectangle=require('./index.js')
Enzyme.configure({ adapter: new Adapter() });
describe('Testing Picture component',()=>{
    it('Check if it contains pic',()=>{
        var wrapper = shallow(<Picture pic="Jessica Jones"/>);
        var instance=wrapper.instance();
        expect(instance.Seperate()).toEqual("JJ"); 
        
        wrapper = shallow(<Picture pic="Soumya Gupta"/>);
        instance=wrapper.instance();
        expect(instance.Seperate()).toEqual("SG"); 

        wrapper = shallow(<Picture pic="Ujla Garg"/>);
        instance=wrapper.instance();
        expect(instance.Seperate()).toEqual("UG"); 

        wrapper = shallow(<Picture pic="Udit Guleria"/>);
        instance=wrapper.instance();
        expect(instance.Seperate()).toEqual("UG"); 

        wrapper = shallow(<Picture pic="Pratistha Panwar"/>);
        instance=wrapper.instance();
        expect(instance.Seperate()).toEqual("PP");
        
        wrapper = shallow(<Picture pic="Suraj Prathik Kumar"/>);
        instance=wrapper.instance();
        expect(instance.Seperate()).toEqual("SK"); 
    });
    
    // it('Check if Contain Search ',()=>{
    //     const wrapper = shallow(<Rectangle/>);
    //     expect(wrapper.find('Search')).toHaveLength(1);
    // });
})