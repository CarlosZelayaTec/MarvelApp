const apikey = 'a607ad46e955867cb0306b83d30a2634';
const hash = 'f60caff63104de71b8edcf38ab49de9e';

export async function getComics(){
    const response = await fetch(`http://gateway.marvel.com/v1/public/comics?ts=1000&apikey=${apikey}&hash=${hash}`);
    const {data} = await response.json();
    const {results} = await data;
    return results;
}