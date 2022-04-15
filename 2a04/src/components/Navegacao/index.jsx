/* eslint-disable jsx-a11y/anchor-is-valid */
import { useHistory } from "react-router-dom"

import './style.css'

export default function Navegacao({dados}) {
    const history = useHistory()
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    return <nav>
        <ul>
            {
                dados.map(dado=><li key={dado.id}>
                    <button onClick={() => dado.type ==='pf' ? 
                    history.push(`customer/${dado.name}`, {type: dado.type})
                    :
                    history.push(`company/${dado.name}`, {type: dado.type})
                }>
                        {dado.name}
                    </button>
                </li>)
            }
        </ul>
    </nav>
}