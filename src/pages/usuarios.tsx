import React from "react";

// Dados mockados (temporários)
const usuarios = [
  { id: 1, nome: "Alice", email: "alice@email.com" },
  { id: 2, nome: "Bob", email: "bob@email.com" },
  { id: 3, nome: "Carlos", email: "carlos@email.com" },
];

const Usuarios = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Lista de Usuários</h1>
      <ul>
        {usuarios.map((usuario) => (
          <li key={usuario.id}>
            <strong>{usuario.nome}</strong> - {usuario.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Usuarios;
