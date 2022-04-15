import { useState } from "react"

export default function Formulario({menbers, setMenbers}){
    const [name, setName] = useState('')
    const [type, setType] = useState('pj')
    return <form>
        <h3>Formulario para cadastrar na lista</h3>
        <label htmlFor="nome">Nome</label>
        <input type="text" name="nome" id="nome" onChange={e=>setName(e.target.value)}/>
        <label htmlFor="tipo">Tipo</label>
        <select name="tipo" id="tipo" onChange={(e)=>setType(e.target.value)}>
            <option value="pj">Pj</option>
            <option value="pf">Pf</option>
        </select>
        <br />
        <input type="submit" value="Enviar" onClick={e => {
            e.preventDefault()
            setMenbers([...menbers, {id: menbers[menbers.length-1].id+1, name, type}])
        }}/>
    </form>
}