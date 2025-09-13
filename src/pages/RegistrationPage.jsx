import Header from "../components/generalComponents/Header"
import MainRegistrationContainer from "../components/registrationPageComponents/MainRegistrationContainer"
import Footer from "../components/generalComponents/Footer"

export default function RegistrationPage(){
    return <div className="registration_page_container" >
        <Header />
        <MainRegistrationContainer /> 
        <Footer />
    </div>
}