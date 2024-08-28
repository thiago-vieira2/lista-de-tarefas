import { useState } from "react"
import Header from "../../component/header/header"
import './lista.scss'


export default function Lista() {

    const [tarefas, setTarefas] = useState([])
    const [input, setInput] = useState('')
    const [concluida, setConcluida] = useState(false)



    function Criar() {
        setTarefas([...tarefas, { name: input, conclue: concluida, cor: 'black' }])
        setInput('')
    }


    const limpar = (index) => {
        const novas = tarefas.filter((_, i) => i !== index);
        setTarefas(novas);
    }

    const Apagar = () => {
     
        setTarefas([]);
        setInput('');
    }


    const concluir = (index) => {
        const novasTarefas = tarefas.map((tarefa, i) => {
            if (i === index) {
                return { ...tarefa, concluida: true, cor: 'gray' };
            } else {
                return tarefa;
            }
        });
        
        setTarefas(novasTarefas);
    }


    const Editar = (index) => {
        const ar = tarefas.map ((tarefas, i) => {
            if (i === index) {
                return {...tarefas, name: input, concluida: true, cor: 'black'}
            }
            else {
                return tarefas
            }
        })

        setTarefas(ar)
        setInput('')
    }
    
    return (

   

        <div className="maelista">

            <Header text = 'tarefas'/>

            <div className="select">
            <input type="text" value={input} onChange={e => setInput(e.target.value)} placeholder="digite aqui" />

  
            <button onClick={Criar}>adicionar nova tarefa</button>
            <button className="elim" onClick={Apagar}>eliminar tudo</button>
         
            </div>



            {tarefas.map((item, index) =>
                <div className="map" key={index}>
                    <h2 style={{color: item.cor}}>{item.name}</h2>

                    <div className="botaolist">
                    <button className="limpars" onClick={() => limpar(index)}>eliminar tarefa</button>
                    <button className="concluida" onClick={() => concluir(index)}>concluir</button>
                    <button className="edit" onClick={() => Editar(index)}>editar</button>
                    </div>
                </div>


            )}


        </div>
    )
}