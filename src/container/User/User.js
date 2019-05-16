import React, { Component } from 'react';

import classes from './Users.module.scss';

import fire from '../../config/config';
import NavigationItems from '../../components/UI/Navigation/NavigationItems/NavigationItems';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/GeneralButton/Button';

class User extends Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.updateUser = this.updateUser.bind(this);
		this.state = {
			firstName: '',
			lastName: '',
			country: '',
			city: '',
			streetAddress: '',
			zipCode: '',
			error: ''
		};
	}

	handleChange(e) {
		this.setState({ [e.target.name]: e.target.value });
	}

	updateUser(e) {
		e.preventDefault();
        let userID = fire.auth().currentUser.uid;
		fire
			.database()
			.ref('users/')
			.child(userID)
			.set({
				firstName: this.state.firstName,
				lastName: this.state.lastName,
				country: this.state.country,
				city: this.state.city,
				streetAddress: this.state.streetAddress,
				zipCode: this.state.zipCode
			})
			.then(() => {
				alert('Success');
			})
			.catch((e) => {
				console.log(e);
			});
	}

	render() {

		return (
			<React.Fragment>
				<NavigationItems />
				<form className={classes.User}>
					<h3>User information</h3>
					<div className={classes.Wrapper}>
						<div className={classes.Left}>
							<label className={classes.Label}>First name</label>
							<Input
								value={this.state.firstName}
								onChange={this.handleChange}
								type="text"
								name="firstName"
								placeholder="John"
							/>
							<label className={classes.Label}>Last name</label>
							<Input
								value={this.state.lastName}
								onChange={this.handleChange}
								type="text"
								name="lastName"
								placeholder="Smith"
							/>
							<label className={classes.Label}>Country</label>
							<Input
								value={this.state.country}
								onChange={this.handleChange}
								type="text"
								name="country"
								placeholder="USA"
							/>
						</div>
						<div className={classes.Right}>
							<label className={classes.Label}>City</label>
							<Input
								value={this.state.city}
								onChange={this.handleChange}
								type="text"
								name="city"
								placeholder="Richmond"
							/>
							<label className={classes.Label}>Street Address</label>
							<Input
								value={this.state.streetAddress}
								onChange={this.handleChange}
								type="text"
								name="streetAddress"
								placeholder="Richmond Rd. 2015"
							/>
							<label className={classes.Label}>ZIP/Postal Code</label>
							<Input
								value={this.state.zipCode}
								onChange={this.handleChange}
								type="text"
								name="zipCode"
								placeholder="31852"
							/>
						</div>
					</div>
					<div className={classes.Button}>
						<Button onClick={this.updateUser}>Update User</Button>
					</div>
				</form>
			</React.Fragment>
		);
	}
}

export default User;
