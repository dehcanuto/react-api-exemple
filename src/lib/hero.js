import api from '../services/api';

export async function listHeros() {
  const response = await api.get(`/characters`);
  if (response.code !== 200) throw new Error('Erro ao exibir herois');
  return response.data;
}

export async function getHero(id) {
  const response = await api.get(`/${id}`);
  if (response.status !== 200) throw new Error('Erro ao exibir projetos');
  return response.data.objects;
}
