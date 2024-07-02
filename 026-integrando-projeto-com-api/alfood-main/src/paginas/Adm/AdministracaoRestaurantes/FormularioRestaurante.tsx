import { Box, Button, TextField, Typography } from "@mui/material"
import { useEffect, useState } from "react";
import { useNavigate, useParams, } from "react-router-dom";
import http from "../../../http";

const FormularioRestaurante = () => {
    const parametros = useParams();
    const navigate = useNavigate();
    const [nomeRestaurante, setNomeRestaurante] = useState("");

    useEffect(() => {
        if (parametros.id) {
            http.get(`restaurantes/${parametros.id}/`)
                .then(response => {
                    setNomeRestaurante(response.data.nome);
                })
                .catch((error) => {
                    console.log(error);
                });
        };
    }, [parametros])

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (parametros.id) {
            http.put(`restaurantes/${parametros.id}/`, {
                nome: nomeRestaurante
            })
                .then(() => {
                    navigate(-1);
                })
                .catch((error) => {
                    console.log(error);
                });
            console.log(nomeRestaurante);

        } else {
            http.post("restaurantes/", {
                nome: nomeRestaurante
            })
                .then((response) => {
                    console.log(response);
                })
                .catch((error) => {
                    console.log(error);
                });
            console.log(nomeRestaurante);
        }

    }

    return (
        <>



            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Typography component={"h1"} variant="h6">Formulário de Restaurantes</Typography>
                <Box sx={{ width: "100%" }} component="form" onSubmit={onSubmit}>

                    <TextField
                        id="standard-basic"
                        label="Nome do Restaurante"
                        variant="standard"
                        value={nomeRestaurante}
                        onChange={(e) => { setNomeRestaurante(e.target.value) }}
                        sx={{ marginTop: 2 }}
                        fullWidth
                        required
                    />

                    <Button sx={{ marginTop: 2 }} variant="contained" type="submit" fullWidth>Salvar</Button>
                </Box >
            </Box>



        </>
    )
}

export default FormularioRestaurante