import { useEffect, useState } from "react"
import IRestaurante from "../../../interfaces/IRestaurante"
import {Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow  } from "@mui/material";
// import axios from "axios";
import { Link as RouterLink } from "react-router-dom";
import http from "../../../http";


const AdministracaoRestaurantes = () => {
    const [restaurantes, setRestaurantes] = useState<Array<IRestaurante>>([]);

    useEffect(() => {
        http.get<Array<IRestaurante>>("restaurantes/")
            .then(response => {
                setRestaurantes(response.data);
            })
            .catch(error => {
                console.log(error);
            })
    }, [restaurantes])

    const excluir = (item: IRestaurante) => {
        http.delete(`restaurantes/${item.id}/`)
        .then(() => {
            return;
        })
        .catch((error) => {
            console.log(error);
        })
    }


    return (
        <>
        
        <TableContainer component={Paper}>
            <Table >
                <TableHead>
                    <TableRow>
                        <TableCell>Nome</TableCell>
                        <TableCell>Editar</TableCell>
                        <TableCell>Excluir</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {restaurantes.map((item) => (
                        <TableRow key={item.id}>
                            <TableCell>{item.nome}</TableCell>
                            <TableCell><RouterLink to={`/admin/restaurantes/${item.id}`}>[ Editar ]</RouterLink></TableCell>
                            <TableCell><Button variant="outlined" color="error" onClick={() => excluir(item)}>Excluir</Button></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
        </>
    )
}

export default AdministracaoRestaurantes