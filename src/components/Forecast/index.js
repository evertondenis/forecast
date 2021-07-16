import React from 'react'
import {v4 as uuidV4} from 'uuid'
import { List, Item, Message } from './styled'

const ForecastList = ({forecastList, area}) => {
  return (
    <List>
      {!forecastList && <Message>Select one region beside to show the forecast.</Message>}
      {forecastList && forecastList.data.map((item, index) => (
        <Item key={uuidV4()}>
          <p>
            {area} {item.forecastDate}
          </p>
          <p>Minimum temperature: {item.tMin}°C</p>
          <p>Maximum temperature: {item.tMax}°C</p>
          <p>% precipitation: {item.precipitaProb}%</p>
        </Item>
      ))}
    </List>
  )
}

export default ForecastList