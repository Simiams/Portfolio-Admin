import React, {useState} from "react";
import Card_CPT from "../components/Card_CPT";

const Form_PGE = () => {
    const [fileName, setFileName] = useState({
        pdp: {name: "Photo de profile", url: "https://www.w3schools.com/howto/img_avatar.png"},
        bg: {name: "Background de profile", url: "https://www.w3schools.com/howto/img_avatar.png"}
    });

    const [formData, setFormData] = useState({
        id: "",
        name: "",
        lastName: "",
        pdp: "",
        ddn: "",
        mail: "",
        phone: "",
        city: "",
        job: "",
        currentSchool: "",
        description: "",
        lookingFor: "",
    });
    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value});
    };

    function handlePhotoChange(event) {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = function (e) {
            const imgData = e.target.result;
            //TODO: Utiliser l'image ici...
        };
        reader.readAsDataURL(file);
        if (event.target.name === "pdp") {
            setFileName({pdp: {name: file.name, url: fileName.pdp.url}, bg: {name: fileName.bg.name, url: fileName.bg.url}});
        } else {
            setFileName({bg: file.name, pdp: fileName.pdp}); //TODO: A corriger
        }
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
        // envoyer les données saisies au backend
    };
    return (
        <div className={"form"}>
            <form onSubmit={handleSubmit}>
                <div className={"towByLine"}>
                    <label>
                        <input type="text" name="name" placeholder="Name" onChange={handleChange}/>
                    </label>
                    <label>
                        <input type="text" name="lastName" placeholder="Last Name" onChange={handleChange}/>
                    </label>
                </div>

                <div className={"towByLine"}>
                    <label>
                        <input type="text" name="currentSchool" placeholder="École actuelle" onChange={handleChange}/>
                    </label>
                    <label>
                        <input type="date" name="ddn" placeholder="Date de naissance" onChange={handleChange}/>
                    </label>
                </div>
                <div className={"towByLine"}>
                    <label>
                        <input type="tel" name="phone" placeholder="Téléphone" onChange={handleChange}/>
                    </label>
                    <label>
                        <input type="text" name="city" placeholder="Ville" onChange={handleChange}/>
                    </label>
                </div>
                <div className={"towByLine"}>
                    <label className="custom-file-upload">
                        <input type="file" name="pdp" placeholder="Photo de profil" onChange={handlePhotoChange}/>
                        {fileName.pdp.name}
                    </label>
                    <label className="custom-file-upload">
                        <input type="file" name="bg" placeholder="Fond de profil" onChange={handlePhotoChange}/>
                        {fileName.bg.name}
                    </label>
                </div>

                <div className="card-form">
                    <Card_CPT profil={{name: formData.name, lastName: formData.lastName, pdp: fileName.pdp.url, bg: fileName.bg.url}}/>
                </div>

                <label>
                    <input type="email" name="mail" placeholder="Mail" onChange={handleChange}/>
                </label>
                <label>
                    <input type="text" name="job" placeholder="Profession" onChange={handleChange}/>
                </label>
                <label>
                    <textarea name="description" placeholder="Description" onChange={handleChange}/>
                </label>
                <label>
                    <textarea name="lookingFor" placeholder="Recherche" onChange={handleChange}/>
                </label>
                <button type="submit">Suivant</button>
            </form>
        </div>
    );
}
export default Form_PGE;