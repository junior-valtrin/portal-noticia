import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Slider from "react-slick";
import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  Container,
  Box,
  Button,
  IconButton,
} from "@mui/material";
import Link from "next/link";
import { fetchNoticiasRecomendadas } from "../../services/api";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos"; // Ícone de voltar

const NoticiasRecomendadas = () => {
  const router = useRouter();
  const { id } = router.query; // ID do aluno
  const [noticias, setNoticias] = useState<
    { id_noticia: number; titulo: string; subtitulo: string; url: string }[]
  >([]);
  const [noticiaDestaque, setNoticiaDestaque] = useState<{
    id_noticia: number;
    titulo: string;
    subtitulo: string;
    url: string;
  } | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const carregarNoticias = async () => {
      if (!id) return; // Evita chamadas sem ID
      try {
        const data = (await fetchNoticiasRecomendadas()) as {
          id_noticia: number;
          titulo: string;
          subtitulo: string;
          url: string;
        }[];
        setNoticias(data);
        setNoticiaDestaque(data[0]); // Define a primeira notícia como destaque
      } catch (err) {
        setError("Erro ao carregar notícias recomendadas");
      } finally {
        setLoading(false);
      }
    };

    carregarNoticias();
  }, [id]);

  const handleNoticiaClick = (
    noticia: React.SetStateAction<{
      id_noticia: number;
      titulo: string;
      subtitulo: string;
      url: string;
    } | null>
  ) => {
    setNoticiaDestaque(noticia); // Atualiza a notícia em destaque
  };

  if (loading) {
    return <Typography>Carregando...</Typography>;
  }

  if (error) {
    return <Typography color="error">{error}</Typography>;
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Box
      sx={{
        backgroundColor: "background.default",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <Container>
        {/* Botão Voltar */}
        <IconButton
          onClick={() => router.back()}
          style={{ marginBottom: "20px" }}
        >
          <ArrowBackIosIcon />
        </IconButton>

        {/* Notícia em Destaque */}
        {noticiaDestaque && (
          <Box mb={10}>
            <Typography
              variant="h3"
              gutterBottom
              sx={{ fontWeight: "bold", color: "text.primary" }}
            >
              {noticiaDestaque.titulo}
            </Typography>
            <Typography
              variant="subtitle1"
              gutterBottom
              sx={{ color: "text.secondary" }}
            >
              {noticiaDestaque.subtitulo}
            </Typography>
            <Typography variant="body1" sx={{ color: "text.primary" }}>
              Link da Notícia: {noticiaDestaque.url}
            </Typography>
          </Box>
        )}

        {/* Carrossel de Notícias Recomendadas */}
        <Typography
          variant="h4"
          gutterBottom
          sx={{ fontWeight: "bold", marginTop: "40px", color: "text.primary" }}
        >
          Mais notícias para você
        </Typography>
        {noticias.length > 0 ? (
          <Slider {...settings}>
            {noticias.map((noticia) => (
              <div key={noticia.id_noticia}>
                <Card
                  onClick={() => handleNoticiaClick(noticia)} // Atualiza a notícia em destaque ao clicar
                  style={{ margin: "10px", cursor: "pointer" }}
                  sx={{
                    borderRadius: "8px",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                    transition: "transform 0.2s, box-shadow 0.2s",
                    "&:hover": {
                      transform: "scale(1.05)",
                      boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
                    },
                  }}
                >
                  <CardContent>
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: "bold", color: "text.primary" }}
                    >
                      {noticia.titulo}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color="text.secondary"
                      sx={{ color: "text.secondary" }}
                    >
                      {noticia.subtitulo}
                    </Typography>
                  </CardContent>
                </Card>
              </div>
            ))}
          </Slider>
        ) : (
          <Typography variant="body1" sx={{ color: "text.primary" }}>
            Nenhuma notícia recomendada encontrada.
          </Typography>
        )}
      </Container>
    </Box>
  );
};

export default NoticiasRecomendadas;
