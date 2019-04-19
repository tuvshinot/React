import React, {Component} from 'react';
import Aux from '../Auxiliary/Auxiliary';
import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class layout extends Component  {
    state = {
        showSideDrawer: false
    };

    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer:false})
    };

    sideDrawerToggleHandler = () => {
        this.setState((prevStat) => {
            return {showSideDrawer:!prevStat.showSideDrawer};
        });
    };

    render() {
        return(
            <Aux>
                <Toolbar DrawerToggleClicked={this.sideDrawerToggleHandler}/>
                <SideDrawer closed={this.sideDrawerClosedHandler} open={this.state.showSideDrawer}/>
                <div>Toolbar, SideDrawer, backdrop</div>
                <main className={classes.Content}>{this.props.children}</main>
            </Aux>
        );
    }
}


export default layout;