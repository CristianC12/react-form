import React from 'react';
import Button from "@material-ui/core/Button"

function FormularioCadastro(){
    return(
        <form>
            <label className="FormularioCadastro_label">nome</label>
            <input type="text"/>

            <label className="FormularioCadastro_label">Sobrenome</label>
            <input type="text"/>

            <label className="FormularioCadastro_label">CPF</label>
            <input type="text"/>

            <label className="FormularioCadastro_label">Promoções</label>
            <input type="checkbox"/>

            <label className="FormularioCadastro_label">Novidades</label>
            <input type="checkbox"/>

            <Button type="submit" variant="contained" color="primary">
                Cadastrar
            </Button>
        </form>
    );
}

export default FormularioCadastro;