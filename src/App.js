import React, { useState } from 'react'
import Data from './data.json'
function App() {

  const [search, setSearch] = useState('')

  return (
    <div>
      <p>İstifadəçilər</p>
      <div>
        <input type="text" placeholder='axtar'
          onChange={e => setSearch(e.target.value)}
        />
      </div>

      <div>
        {
          Data.filter((val) => {
            if (search == '') {
              return val
            } else if (val.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())) {
              return val
            }
          }).map((val) => {
            return (
              <div key={val.id}>
                <img src={val.image} alt="" />
                <p>{val.title}</p>
                <p>{val.Description}</p>
              </div>
            )
          })
        }
      </div>

    </div>
  )
}

export default App