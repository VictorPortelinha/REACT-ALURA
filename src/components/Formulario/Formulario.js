import "./Formulario.css"
import CampoTexto from "../CampoTexto/CampoTexto";
import ListaSuspensa from "../ListaSuspensa/ListaSuspensa.js";
import Botao from "../Botao/Botao.js";
const Formulario = () => {
    const times = ['Front-end','Back-End','Design']
    return(
       <section className="formulario">
        <form>
        <h2> Preencha os dados para criar o card do colaborador</h2>
        <CampoTexto label="Nome" placeholder="Digite seu nome"/>
        <CampoTexto label="Cargo" placeholder="Digite seu cargo"/>
        <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem"/>
        <ListaSuspensa label="Times" itens={times}/>
        <Botao>Criar Card</Botao>
        </form>
       </section>
    )
}

export default Formulario;