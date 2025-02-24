import { AppBar, Toolbar, Button } from "@mui/material";
import Link from "next/link";

const Menu = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Button color="inherit">
          <Link href="/">Início</Link>
        </Button>
        <Button color="inherit">
          <Link href="/usuarios">Usuários</Link>
        </Button>
        <Button color="inherit">
          <Link href="/noticias-populares">Notícias Populares</Link>
        </Button>
        <Button color="inherit">
          <Link href="/noticias-recomendadas">Recomendadas</Link>
        </Button>
        <Button color="inherit">
          <Link href="/cadastrar-noticia">Cadastrar Notícia</Link>
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Menu;
