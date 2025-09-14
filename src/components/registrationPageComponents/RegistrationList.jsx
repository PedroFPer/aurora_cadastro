export default function RegistrationList() {
    return <div>
        <div id="header_list">
            <i className="bi bi-person-circle" id="icon_user"></i>
            <h2>Lista de usuarios</h2>
        </div>
        <ul id="list_user">
            <li className="card_user">
                <h4>João Joaninha</h4>
                <div className="container_card">
                    <div className="container_info">
                        <div className="info_group">
                            <p>CPF: 444.444.444-44</p>
                            <p>Email: Joao@email.com</p>
                        </div>
                        <div className="info_group">
                            <div className="info_group">
                                <p>Telefone: 55 983689875</p>
                                <p>Senha: 457896</p>
                            </div>
                        </div>
                    </div>
                    <div className="container_button_delete">
                        <button type="button" class="btn btn-danger">Deletar</button>
                    </div>
                </div>

            </li>
        </ul>
    </div>
}