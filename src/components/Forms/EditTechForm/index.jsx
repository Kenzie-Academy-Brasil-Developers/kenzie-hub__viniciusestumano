import { useContext, useState } from "react";
import { useForm } from "react-hook-form"
import { TechContext } from "../../../providers/TechContext";
import style from "./index.module.scss";

export const EditTechForm = () => {
    const [technology, setTechnology] = useState("Iniciante");
    const { editTech, editTechnology } = useContext(TechContext);
    
    const { register, handleSubmit } = useForm({
        defaultValues: {
            title: editTech.title,
            status: editTech.status
        }
    });

    const submit = (formData) => {
        editTechnology(formData);
    }

    return (
                <div className={style.modal__container}>
                    <form onSubmit={handleSubmit(submit)}>
                        <label htmlFor="language" className="headline">Nome do projeto</label>
                        <input {...register("title")} type="text" placeholder="Material UI" />

                        <label className="headline">Status</label>
                        <select className="select" onChange={(e) => setTechnology(e.target.value)}
                            {...register("status")}>
                            <option value="Iniciante">Iniciante</option>
                            <option value="Intermediário">Intermediário</option>
                            <option value="Avançado">Avançado</option>
                        </select>
                        <button type="submit" className="button__primary">
                            Salvar alterações
                        </button>
                    </form>
                </div>
    )
}