(function(hello) {

hello.init({
	fitbit: {
		name: 'FitBit',
		oauth: {
			version: '1.0',
			auth: 'https://www.fitbit.com/oauth/authorize',
			request: 'https://api.fitbit.com/oauth/request_token',
			token: 'https://api.fitbit.com/oauth/access_token'
		},

		base: 'https://api.fitbit.com/',
		get: {
			me: 'profile.json'
		},

		xhr: false
	}
});

})(hello);
