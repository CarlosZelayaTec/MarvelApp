import {config as dotenv} from 'dotenv';
dotenv();

const apikey = process.env.APIKEY;
const hash = process.env.HASH;

export async function getComics(){
    const response = await fetch(`http://gateway.marvel.com/v1/public/comics?ts=1000&apikey=${apikey}&hash=${hash}`);
    const {data} = await response.json();
    const {results} = await data;
    return results;
}