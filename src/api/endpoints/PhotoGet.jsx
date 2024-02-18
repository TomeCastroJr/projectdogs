import { useState } from "react"

export function PhotoGet(){
    const [id, setId] = useState('')

    function handleSubmit(e){
        e.preventDefault();

        fetch('https://dogsapi.origamid.dev/json/api/photo/164')
        .then( (response) => {
            console.log(response)
            return response.json()
        }).then( (json) => {
            console.log(json)
            return json
        })
    }

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" value={id} onChange={ ({target}) => setId(target.value)} />
            <button>Enviar</button>
        </form>
    )
}