function Desc(props){
    return(
        <>
        
        <h1 class="text-capitalize text-center">{props.nome}</h1>

        <div class="text-center align-items-center d-flex justify-content-around pt-5">

            <h3>Tipo: {props.tipo}</h3>
            
            <h3>Habilidades: {props.habilidades}</h3>
            
            <h3>Ataques:</h3>
            
            <div class = "justify-content-around">
               
                <h4>{props.ataques}</h4>
               
                <h4>{props.ataques_2}</h4>
           
            </div>

        </div>

        </>);
        }

export default Desc;