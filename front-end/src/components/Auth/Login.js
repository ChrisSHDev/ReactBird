import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/authActions';

import { registerUser } from '../../actions/authActions';

const styles = {
    textField: {
        width: '100%',
        marginBottom: 5
    },
    btnBlock : {
        textAlign: 'center',
        marginBottom: 10,
        marginTop: 20
    }
};

class Login extends Component {

    state = {
        email: '',
        password: '',
        errors: {}
    }

    componentWillReceiveProps(nextProps){
        console.log(nextProps.errors);
        if(nextProps.errors){
            this.setState({ errors: nextProps.errors});
        }
        console.log(this.state.errors);
    }
    /*
    constructor (props) {
        super(props)

        this.state = {
            email: '',
            login: '',
            password: '',
            password2: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    */

    handleChange = (e) => {
        this.setState({
            [e.target.name ]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const userData = {
            email: this.state.email,
            password: this.state.password,
        }
       this.props.loginUser(userData);
    }
    /*
    handleChange(e){
        this.setState({ [e.target.name ]: e.target.value})
    }
    handleSubmit(e){
       e.preventDefault()
       const userData = {
           email: this.state.email,
           login: this.state.login,
           password: this.state.password,
           password2: this.state.password2
       }
       console.log(userData);
    }
    */
    render() {
        const { classes } = this.props;
        const { errors } = this.state;
    
        return(
            <Paper style={{padding: 15}}>
              <form onSubmit={this.handleSubmit}>
                    <TextField
                        type="email"
                        label="Email"
                        className={classes.textField}
                        value={this.state.email}
                        onChange={this.handleChange}
                        name="email"
                        helperText={errors.email ? errors.email : ''}
                        error={errors.email ? true : false}
                    />
                    <TextField
                        label="password"
                        type="password"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                        className={classes.textField}
                        helperText={errors.password ? errors.password : ''}
                        error={errors.password ? true : false}
                        />
                    <div className={classes.btnBlock}>
                        <Button variant="outlined" type="submit">
                            Submit
                        </Button>
                    </div>
                </form>
            </Paper>
        )
    };
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors
})

export default connect(mapStateToProps, { loginUser })(withStyles(styles)(Login));
