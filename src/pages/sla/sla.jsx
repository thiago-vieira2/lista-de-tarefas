import { useState } from "react"

export default function Sla () {

    const [pessoanova, setPessoanova] = useState([])
    const [input, setInput] = useState('')
    const [genero, setGenero] = useState('')
    const [idade, setIdade] = useState([])

    const [compara, setCompara] = useState('')


    function Buscar () {


        let Tudo = {
            name: input,
            idade: idade,
            genero: genero
        }

        setPessoanova([...pessoanova, Tudo])


    

    }


    const Limpar = (index) => {
        let remover = pessoanova.filter ((_, i) => i !== index )
        setPessoanova(remover) 
    }
 

    return (
        <div className="main">
            <div className="escolha">
                <input type="text" value={input} onChange={e => setInput(e.target.value)} />
                <input type="Number" value={idade} onChange={e => setIdade(e.target.value)} />
                <input type="radio"   onChange={e => setGenero('masculino')}/>
                <input type="radio"   onChange={e => setGenero('feminino')}/>

                <button onClick={Buscar}>Buscar</button>
            </div>


            {pessoanova.map((item,index) => 
                <div className="escolhas" key={index}>
                    <h1>nome:{item.name}</h1>
                    <h1>idade:{item.idade}</h1>
                    <h1>genero:{item.genero}</h1>

                    <button onClick={() =>  Limpar(index)}>Limpar</button>
                </div>
            )}
        </div>
    )
}