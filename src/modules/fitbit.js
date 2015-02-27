(function(hello) {

hello.init({
	fitbit: {
		oauth: {
			version: '1.0',
			auth: 'https://www.fitbit.com/oauth/authorize',
			request: 'https://api.fitbit.com/oauth/request_token',
			token: 'https://api.fitbit.com/oauth/access_token'
		},

		get: {
			me: 'profile.json'
		},

		xhr: false
	}
});

})(hello);
