import React from 'react'
import { ReactComponent as Star } from '../../assets/svg/Award 6.svg'
import "./game.css"

const GameStat = () => {
  return (
    <div className='gaming-stats-container'>
        <div className='wrapper-rank'>
        <h3 className='game_rank'>Game Ranks</h3>
        <Star/>
        <Star/>
        <Star/>
        <Star/>
        <Star/>
        <Star/>
        </div>
    </div>
  )
}

export default GameStat