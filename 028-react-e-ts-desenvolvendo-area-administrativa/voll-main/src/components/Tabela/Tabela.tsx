import { Paper, Table, TableBody, TableCell, tableCellClasses, TableContainer, TableHead, TableRow } from "@mui/material"
import { useDadosConsulta } from "../../hooks/useDadosConsultas"
import styled from "@emotion/styled";

const CelulaEstilizada = styled(TableCell)(() => ({
    [`&.${tableCellClasses.head}`]:{
        color: "var(--azul-escuro)",
        fontSize: 18,
        fontWeight: 700,
        fontFamily: "var(--fante-principal)"
    },
    [`&.${tableCellClasses.body}`]:{
        color: "var(--azul-escuro)",
        fontSize: 16,
        fontWeight: 100,
        fontFamily: "var(--fante-principal)"
    }
})) 

const LinhaEstilizada = styled(TableRow)(() => ({
    [`&:nth-of-type(odd)`]:{
        backgroundColor: "var(--cinza-claro)",
        align: "Rigth"
    },
})) 


const Tabela = () => {
    const useConsulta = useDadosConsulta();
    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="tabela-customizada">
                    <TableHead>
                        <TableRow>
                            <CelulaEstilizada>Data</CelulaEstilizada>
                            <CelulaEstilizada>Horario</CelulaEstilizada>
                            <CelulaEstilizada>Profissional</CelulaEstilizada>
                            <CelulaEstilizada>Especialidade</CelulaEstilizada>
                            <CelulaEstilizada>Paciente</CelulaEstilizada>
                            <CelulaEstilizada>Modalidade</CelulaEstilizada>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {useConsulta && useConsulta.map(item => (
                            <LinhaEstilizada key={item.id}>
                                <CelulaEstilizada>{new Date(item.data).toLocaleDateString()}</CelulaEstilizada>
                                <CelulaEstilizada>{item.horario}</CelulaEstilizada>
                                <CelulaEstilizada>{item.profissional[0].nome}</CelulaEstilizada>
                                <CelulaEstilizada>{item.profissional[0].especialidade}</CelulaEstilizada>
                                <CelulaEstilizada>{item.paciente}</CelulaEstilizada>
                                <CelulaEstilizada>{item.modalidade}</CelulaEstilizada>
                            </LinhaEstilizada>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default Tabela