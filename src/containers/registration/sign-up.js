import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
// import { createNewUser } from "../../actions/user";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./sign-up.css";

export default class SignUp extends Component {
	constructor(props) {
		super();
		this.state = {
			userName: '',
			password: '',
			passwordConfirm: ''
		}
	}

	componentDidMount() {
		this.changeFooterPosition();
	}

	changeFooterPosition() {
		document.querySelector("footer").setAttribute("style", "position:absolute; bottom:0;");
	}

	handleSubmit(e) {
		e.preventDefault()

		if (this.state.password !== this.state.passwordConfirm) {
			window.alert('Passwords do not match');
			return;
		} else {
			const newUser = this.state;
			// this.props.dispatch(createNewUser(newUser));
		}
	}

	render() {
		return (
			<section className={"signup-form-wrapper"}>
				<form onSubmit={(e) => this.handleSubmit(e)}>
					<div className="form-group">
						<label htmlFor="username">User Name</label>
						<input type="text" className={"form-control"} placeholder="First name"
							onChange={(e) => this.setState({ userName: e.target.value })}
						/>
					</div>
					<div className="form-group">
						<label htmlFor="password">Password</label>
						<input type="password" className="form-control" id="user-password" placeholder="Password"
							onChange={(e) => this.setState({ password: e.target.value })}
						/>
					</div>
					<div className="form-group">
						<label htmlFor="cofirm-password">Confirm Password</label>
						<input type="password" className="form-control" id="user-confirm-password" placeholder="Confirm Password"
							onChange={(e) => this.setState({ passwordConfirm: e.target.value })}
						/>
					</div>
					<button type="submit" className="btn btn-primary">Sign Up</button>
				</form>
			</section>
		)
	}
}

// const mapDispatchToProps = dispatch => ({
// 	createNewUser: userInfo => dispatch(createNewUser(userInfo))
// });

// export default connect(null, mapDispatchToProps)(SignUp);