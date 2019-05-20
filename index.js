const url = 'https://api.telegram.org/bot744288029:AAHikTZ2Esa_wejAvdHp0OkMNSwjOxRc6m8/getUpdates';

const https = require('https');

https.get(url, (resp) =>{
	let data = '';
	
	resp.on('data', (chunck) => {
		data += chunck;
	});

	resp.on('end', () => {
		console.log( data );
	});


}).on("error", (err) => {
	console.log( "Error : " + err.message );
});