import React from 'react'
import Header from '../../Components/Header/Header'
import './Analytics.css'
import { useState, useEffect } from 'react'
import ReactPaginate from 'react-paginate'
import useFetch from '../../FetchCustomehook/useFetch'
import { all } from 'axios'

const Analytics = () => {

  const users = `https://jsonplaceholder.typicode.com/users`

  const { allData, loading } = useFetch(users)
  console.log(allData)

  const [numberOfPage, setnumberOfPage] = useState(0)

  const itemsPerpage = 7

  const pages = numberOfPage * itemsPerpage

  const sumAll = allData.slice(pages, pages + itemsPerpage).map(itemss=> {
    return (
      <div>
        <h2>{itemss.id}</h2>
        <h2>{itemss.name}</h2>
        <h2>{itemss.email}</h2>
      </div>
    )
  })

  const counting = Math.ceil(allData.length / itemsPerpage)

  const selects = ({selected})=> {
    setnumberOfPage(selected)
  }

  
  return (
    <div className='border border-purple-400 h-screen'>
      <Header/>

      {loading && <div>LOADING...</div>}

      <div>
        {sumAll}
      </div>
      
      <ReactPaginate
        previousLabel={'Previous'}
        nextLabel={'Next'}
        pageCount={counting}
        onPageChange={selects}

      />
      
    </div>
  )
}

export default Analytics