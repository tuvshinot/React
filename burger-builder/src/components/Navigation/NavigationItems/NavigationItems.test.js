import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NavigationItems from './NavigationItems';
import NavigationItem from './NavigationItem/NavigationItem';

configure({adapter: new Adapter()});

describe('<NavigationItems />', () => {
    let wrapper;
    beforeEach(() => { // runs before every test, renders wrapper
        wrapper = shallow(<NavigationItems />);
    });

    it('should render 2 <NavigationItems /> elements if not authenticated', () => {
        expect(wrapper.find(NavigationItem)).toHaveLength(2);
    });

    it('should render 3 <NavigationItems /> elements if not authenticated', () => {
        // const wrapper = shallow(<NavigationItems ={true}/>);
        wrapper.setProps({isAuthenticated : true})
        expect(wrapper.find(NavigationItem)).toHaveLength(3);
    });

    it('should render 3 <NavigationItems /> elements if not authenticated', () => {
        wrapper.setProps({isAuthenticated : true})
        expect(wrapper.contains(<NavigationItem link='/logout'>Logout</NavigationItem>)).toEqual(true);
    });
});
