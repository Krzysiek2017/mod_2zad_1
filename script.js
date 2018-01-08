/*
var element =
    React.createElement('div', {},
        React.createElement('h1', {}, 'Lista filmów'),
        React.createElement('ul', {},
            React.createElement('li', {},
                React.createElement('h2', {}, 'Harry Potter'),
                React.createElement('p', {}, 'Film o czarodzieju')
            ),
            React.createElement('li', {},
                React.createElement('h2', {}, 'Król Lew'),
                React.createElement('p', {}, 'Film opowiadający historię króla sawanny')
            )
        )
    );
*/
var movies = [{
        id: 1,
        title: 'Harry Potter',
        desc: 'Film o czarodzieju',
        src: './images/1.jpg'
    },
    {
        id: 2,
        title: 'Król Lew',
        desc: 'Film o królu sawanny',
        src: './images/2.jpg'
    },
    {
        id: 3,
        title: 'Transformers',
        desc: 'Film o robotach',
        src: './images/3.jpg'
    },
    {
        id: 4,
        title: 'Incepcja',
        desc: 'Film o spaniu',
        src: './images/4.jpg'
    }
];

var moviesElements = movies.map(function(movie) {
    return React.createElement('li', {
            key: movie.id
        },
        React.createElement('h2', {}, movie.title),
        React.createElement('p', {}, movie.desc),
        React.createElement('img', {src: movie.src})
    );
});

var element =
    React.createElement('div', {},
        React.createElement('h1', {}, 'Lista filmów'),
        React.createElement('ul', {}, moviesElements)
    );

ReactDOM.render(element, document.getElementById('app'));