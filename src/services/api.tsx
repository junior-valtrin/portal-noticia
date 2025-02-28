// services/api.ts

// Dados mockados de alunos
const usuariosMock = [
  { id: 1, nome: "Alice" },
  { id: 2, nome: "Bob" },
  { id: 3, nome: "Carlos" },
];

// Dados mockados de notícias
const noticiasMock = [
  {
    id_noticia: "23kj2l3123klj9djladdsds234g",
    titulo: "Notícia 1",
    subtitulo: "Subtítulo da Notícia 1",
    url: "www.noticia.com.br/noticia1",
  },
  {
    id_noticia: "98asd7f98a7sdf89a7sdf89a7sd",
    titulo: "Notícia 2",
    subtitulo: "Subtítulo da Notícia 2",
    url: "www.noticia.com.br/noticia2",
  },
  {
    id_noticia: "12kj3h1k2j3h1k2j3h1k2j3h1k2j",
    titulo: "Notícia 3",
    subtitulo: "Subtítulo da Notícia 3",
    url: "www.noticia.com.br/noticia3",
  },
];

// Método para buscar alunos
export const fetchUsuarios = async () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(usuariosMock), 1000); // Simula uma chamada assíncrona
  });
};

// Método para buscar notícias recomendadas para um aluno
export const fetchNoticiasRecomendadas = async () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(noticiasMock), 1000); // Simula uma chamada assíncrona
  });
};

// Método para buscar detalhes de uma notícia
export const fetchNoticiaDetalhes = async (noticiaId: string) => {
  return new Promise((resolve) => {
    const noticia = noticiasMock.find((n) => n.id_noticia === noticiaId);
    setTimeout(() => resolve(noticia), 1000); // Simula uma chamada assíncrona
  });
};
// services/api.ts
