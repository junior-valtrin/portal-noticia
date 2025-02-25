import React from "react";
import { useRouter } from "next/router";
import Slider from "react-slick";
import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  Container,
  Box,
} from "@mui/material";
import Link from "next/link";
import noticias from "../../../data/noticias.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NoticiaDetalhes = () => {
  const router = useRouter();
  const { id } = router.query; // ID da notícia (id_news)
  const usuarioId = router.query.usuario; // ID do usuário

  // Encontra a notícia pelo id_news
  const noticia = noticias.find((noticia) => noticia.id_news === id);

  // Filtra as notícias recomendadas para o mesmo usuário (id_lfm)
  const noticiasRecomendadas = noticias.filter(
    (noticia) => noticia.id_lfm === Number(usuarioId) && noticia.id_news !== id
  );

  // Configurações do carrossel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
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

  if (!noticia) {
    return (
      <Container>
        <Typography variant="h4" gutterBottom>
          Notícia não encontrada
        </Typography>
      </Container>
    );
  }

  return (
    <Container style={{ padding: "20px" }}>
      {/* Detalhes da Notícia */}
      <Box mb={4}>
        <Typography variant="h3" gutterBottom>
          {noticia.titulo}
        </Typography>
        <CardMedia
          component="img"
          height="400"
          image={noticia.url} // Supondo que a URL seja uma imagem
          alt={noticia.titulo}
          style={{ borderRadius: "8px" }}
        />
        <Typography variant="body1" mt={2}>
          {/* Se houver um corpo de texto, adicione aqui */}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Typography>
      </Box>

      {/* Carrossel de Notícias Recomendadas */}
      <Typography variant="h4" gutterBottom>
        Mais notícias para você
      </Typography>
      {noticiasRecomendadas.length > 0 ? (
        <Slider {...settings}>
          {noticiasRecomendadas.map((noticia) => (
            <div key={noticia.id_news}>
              <Link
                href={`/noticia/${noticia.id_news}?usuario=${usuarioId}`}
                passHref
              >
                <Card style={{ margin: "10px", cursor: "pointer" }}>
                  <CardMedia
                    component="img"
                    height="140"
                    image={noticia.url}
                    alt={noticia.titulo}
                  />
                  <CardContent>
                    <Typography variant="h6">{noticia.titulo}</Typography>
                  </CardContent>
                </Card>
              </Link>
            </div>
          ))}
        </Slider>
      ) : (
        <Typography variant="body1">
          Nenhuma notícia recomendada encontrada.
        </Typography>
      )}
    </Container>
  );
};

export default NoticiaDetalhes;
