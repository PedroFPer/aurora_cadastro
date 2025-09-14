import { useState } from "react";
import validateForm from "../../infrastructure/handleSubmit";

export default function RegistrationForm() {
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

  const [errors, setErrors] = useState({});

  const handleSubmitForm = (e) => {
    e.preventDefault();

    const validationErrors = validateForm(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
      existingUsers.push(formData);
      localStorage.setItem("users", JSON.stringify(existingUsers));

      alert("Formulário enviado com sucesso ✅");
      console.log("Dados enviados:", formData);

      setFormData({
        name: "",
        lastName: "",
        cpf: "",
        phone: "",
        email: "",
        verifyEmail: "",
        password: "",
        verifyPassword: ""
      });

      setErrors({});

      window.location.reload();
    }
  };

  return (
    <form id="registrationForm" onSubmit={handleSubmitForm}>
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
            onChange={(e) => setFormData({ ...formData, cpf: e.target.value })}
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
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
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
          <input
            type="password"
            className="form-control input_control"
            id="inputPassword"
            placeholder="********"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          />
          {errors.password && <div className="error">{errors.password}</div>}
        </div>

        <div>
          <label htmlFor="inputVerifyPassword" className="form-label">Digite novamente sua senha:</label>
          <input
            type="password"
            className="form-control input_control"
            id="inputVerifyPassword"
            placeholder="********"
            value={formData.verifyPassword}
            onChange={(e) => setFormData({ ...formData, verifyPassword: e.target.value })}
          />
          {errors.verifyPassword && <div className="error">{errors.verifyPassword}</div>}
        </div>
      </div>

      <div id="button_form">
        <button type="submit" className="btn btn-dark w-100">Cadastrar</button>
      </div>
    </form>
  );
}
