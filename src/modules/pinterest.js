(function(hello) {

hello.init({
	pinterest: {
		name: 'Pinterest',
		oauth: {
			version: 2,
			auth: 'https://api.pinterest.com/oauth/',
			grant: 'https://api.pinterest.com/v1/oauth/token'
		},

		scope: {
			basic: 'read_public'
		},

		base: 'https://api.pinterest.com/v1/',
		get: {
			me: 'me',
			pins: 'me/pins'
		},

		xhr: false
	}
});

})(hello);
