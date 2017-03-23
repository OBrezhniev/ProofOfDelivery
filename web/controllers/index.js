module.exports = function (app) {
	var attachToContract = app.attachToContract;
	var https = app.https;
	var uuid = app.uuid;

	app.get('/', function(request, response) {
		attachToContract(function(err, contract) {
			if (err) {
				response.render("index", {
					"address": app.contractAddress
				});
			} else {
				response.render("index", {
					"address": app.contractAddress
				});
			}
		});
	});

	app.get('/trackParcel', function(request, response) {
		var body = {
			'tracking': {
				'tracking_number': '1Z3Y0A676842058151'
			}
		};
		app.aftership.call('POST', '/trackings', {
			body: body
		}, function (err, result) {
			if (err) {
				console.log(err);
				response.send({
					error : {
						code : 500,
						title : "Error",
						message : err
					}
				});
			} else {
				console.log(result);
				response.send({
					success : {
						code : 200,
						title : "Success",
						message : result
					}
				});
			}
		});
	});

	app.get('/getStatus', function(request, response) {
		var body = {
			'tracking': {
				'tracking_number': '1Z3Y0A676842058150'
			}
		};
		app.aftership.call('GET', '/trackings', {body: body}, function (err, result) {
			if (err) {
				console.log(err);
				response.send({
					error : {
						code : 500,
						title : "Error",
						message : err
					}
				});
			} else {
				console.log(result);
				response.send({
					success : {
						code : 200,
						title : "Success",
						message : result
					}
				});
			}
		});
	});

};