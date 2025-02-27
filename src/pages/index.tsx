import React, { useEffect, useState } from "react";
import { Grid, Card, CardContent, Typography } from "@mui/material";
import Link from "next/link";
import { fetchAlunos } from "../services/api";

interface Aluno {
  id: number;
  nome: string;
}

const Home = () => {
  const [alunos, setAlunos] = useState<Aluno[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const carregarAlunos = async () => {
      try {
        const data = (await fetchAlunos()) as Aluno[];
        setAlunos(data);
      } catch (err) {
        setError("Erro ao carregar alunos");
      } finally {
        setLoading(false);
      }
    };

    carregarAlunos();
  }, []);

  if (loading) {
    return <Typography>Carregando...</Typography>;
  }

  if (error) {
    return <Typography color="error">{error}</Typography>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h4" gutterBottom>
        Selecione um Aluno
      </Typography>
      <Grid container spacing={3}>
        {alunos.map((aluno) => (
          <Grid item key={aluno.id} xs={12} sm={6} md={4}>
            <Link href={`/noticias/${aluno.id}`} passHref>
              <Card style={{ cursor: "pointer", height: "100%" }}>
                <CardContent>
                  <Typography variant="h5" component="div">
                    {aluno.nome}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    ID: {aluno.id}
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Home;
