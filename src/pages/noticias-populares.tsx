// import React from "react";
// import { Typography, Card, CardContent, CardMedia, Grid } from "@mui/material";
// import noticias from "../../data/noticias.json"; // Importando o JSON de notícias

// const NoticiasPopulares = () => {
//   return (
//     <div style={{ padding: "20px" }}>
//       <Typography variant="h4" gutterBottom>
//         Notícias Populares
//       </Typography>
//       <Grid container spacing={3}>
//         {noticias.map((noticia) => (
//           <Grid item key={noticia.id} xs={12} sm={6} md={4}>
//             <Card>
//               <CardMedia
//                 component="img"
//                 height="140"
//                 image={noticia.imagem}
//                 alt={noticia.titulo}
//               />
//               <CardContent>
//                 <Typography variant="h5" component="div">
//                   {noticia.titulo}
//                 </Typography>
//                 <Typography variant="subtitle1" color="text.secondary">
//                   {noticia.subtitulo}
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary">
//                   {noticia.corpo}
//                 </Typography>
//               </CardContent>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//     </div>
//   );
// };

// export default NoticiasPopulares;
