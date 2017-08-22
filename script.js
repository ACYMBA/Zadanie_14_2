var element = React.createElement('div', {}, 'Hello world!');
 var movies = [
  {
  	id: 1,
    title: 'Harry Potter',
    desc: 'film o czarodzieju',
    poster: 'test.png'
  },
  {
  	id: 2,
    title: 'Król Lew',
    desc: 'Film o królu sawanny',
    poster: 'link1b.png'
  },
  {
  	id: 3,
    title: 'Władca pierścieni',
    desc: 'Film o pierścieniu',
    poster: 'link2b.png'
  },
  {
  	id: 4,
    title: 'Hobbit',
    desc: 'Film o Hbiciey',
    poster: 'link3b.png'
  },
];

var moviesElements = movies.map(function(movie) {
  return React.createElement('li', {key: movie.id},
      React.createElement('h2', {}, movie.title),
      React.createElement('p', {}, movie.desc),
      React.createElement('img', {src: movie.poster},),
    );
});

var element =
  	React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement('ul', {}, moviesElements)
  );

ReactDOM.render(element, document.getElementById('app'));