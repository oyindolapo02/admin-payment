import React from 'react'
import { useState } from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {MdCancel} from 'react-icons/md'
import ExpandedCards from '../ExpandedCard/Expandedcards'

const Card = ({userGain, userLost, month, id}) => {

  // const param = {props}

  const [expanded, setexpanded] = useState(false)

  const openExpanded = ()=> {
    const open = true
    setexpanded(open)
  }

  const closeExpanded = ()=> {
    const close = false
    setexpanded(close)
  }

  return (
    <div onClick={openExpanded} className='flex justify-between border bg-slate-200 rounded-md border-red-500 w-full h-1/4 lg:h-2/4 sm:w-5/6 md:w-1/3 md:h-2/4 mx-2 mt-3'>
      <div className='border border-blue-500 w-2/5'>
        <CircularProgressbar className='h-full' value={userGain} text={`${userLost}%`}/>
      </div>
      <div className='border border-orange-500 w-3/5'>
        <h1>{userLost}</h1>
        <h4>{month}</h4>
      </div>
      {expanded ? <ExpandedCards onClick={closeExpanded}/>: null}
      {/* {expanded ? <ExpandedCards onclick={closeExpanded}/>: null} */}
    </div>
  )

  
}

export default Card