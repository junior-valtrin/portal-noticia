import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Typography, Container, Box, Button } from "@mui/material";
import { fetchNoticiaDetalhes } from "../../services/api";

const NoticiaDetalhes = () => {
  const router = useRouter();
  const { id } = router.query; // ID da notícia
  interface Noticia {
    titulo: string;
    subtitulo: string;
    url: string;
  }

  const [noticia, setNoticia] = useState<Noticia | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const carregarDetalhes = async () => {
      if (!id) return; // Evita chamadas sem ID
      try {
        const data = (await fetchNoticiaDetalhes(
          Array.isArray(id) ? id[0] : id
        )) as Noticia;
        setNoticia(data);
      } catch (err) {
        setError("Erro ao carregar detalhes da notícia");
      } finally {
        setLoading(false);
      }
    };

    carregarDetalhes();
  }, [id]);

  if (loading) {
    return <Typography>Carregando...</Typography>;
  }

  if (error) {
    return <Typography color="error">{error}</Typography>;
  }

  if (!noticia) {
    return <Typography variant="h4">Notícia não encontrada</Typography>;
  }

  return (
    <Container style={{ padding: "20px" }}>
      <Button
        onClick={() => router.back()}
        variant="outlined"
        style={{ marginBottom: "20px" }}
      >
        Voltar
      </Button>

      <Box mb={4}>
        <Typography variant="h3" gutterBottom>
          {noticia.titulo}
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          {noticia.subtitulo}
        </Typography>
        <Typography variant="body1">Link da Notícia: {noticia.url}</Typography>
      </Box>
    </Container>
  );
};

export default NoticiaDetalhes;
