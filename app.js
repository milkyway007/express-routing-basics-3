const express = require('express');
const app = express();
const PORT = 4000;

app.get('/movies', (request, response) => {
    const movies = [
        {
            title: "Fake title",
            year: 2011,
        },
        {
            title: "Fake title 2",
            year: 2015,
        },
        {
            title: "Fake title 3",
            year: 2019,
        },
    ];

    response.json(movies);
})

app.listen(PORT, () => {
    console.log('Server is running on PORT: ' + PORT);
});
