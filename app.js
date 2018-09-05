const express = require('express');
const path = require('path');

let app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.get('/', (req, res) => {
    let curDate = new Date();
    res.render('index', {
        titles: [{
            title: 'This is my 1st Title',
        },
            {
            title: 'This is my 2nd title',
        }],
        message: 'Sweet message!!',
        partial: ' is fun!',
        date: curDate,
        users: [{
            username: 'Chevi Sutton',
            email: 'unicorn@rainbow.org'
        },
            {
                username: 'Ethan Sutton',
                email: 'nerfherder@nerf.com'
            }],

       list:['apple', 'orange', 'banana'],
    });
});

app.get('/fruits/:fruitName', (req, res) => {
    res.end(`You clicked on ${req.params.fruitName}`);
});


app.listen(3000, () => {
    console.log('Listening on port 3000!');
});