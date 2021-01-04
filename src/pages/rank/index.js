import React from 'react'
import global from '../../global'

function Rank () {
  return (
    <div>排行耪
      <button onClick={()=>{
        global.demo.setScropTop(100)
      }}
      >
        测试
      </button>
    </div>
  )
}

export default Rank
