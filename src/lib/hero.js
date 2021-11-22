import md5 from 'js-md5';
import api from '../services/api';

export async function listHeros() {
  const timestamp = Number(new Date());
  const PUBLIC_KEY = '7675892e018b4cd58114f8bcc9f4ee08';
  const PRIVATE_KEY = '3b2f7c4bbc161584dd4eb3ccdb13fabcdc68f415';
  const hash = md5.create();

  hash.update(timestamp + PRIVATE_KEY + PUBLIC_KEY);

  // const response = await fetch(
  //   `https://gateway.marvel.com/v1/public/characters?ts=${timestamp}&orderBy=name&limit=10&apikey=${PUBLIC_KEY}&hash=${hash.hex()}`
  // );
  // const responseJson = await response.json();
  // console.log('response', response);
  // console.log('responseJson', responseJson);

  return hash;

  // const response = await api.get(`/characters`);
  // console.log('response', response);
  // if (response.code !== 200) throw new Error('Erro ao exibir herois');
  // return response.data;
}

// export async function getHero(id) {
//   const response = await api.get(`/${id}`);
//   if (response.status !== 200) throw new Error('Erro ao exibir projetos');
//   return response.data.objects;
// }
