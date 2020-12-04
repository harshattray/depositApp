class Auth {
	constructor() {
		this.authenticated = false;
	}

	login(formData, props) {
		if (
			formData.email === "challenge@weal.io" &&
			formData.password === "Weal2020!"
		) {
			this.authenticated = true;
			props.history.push("/profile");
		} else {
			console.log(formData, "formData");
		}
	}

	logout(cb) {
		this.authenticated = false;
		cb();
	}

	isAuthenticated() {
		return this.authenticated;
	}
}

export default new Auth();
