import React from "react";
import { useRouter } from "next/router";
import Slider from "react-slick";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import Link from "next/link";
import noticias from "../../../data/noticias.json"; // Importando o JSON de notícias
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NoticiasRecomendadas = () => {
  const router = useRouter();
  const { id } = router.query; // ID do usuário selecionado

  // Filtra as notícias recomendadas para o usuário
  const noticiasRecomendadas = noticias.filter(
    (noticia) => noticia.id_lfm === Number(id)
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
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h4" gutterBottom>
        Notícias Recomendadas
      </Typography>
      {noticiasRecomendadas.length > 0 ? (
        <Slider {...settings}>
          {noticiasRecomendadas.map((noticia) => (
            <div key={noticia.id_news}>
              <Link href={`/noticia/${noticia.id_news}?usuario=${id}`} passHref>
                <Card style={{ margin: "10px", cursor: "pointer" }}>
                  <CardMedia
                    component="img"
                    height="140"
                    image={noticia.url} // Usando a URL como imagem (pode ser ajustado)
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
    </div>
  );
};

export default NoticiasRecomendadas;
