import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Slider from "react-slick";
import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  Container,
} from "@mui/material";
import Link from "next/link";
import { fetchNoticiasRecomendadas } from "../../services/api";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NoticiasRecomendadas = () => {
  const router = useRouter();
  const { id } = router.query; // ID do aluno
  interface Noticia {
    id_noticia: number;
    url: string;
    titulo: string;
    subtitulo: string;
  }

  const [noticias, setNoticias] = useState<Noticia[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const carregarNoticias = async () => {
      if (!id) return; // Evita chamadas sem ID
      try {
        const data = await fetchNoticiasRecomendadas(Number(id));
        setNoticias(data as Noticia[]);
      } catch (err) {
        setError("Erro ao carregar notícias recomendadas");
      } finally {
        setLoading(false);
      }
    };

    carregarNoticias();
  }, [id]);

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

  return (
    <Container style={{ padding: "20px" }}>
      <Typography variant="h4" gutterBottom>
        Notícias Recomendadas
      </Typography>
      {noticias.length > 0 ? (
        <Slider {...settings}>
          {noticias.map((noticia) => (
            <div key={noticia.id_noticia}>
              <Link href={`/noticia/${noticia.id_noticia}`} passHref>
                <Card style={{ margin: "10px", cursor: "pointer" }}>
                  {/* <CardMedia
                    component="img"
                    height="140"
                    image={noticia.url}
                    alt={noticia.titulo}
                    // onError={(e) => {
                    // e.currentTarget.src = "/imagem-padrao.jpg"; // Imagem de fallback
                    // }} */}
                  {/* /> */}
                  <CardContent>
                    <Typography variant="h6">{noticia.titulo}</Typography>
                    <Typography variant="subtitle1" color="text.secondary">
                      {noticia.subtitulo}
                    </Typography>
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

export default NoticiasRecomendadas;
