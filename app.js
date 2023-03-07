const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '36950d1598msh1a34c6164f89c00p1bfca1jsn2b454127c9b2',
		'X-RapidAPI-Host': 'movie-database-alternative.p.rapidapi.com'
	}
};

fetch('https://movie-database-alternative.p.rapidapi.com/?s=Avengers%20Endgame&r=json&page=1', options)
	.then(response => response.json())
	.then(response =>{
        const movies = response.json()
    })
	.catch(err => console.error(err));