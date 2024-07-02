import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material"
import { useEffect, useState } from "react";
import { useNavigate} from "react-router-dom";
import http from "../../../http";
import ITag from "../../../interfaces/ITag";
import IRestaurante from "../../../interfaces/IRestaurante";

const FormularioPrato = () => {
    const navigate = useNavigate();
    const [nomePrato, setNomePrato] = useState("");
    const [descricaoPrato, setDescricaoPrato] = useState("");

    const [tags, setTags] = useState<Array<ITag>>([]);
    const [selectedTag, setSelectedTag] = useState("");

    const [restaurantes, setRestaurantes] = useState<Array<IRestaurante>>([]);
    const [selectedRestaurante, setSelectedRestaurante] = useState("");

    const [imagem, setImagem] = useState<File | null>(null);

    useEffect(() => {
        http.get<{ tags: Array<ITag> }>('tags/')
            .then(resposta => setTags(resposta.data.tags));

        http.get<Array<IRestaurante>>('restaurantes/')
            .then(resposta => setRestaurantes(resposta.data));
    }, [])

    const selecionarArquivo = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.length) {
            setImagem(e.target.files[0]);
        } else {
            setImagem(null)
        }
    }



    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('nome', nomePrato);
        formData.append('descricao', descricaoPrato);
        formData.append('tag', selectedTag);
        formData.append('restaurante', selectedRestaurante);

        if (imagem) {
            formData.append('imagem', imagem);
        }

        http.request({
            url: "pratos/",
            method: "POST",
            headers: {
                "Content-Type": "multipart/form-data"
            },
            data: formData
        })
            .then(() => {navigate(-1)})
            .catch(error => console.log(error));

    }

    return (
        <>



            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Typography component={"h1"} variant="h6">Formulário de Pratos</Typography>
                <Box sx={{ width: "100%" }} component="form" onSubmit={onSubmit}>

                    <TextField
                        id="standard-basic"
                        label="Nome do Prato"
                        variant="standard"
                        value={nomePrato}
                        onChange={(e) => { setNomePrato(e.target.value) }}
                        sx={{ marginTop: 2 }}
                        margin="dense"
                        fullWidth
                        required
                    />
                    <TextField
                        id="standard-basic"
                        label="Descrição do Prato"
                        variant="standard"
                        value={descricaoPrato}
                        onChange={(e) => { setDescricaoPrato(e.target.value) }}
                        sx={{ marginTop: 2 }}
                        fullWidth
                        required
                        margin="dense"
                    />

                    <FormControl fullWidth margin="dense">
                        <InputLabel id="demo-simple-select-label">Tags</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            value={selectedTag}
                            onChange={(e) => setSelectedTag(e.target.value)}
                            required
                        >
                            {tags?.map(item => (
                                <MenuItem value={item.value} key={item.id}>{item.value}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>

                    <FormControl fullWidth margin="dense">
                        <InputLabel id="demo-simple-select-label">Restaurantes</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            value={selectedRestaurante}
                            onChange={(e) => setSelectedRestaurante(e.target.value)}
                            required
                        >
                            {restaurantes?.map(item => (
                                <MenuItem value={item.id} key={item.id}>{item.nome}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>

                    <input type="file" onChange={selecionarArquivo} />

                    <Button sx={{ marginTop: 2 }} variant="contained" type="submit" fullWidth>Salvar</Button>
                </Box >
            </Box>



        </>
    )
}

export default FormularioPrato