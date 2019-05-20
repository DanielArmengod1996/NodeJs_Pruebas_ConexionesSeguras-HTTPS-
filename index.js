const url = 'https://api.telegram.org/bot<ID_BOT>:<TOKEN>/getUpdates';

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
