const express = require('express')
const request = require('request')
const axios = require('axios')
const app = express()

app.use('/static',express.static('public'));

app.get('/', function (req, res) {
  res.send('Hello World!')
});

app.post('/sendlink', function(req,res){
	console.log("LOOK");
	
	axios({
		method: 'post',
		url: 'https://westus.api.cognitive.microsoft.com/emotion/v1.0/recognize?',
		headers:{
			'Content-Type' : 'application/json',
			'Ocp-Apim-Subscription-Key' : '7148e51451224d669d207afd909c9b75'
			
		},
		data: '{"url": "https://shop.nationalgeographic.com/html/catalog/photogalleries/reza/images/reza8.jpg"}'
	}).then(function (response) {
      console.log(response.data);
    }).catch(function (error) {
      console.log(error);
    });

	/*
	request.post({
		'headers':{
			'Content-Type' : 'application/json',
			'Ocp-Apim-Subscription-Key' : '7148e51451224d669d207afd909c9b75'
			
		},
		url: 'https://westus.api.cognitive.microsoft.com/emotion/v1.0/recognize?',
		'data':{
			'url' : 'https://shop.nationalgeographic.com/html/catalog/photogalleries/reza/images/reza8.jpg',
		},		
		function(error,response,body){
			console.log(response.body);
			
		}
	})
	*/
		
	
});

app.listen(8080, function () {
  console.log('Example app listening on port 3000!')
})

