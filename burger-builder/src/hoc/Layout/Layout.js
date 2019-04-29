import React, {Component} from 'react';
import Aux from '../Auxiliary/Auxiliary';
import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import { connect } from 'react-redux';

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
                <Toolbar 
                isAuth={this.props.isAuthenticated}
                DrawerToggleClicked={this.sideDrawerToggleHandler}/>
                <SideDrawer 
                isAuth={this.props.isAuthenticated}
                closed={this.sideDrawerClosedHandler} open={this.state.showSideDrawer}/>
                <main className={classes.Content}>{this.props.children}</main>
            </Aux>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isAuthenticated : state.auth.token != null
    }
}


export default connect(mapStateToProps)(layout);