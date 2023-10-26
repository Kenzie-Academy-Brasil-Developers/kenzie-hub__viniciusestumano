import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { TechContext } from "../../../providers/TechContext";

export const CreateTechForm = () =>{
    const [technology, setTechnology] = useState("Iniciante");

    const { register, handleSubmit } = useForm();

    const { createTech } = useContext(TechContext)

    const submit = (formData) => {
        console.log(formData);
        createTech(formData);
    }

    return (
        <div>
            <div>
                <form onSubmit={handleSubmit(submit)}>
                    <label htmlFor="language">Nome</label>
                    <input {...register("title")} type="text" placeholder="Typescript" />

                    <label className="headline">Selecionar status</label>
                    <select className="select" onChange={(e) => setTechnology(e.target.value)}
                        {...register("status")}>
                        <option value="Iniciante">Iniciante</option>
                        <option value="Intermediário">Intermediário</option>
                        <option value="Avançado">Avançado</option>
                    </select>
                    <button type="submit" className="button__primary">
                        Cadastrar Tecnologia
                    </button>
                </form>
            </div>
        </div>
    )
}