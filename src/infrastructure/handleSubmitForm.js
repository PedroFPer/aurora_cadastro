import validateForm from "./validateForm";

export default function handleSubmitForm(formData, setFormData,setErrors,e) {
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
}
