import {useState, useEffect} from 'react'
import axios from 'axios'

function starShips() {

    const [starShips, setStarShips] = useState(null)

    useEffect(()  => {
        axios.get('https://swapi.tech/api/starships/').then(res => {
            console.log(res.data.results)
        })
    }, [])

    return (
    <div>starShips</div>
)

}

export default starShips