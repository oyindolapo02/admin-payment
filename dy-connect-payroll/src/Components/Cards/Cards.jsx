import React from 'react'
import { useState } from 'react'
import { CardsData } from '../../Data'
import { myCard } from '../../Data'
import Card from '../Cardf/Card'
import './Cards.css'

const Cards = () => {

  // const [cardinfo, setcardinfo] = useState([CardsData])

  return (
    <div className='flex flex-col justify-between items-center rounded-md bg-slate-50 md:flex-row border border-blue-600 py-3 w-full h-[45vh] md:h-[25vh]'>
      {myCard.map((nwcard, id)=> {
        return (
          <Card
            userGain={nwcard.userGain}
            month={nwcard.month}
            userLost={nwcard.userLost}
            id={nwcard.id}
          />
        )
      })}
    </div>
  )
}

export default Cards