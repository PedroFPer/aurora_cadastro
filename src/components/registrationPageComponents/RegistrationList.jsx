import { useState, useEffect } from "react";

export default function RegistrationList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(storedUsers);
  }, []);

  const deleteUser = (index) => {
    const updatedUsers = [...users];
    updatedUsers.splice(index, 1);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    setUsers(updatedUsers);
  };

  return (
    <div>
      <div id="header_list">
        <i className="bi bi-person-circle" id="icon_user"></i>
        <h2>Lista de usuários</h2>
      </div>

      <ul id="list_user">
        {users.length === 0 && <p id="alertListEmpty">Nenhum usuário cadastrado.</p>}

        {users.map((user, index) => (
          <li className="card_user" key={index}>
            <h4>{user.name} {user.lastName}</h4>
            <div className="container_card">
              <div className="container_info">
                <div className="info_group">
                  <p>CPF: {user.cpf}</p>
                  <p>Email: {user.email}</p>
                </div>
                <div className="info_group">
                  <p>Telefone: {user.phone}</p>
                  <p>Senha: {user.password}</p>
                </div>
              </div>
              <div className="container_button_delete">
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => deleteUser(index)}
                >
                  Deletar
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
