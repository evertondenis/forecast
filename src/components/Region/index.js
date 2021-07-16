import React from 'react'
import {v4 as uuidV4} from 'uuid'
import { List, Item } from './styled'

const RegionsList = ({data, handleClick}) => {
  return (
    <List>
      {data && 
          data.map((item) => (
            <Item key={uuidV4()} onClick={() => handleClick(item.idAreaAviso, item.globalIdLocal)}>
            <p>
              {item.globalIdLocal} {item.idAreaAviso}
            </p>
            {/* <p>Load info</p> */}
          </Item>
        ))
      }
    </List>
  )
}

export default RegionsList