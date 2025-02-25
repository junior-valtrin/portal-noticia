import React from "react";
import { Grid, Card, CardContent, Typography } from "@mui/material";
import Link from "next/link";
import usuarios from "../../data/usuarios.json"; // Importando o JSON de usuários

const Home = () => {
  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h4" gutterBottom>
        Selecione um Usuário
      </Typography>
      <Grid container spacing={3}>
        {usuarios.map((usuario) => (
          <Grid item key={usuario.id} xs={12} sm={6} md={4}>
            <Link href={`/noticias-recomendadas/${usuario.id}`} passHref>
              <Card style={{ cursor: "pointer", height: "100%" }}>
                <CardContent>
                  <Typography variant="h5" component="div">
                    {usuario.nome}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    ID: {usuario.id}
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
