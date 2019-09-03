import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { Icon } from '@material-ui/core';

const styles = {
    root: {
        flexGrow: 1
    },
    logo: {
        color: '#fff',
        fontSize: 30
    }
}

class Header extends Component {
    state = {
        anchorEl : null
    }

    handleMenu = (event) => { this.ListeningStateChangedEvent({ anchorEl: event.target.currentTarget})};

    handleColor = () => { this.setState({ anchorEl: null })}
    
    render() {
        const { classes } = this.props;
        const { anchorEl } = this.state;
        const open = Boolean(anchorEl);

        const authLinks = (
            <div>
                <IconButton
                    aria-owns={ open ? 'menu' : undefined }
                    aria-haspopup= "true"
                    color = "inherit"
                    onClick = {this.handleMenu}
                >
                    <AccountCircleIcon/>
                </IconButton>
                <Menu
                    open= {open}
                    anchorEl= { anchorEl }
                >
                    <MenuItem onClick={ this.handleclose}>Profile</MenuItem>
                    <MenuItem onClick={ this.handleclose}>Logout</MenuItem>
                </Menu>
            </div>
        )
        return (
            <div className={classes.root}>
                <AppBar position="static" style={{ backgroundColor: '#4b0082' }}>
                    <Toolbar>
                        <Link to="/" className={classes.logo}>ReactBird</Link>
                        { authLinks }
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps)(withStyles(styles)(Header));