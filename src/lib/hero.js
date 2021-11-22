import api from '../services/api';

const timestamp = '1637599932022'; // new Date().getTime();
const AcessToken = '7675892e018b4cd58114f8bcc9f4ee08';
const hashToken = '360c0534c98a99247ad8f2f7cf0239d3';

export async function listHeros() {
  const response = await api.get(`/characters`, {
    params: {
      apikey: AcessToken,
      hash: hashToken,
      ts: timestamp,
    },
  });
  if (response.status !== 200) throw new Error('Erro ao exibir projetos');
  return response.data.objects;
}

export async function getHero(id) {
  const response = await api.get(`/${id}`);
  if (response.status !== 200) throw new Error('Erro ao exibir projetos');
  return response.data.objects;
}
