import { useState } from "react"
import Header from "../../component/header/header"
import './lista.scss'


export default function Lista() {

    const [tarefas, setTarefas] = useState([])
    const [input, setInput] = useState('')
    const [concluida, setConcluida] = useState(false)
    const [corzinha, setCorzinha] = useState('black')


    function Criar() {
        setTarefas([...tarefas, { name: input, conclue: concluida }])
        setInput('')
    }


    const limpar = (index) => {
        const novas = tarefas.filter((_, i) => i !== index);
        setTarefas(novas);
    }


    const concluir = (index) => {
        const novasTarefas = tarefas.map((tarefa, i) => {
            if (i === index) {
                return { ...tarefa, name: 'concluida', concluida: true };
            } else {
                return tarefa;
            }
        });
        
        setTarefas(novasTarefas);
    }

    return (

   

        <div className="maelista">

            <Header text = 'suas tarefas '/>

            <div className="select">
            <input type="text" value={input} onChange={e => setInput(e.target.value)} placeholder="digite aqui" />

  
            <button onClick={Criar}>adicionar nova tarefa</button>
         
            </div>



            {tarefas.map((item, index) =>
                <div className="map" key={index}>
                    <h2>{item.name}</h2>

                    <div className="botaolist">
                    <button onClick={() => limpar(index)}>eliminar tarefa</button>
                    <button onClick={() => concluir(index)}>concluir</button>
                    </div>
                </div>


            )}


        </div>
    )
}