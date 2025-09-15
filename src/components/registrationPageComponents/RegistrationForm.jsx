import { useState } from "react";
import { Eye, EyeSlash } from "react-bootstrap-icons";
import handleSubmitForm from "../../infrastructure/handleSubmitForm"
import { formatInput } from "../../infrastructure/formatInput"

export default function RegistrationForm() {
    const [showPassword, setShowPassword] = useState(false);
    const [showVerifyPassword, setShowVerifyPassword] = useState(false);
    const [errors, setErrors] = useState({});
    const [formData, setFormData] = useState({
        name: "",
        lastName: "",
        cpf: "",
        phone: "",
        email: "",
        verifyEmail: "",
        password: "",
        verifyPassword: ""
    });

    return (
        <form id="registrationForm" onSubmit={(e) => handleSubmitForm(formData, setFormData, setErrors, e)}>
            <h2>Crie uma nova conta</h2>

            <div className="inputGroup">
                <div>
                    <label htmlFor="inputName" className="form-label">Digite seu nome:</label>
                    <input
                        type="text"
                        className="form-control input_control"
                        id="inputName"
                        placeholder="João"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                    {errors.name && <div className="error">{errors.name}</div>}
                </div>

                <div>
                    <label htmlFor="inputLastName" className="form-label">Digite seu sobrenome:</label>
                    <input
                        type="text"
                        className="form-control input_control"
                        id="inputLastName"
                        placeholder="Joaninha"
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    />
                    {errors.lastName && <div className="error">{errors.lastName}</div>}
                </div>
            </div>

            <div className="inputGroup">
                <div>
                    <label htmlFor="inputCpf" className="form-label">Digite o seu CPF:</label>
                    <input
                        type="text"
                        className="form-control input_control"
                        id="inputCpf"
                        placeholder="444.444.444-44"
                        value={formData.cpf}
                        onChange={(e) =>setFormData({ ...formData, cpf: formatInput(e.target.value, "cpf") })
                    }
                    />
                    {errors.cpf && <div className="error">{errors.cpf}</div>}
                </div>

                <div>
                    <label htmlFor="inputPhone" className="form-label">Digite seu telefone:</label>
                    <input
                        type="tel"
                        className="form-control input_control"
                        id="inputPhone"
                        placeholder="(00) 00000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: formatInput(e.target.value, "phone") })
                    }
                    />
                    {errors.phone && <div className="error">{errors.phone}</div>}
                </div>
            </div>

            <div className="inputGroup">
                <div>
                    <label htmlFor="inputEmail" className="form-label">Digite seu email:</label>
                    <input
                        type="email"
                        className="form-control input_control"
                        id="inputEmail"
                        placeholder="JoaoJoaninha@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                    {errors.email && <div className="error">{errors.email}</div>}
                </div>

                <div>
                    <label htmlFor="inputVerifyEmail" className="form-label">Digite novamente seu email:</label>
                    <input
                        type="email"
                        className="form-control input_control"
                        id="inputVerifyEmail"
                        placeholder="JoaoJoaninha@email.com"
                        value={formData.verifyEmail}
                        onChange={(e) => setFormData({ ...formData, verifyEmail: e.target.value })}
                    />
                    {errors.verifyEmail && <div className="error">{errors.verifyEmail}</div>}
                </div>
            </div>

            <div className="inputGroup">
                <div>
                    <label htmlFor="inputPassword" className="form-label">Digite a sua senha:</label>
                    <div className="input_password input-group">
                        <input
                            type={showPassword ? "text" : "password"}
                            className="form-control input_control"
                            id="inputPassword"
                            placeholder="********"
                            value={formData.password}
                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        />
                        <span
                            className="input-group-text"
                            style={{ cursor: "pointer" }}
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? <EyeSlash /> : <Eye />}
                        </span>
                    </div>

                    {errors.password && <div className="error">{errors.password}</div>}
                </div>

                <div>
                    <label htmlFor="inputVerifyPassword" className="form-label">Digite novamente sua senha:</label>
                    <div className="input_password input-group">
                        <input
                            type={showVerifyPassword ? "text" : "password"}
                            className="form-control input_control"
                            id="inputVerifyPassword"
                            placeholder="********"
                            value={formData.verifyPassword}
                            onChange={(e) => setFormData({ ...formData, verifyPassword: e.target.value })}
                        />
                        <span
                            className="input-group-text"
                            style={{ cursor: "pointer" }}
                            onClick={() => setShowVerifyPassword(!showVerifyPassword)}
                        >
                            {showVerifyPassword ? <EyeSlash /> : <Eye />}
                        </span>
                    </div>

                    {errors.verifyPassword && <div className="error">{errors.verifyPassword}</div>}
                </div>
            </div>

            <div id="button_form">
                <button type="submit" className="btn btn-dark w-100">Cadastrar</button>
            </div>
        </form>
    );
}
