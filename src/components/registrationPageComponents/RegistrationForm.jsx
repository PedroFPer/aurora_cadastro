export default function RegistrationForm () {
    return <form>
        <div class="mb-3">
            <label for="inputName" class="form-label">Digite seu nome:</label>
            <input type="text" class="form-control" id="inputName" aria-describedby="João Roberto" />
        </div>

        <div class="mb-3">
            <label for="inputEmail" class="form-label">Digite seu email:</label>
            <input type="email" class="form-control" id="inputEmail" aria-describedby="JoaoRoberto@email.com" />
        </div>

        <div class="mb-3">
            <label for="inputVerifyEmail" class="form-label">Digite novamente seu email:</label>
            <input type="email" class="form-control" id="inputVerifyEmail" aria-describedby="JoaoRoberto@email.com" />
        </div>

        <div class="mb-3">
            <label for="inputPassword" class="form-label">Digite a sua senha:</label>
            <input type="password" class="form-control" id="inputPassword" aria-describedby="********" />
        </div>

        <div class="mb-3">
            <label for="inputVerifyPassword" class="form-label">Digite novamente sua senha:</label>
            <input type="password" class="form-control" id="inputVerifyPassword" aria-describedby="********" />
        </div>

        <div class="mb-3">
            <label for="inputCpf" class="form-label">Digite o seu cpf</label>
            <input type="text" class="form-control" id="inputCpf" aria-describedby="444.444.444-44" />
        </div>

        <div class="mb-3">
            <label for="inputPhone" class="form-label">Digite seu telefone:</label>
            <input type="tel" class="form-control" id="inputPhone" aria-describedby="(00) 00000-0000" />
        </div>

        <div class="col-auto">
            <button type="submit" class="btn btn-dark mb-3">Cadastra</button>
        </div>
    </form>
}