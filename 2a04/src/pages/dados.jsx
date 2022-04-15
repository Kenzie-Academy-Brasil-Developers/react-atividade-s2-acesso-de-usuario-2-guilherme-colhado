/* eslint-disable jsx-a11y/anchor-is-valid */
import { useHistory, useParams } from "react-router-dom"

export default function Dados({menber}){
    const history = useHistory()
    const param = useParams()    
    console.log(history)
    return <section>
        <h1>Detalhes {menber.type==='pj'? 'da Empresa' : 'do Cliente'}</h1>
        <button onClick={()=>history.push('/')}>Voltar</button>
        <p>Nome{history.location.state.type==='pj'? ' da Empresa: ' : ': '}{param.id}</p>
    </section>
} 