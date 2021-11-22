import api from '../services/api';

export async function listHeros() {
  const response = await api.get();
  if (response.status !== 200) throw new Error('Erro ao exibir projetos');
  return response.data.objects;
}

export async function getHero(id) {
  const response = await api.get(`/${id}`);
  if (response.status !== 200) throw new Error('Erro ao exibir projetos');
  return response.data.objects;
}
