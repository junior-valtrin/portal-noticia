import React, { useState } from "react";
import { TextField, Button, Container, Typography } from "@mui/material";

const CadastrarNoticia = () => {
  const [titulo, setTitulo] = useState("");
  const [subtitulo, setSubtitulo] = useState("");
  const [corpo, setCorpo] = useState("");
  const [imagem, setImagem] = useState<File | null>(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log({
      titulo,
      subtitulo,
      corpo,
      imagem: imagem ? imagem.name : "Nenhuma imagem selecionada",
    });
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Cadastrar Notícia
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Título"
          variant="outlined"
          fullWidth
          margin="normal"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        />
        <TextField
          label="Subtítulo"
          variant="outlined"
          fullWidth
          margin="normal"
          value={subtitulo}
          onChange={(e) => setSubtitulo(e.target.value)}
        />
        <TextField
          label="Corpo da Notícia"
          variant="outlined"
          fullWidth
          margin="normal"
          multiline
          rows={4}
          value={corpo}
          onChange={(e) => setCorpo(e.target.value)}
        />

        <Button type="submit" variant="contained" color="primary" fullWidth>
          Cadastrar Notícia
        </Button>
      </form>
    </Container>
  );
};

export default CadastrarNoticia;
