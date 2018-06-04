import React, { Component } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

export default class SignUp extends Component {
	constructor(props) {
		super();
		this.state = {
			email: '',
			password: '',
			passwordConfirm: ''
		}
	}
	onEmailChange(e) {
		this.setState({
			email: e.target.value
		});
	}

	onPasswordChange(e) {
		this.setState({
			password: e.target.value
		});
	}
	render() {
		return (

		)
	}
}