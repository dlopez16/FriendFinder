app.use('/', function (req, res) {
	// res.send('Welcome to the Star Wars Page!')
	res.sendFile(path.join(__dirname, 'home.html'));
});


app.get('/survey', function (req, res) {
	// res.send('Welcome to the Star Wars Page!')
	res.sendFile(path.join(__dirname, 'survey.html'));
});

// Search for Specific Character (or all characters) - provides JSON
app.get('/api/:friends?', function (req, res) {
	var chosen = req.params.characters;

	if (chosen) {
		console.log(chosen);

		for (var i = 0; i < characters.length; i++) {
			if (chosen === characters[i].routeName) {
				res.json(characters[i]);
				return;
			}
		}

		res.json(false);
	} else {
		res.json(characters);
	}
});