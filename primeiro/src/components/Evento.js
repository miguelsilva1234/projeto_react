function Evento({numero}){

    function meuEvento(){
        console.log(`Opa, fui ativado! ==> ${numero}`)
    }

    return(
        <div>
            <p>Clique abaixo no botão</p>
            <button onClick={meuEvento}>Ativar!</button>
        </div>
    )
}

export default Evento