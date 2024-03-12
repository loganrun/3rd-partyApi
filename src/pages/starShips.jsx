import {useState, useEffect} from 'react'
import axios from 'axios'

function starShips() {

    const [starShips, setStarShips] = useState(null)

    useEffect(()  => {
        async function getStarShip(){
            try {
                const res = await axios.get('https://swapi.tech/api/starships')
                //console.log(res.data.results)
                setStarShips(res.data.results)
                
            } catch (error) {
                console.error(error)
            }
        }
        getStarShip()
    },[])

    //console.log(starShips)

const loaded =()=>{
    return (
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {starShips.map((ship, index) => (
            <>
            <div  className="relative">
            <img src={ship.url} alt={ship.name} className="w-full h-56 object-cover" />
            <h3 className=" absolute inset-0 flex items-center justify-center text-white text-2xl font-bold">{ship.name}</h3>
            </div>
            </>
        ))}
      </div>
        
)
}
 const loading =()=>{
    return (
        <div className="flex justify-center items-center h-screen">
            <h1>Loading</h1>
        </div>
    )
 }

  return starShips  === null ? loading() : loaded()

}

export default starShips