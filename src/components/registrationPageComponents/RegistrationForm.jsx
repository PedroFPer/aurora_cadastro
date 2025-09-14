export default function RegistrationForm () {
    return <form id="registrationForm">
        <h2>Crie uma nova conta</h2>

        <div className="inputGroup">
            <div>
                <label for="inputName" class="form-label">Digite seu nome:</label>
                <input type="text" class="form-control input_control" id="inputName" placeholder="João" />
            </div>
            <div>
                <label for="inputLastName" class="form-label">Digite seu sobrenome:</label>
                <input type="text" class="form-control input_control" id="inputLastName" placeholder="Joaninha" />
            </div>
        </div>

        
        <div className="inputGroup">
            <div>
                <label for="inputCpf" class="form-label">Digite o seu cpf</label>
                <input type="text" class="form-control input_control" id="inputCpf" placeholder="444.444.444-44" />
            </div>
            <div>
                <label for="inputPhone" class="form-label">Digite seu telefone:</label>
                <input type="tel" class="form-control input_control" id="inputPhone" placeholder="(00) 00000-0000" />
            </div>
        </div>

        <div className="inputGroup">
            <div>
                <label for="inputEmail" class="form-label">Digite seu email:</label>
                <input type="email" class="form-control input_control" id="inputEmail" placeholder="JoaoJoaninha@email.com" />
            </div>
            <div>
                <label for="inputVerifyEmail" class="form-label">Digite novamente seu email:</label>
                <input type="email" class="form-control input_control" id="inputVerifyEmail" placeholder="JoaoJoaninha@email.com" />
            </div>
        </div>

        <div className="inputGroup">
            <div>
                <label for="inputPassword" class="form-label">Digite a sua senha:</label>
                <input type="password" class="form-control input_control" id="inputPassword" placeholder="********" />
            </div>
            <div>
                <label for="inputVerifyPassword" class="form-label">Digite novamente sua senha:</label>
                <input type="password" class="form-control input_control" id="inputVerifyPassword" placeholder="********" />
            </div>
        </div>

        <div id="button_form">
            <button type="submit" class="btn btn-dark w-100 ">Cadastra</button>
        </div>
    </form>
}