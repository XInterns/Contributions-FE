import Enzyme,{shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import Picture from './index.js';
// const Rectangle=require('./index.js')
Enzyme.configure({ adapter: new Adapter() });
describe('Testing Picture component',()=>{
    it('Check if it seperate function is returning correct inititals',()=>{
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

        wrapper = shallow(<Picture pic="Sailesh"/>);
        instance=wrapper.instance();
        expect(instance.Seperate()).toEqual("S"); 
    });
  
})