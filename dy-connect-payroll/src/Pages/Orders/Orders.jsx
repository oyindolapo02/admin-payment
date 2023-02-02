import React from 'react'
import Header from '../../Components/Header/Header'
import './Orders.css'
import useFetch from '../../FetchCustomehook/useFetch'
import axios from 'axios'
import { useState } from 'react'
import ReactPaginate from 'react-paginate'

const Orders = () => {

  const tableData = 'https://jsonplaceholder.typicode.com/posts';
  const {allData, loading} = useFetch(tableData);
  console.log(allData)

  const [pageNum, setpageNum] = useState(0)

  const itemsInPage = 25

  const pages = pageNum * itemsInPage

  const allItems = allData.slice(pages, pages + itemsInPage).map(orders=> {
    return (
      <tr className='text-center'>
        <td className='border'>{orders.userId}</td>
        <td className='border'>{orders.userId}</td>
        <td className='border'>{orders.id}</td>
        <td className='border'>{orders.userId}</td>
      </tr>
    )
  })

  const counted = Math.ceil(allData.length / itemsInPage)

  const selected = ({selected})=> {
    setpageNum(selected)
  }

  return (
    <div className='flex flex-col min-h-screen'>
      <Header/>
      <div className='flex justify-center border w-full'>
        <table className='border w-full md:w-full lg:w-4/5 xl:w-4/5 mt-5 rounded-lg mx-1 md:mx-0'>
          <tr className='border border-green-300 text-center text-lg'>
            <th className='border'>Product</th>
            <th className='border'>Tracking ID</th>
            <th className='border'>Date</th>
            <th className='border'>Status</th>
          </tr>
          {allItems}
          {/* <tr className='text-center'>
            <td className='border'>Oyin</td>
            <td className='border'>41</td>
            <td className='border'>dec 21 2022</td>
            <td className='border'>Approved</td>
          </tr>
          <tr className='text-center'>
            <td className='border'>Labake</td>
            <td className='border'>30</td>
            <td className='border'>nov 14 2022</td>
            <td className='border'>waiting</td>
          </tr> */}
        </table>
      </div>
      <div className='flex justify-center my-3'>
        <ReactPaginate className='flex justify-between w-2/4 md:w-1/3 rounded-md'
          previousLabel={'Previous'}
          nextLabel={'Next'}
          pageCount={counted}
          onPageChange={selected}
          containerClassName={'paginationBttns'}
          previousLinkClassName={'previousBttns'}
          nextLinkClassName={'nextBttn'}
          disabledClassName={'paginationDisabled'}
          activeClassName={'paginationActive'}
        />
      </div>
    </div>
  )
}

export default Orders