const Artistas = [
    {
        Artista: 'Queen',
        Genero: 'Rock',
        oyentes: 40320307,
    },
    {
        Artista: 'Linkin Park',
        Genero: 'Rock',
        oyentes: 23609188,
    },
    {
        Artista: 'Bad Bunny',
        Genero: 'Reggaeton',
        oyentes: 62735120,
    },
    {
        Artista: 'Natanael Cano',
        Genero: 'corridos Tumbados',
        oyentes: 8685833,
    },
    {
        Artista: 'Natanael Cano',
        Genero: 'Corridos Tumbados',
        oyentes: 8685833,
    },
    {
        Artista: 'Headhunterz',
        Genero: 'Hardstyle',
        oyentes: 1750264 ,
    },
];

const masEscuchados = Artistas.filter(item => item.Artista && item.oyentes >= 10000000)
console.log('Más escuchados del momento: ', masEscuchados);

//hacemos un buscados dentro de los objetos y arrays
const search = (query) => {
    return Artistas.filter(item => {
        return item.Genero.includes(query);
    })
}
console.log('Mi favorito es: ', search('tyle'));