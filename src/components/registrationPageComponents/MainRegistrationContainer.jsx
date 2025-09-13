import RegistrationForm  from "./RegistrationForm"
import ImageForm from "./ImageForm"
import RegistrationList from "./RegistrationList"

export default function MainRegistrationContainer() {
    return <div className="container_main">
        <div className="container_form">
            <ImageForm />
            <RegistrationForm  />
        </div>
        <div className="container_list_registration">
            <RegistrationList />
        </div>
    </div>
}