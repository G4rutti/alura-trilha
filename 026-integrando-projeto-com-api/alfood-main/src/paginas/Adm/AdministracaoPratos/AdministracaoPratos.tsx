import { useEffect, useState } from "react"
import {Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow  } from "@mui/material";
// import axios from "axios";
import { Link as RouterLink } from "react-router-dom";
import http from "../../../http";
import IPrato from "../../../interfaces/IPrato";


const AdministracaoPratos = () => {
    const [pratos, setPratos] = useState<Array<IPrato>>([]);

    useEffect(() => {
        http.get<Array<IPrato>>("pratos/")
            .then(response => {
                setPratos(response.data);
            })
            .catch(error => {
                console.log(error);
            })
    }, [pratos])

    const excluir = (item: IPrato) => {
        http.delete(`pratos/${item.id}/`)
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
                        <TableCell>Tag</TableCell>
                        <TableCell>Imagem</TableCell>
                        <TableCell>Editar</TableCell>
                        <TableCell>Excluir</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {pratos.map((item) => (
                        <TableRow key={item.id}>
                            <TableCell>{item.nome}</TableCell>
                            <TableCell>{item.tag}</TableCell>
                            <TableCell>[<a href={item.imagem} target="_blank" rel="noreferrer">Abrir imagem</a>]</TableCell>
                            <TableCell><RouterLink to={`/admin/pratos/${item.id}`}>[Editar]</RouterLink></TableCell>
                            <TableCell><Button variant="outlined" color="error" onClick={() => excluir(item)}>Excluir</Button></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
        </>
    )
}

export default AdministracaoPratos