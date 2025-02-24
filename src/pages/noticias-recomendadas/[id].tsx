import { Typography } from "@mui/material";
import { useRouter } from "next/router";

export default function NoticiasRecomendadas() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Typography variant="h4">
      Notícias Recomendadas para Usuário {id}
    </Typography>
  );
}
