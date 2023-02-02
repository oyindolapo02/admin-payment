import React from "react"
import axios from "axios"
import {useState, useEffect} from 'react'



const useFetch = (api) => {
    const [allData, setallData] = useState([])
    const [loading, setloading] = useState(true)

    useEffect(()=> {
        try {
            const url = async()=> {
                const apiContent = await axios.get(api)
                const bloop = apiContent.data
                setallData(bloop)
                setloading(false)
                console.log(bloop)
                console.log('hello')
            }

        return url
        } catch(error){
            console.log(error.message)
        }
    }, [api])

    return { allData, loading }
}

export default useFetch