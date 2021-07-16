import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { getRegions, filterRegion } from "../store/actions/regionActions";
import { getForecast } from "../store/actions/forecastActions";

import { Forecast, Input, Region } from '../components'
import { Container, RegionList, ContainerForest, ForecastList, Loader } from './styled'

export default function App() {
  const dispatch = useDispatch();
  const {
    filteredRegions,
    forecast,
    loadingRegions,
    loadingForecast
  } = useSelector(
    (state) => ({
      loadingRegions: state.regionsList.loading,
      filteredRegions: state.regionsList.filteredRegions,
      loadingForecast: state.forecastList.loading,
      forecast: state.forecastList.forecast
    }),
    shallowEqual
  );
  const [filterRegions, setFilterRegions] = useState([]);
  const [forecastList, setForecastList] = useState([]);

  const textInput = useRef();

  useEffect(() => {
    dispatch(getRegions());
  }, [dispatch]);

  useEffect(() => {
    setFilterRegions(filteredRegions);
  }, [filteredRegions]);

  useEffect(() => {
    setForecastList(forecast);
  }, [forecast]);

  const handleFilter = () => {
    dispatch(filterRegion(textInput.current.value));
  };

  const handleForecast = (idAreaAviso, globalIdLocal) => {
    dispatch(getForecast(idAreaAviso, globalIdLocal))
  }

  return (
    <Container>
      <section>
        <h1>REGION</h1>
        <Input
          ref={textInput}
          onChange={handleFilter}
          type="text"
          placeholder="Filter region..."
        />
        {loadingRegions && <p>LOADING...</p>}
        <RegionList>
          {filterRegions && <Region data={filterRegions.data} handleClick={handleForecast} />}
        </RegionList>
      </section>

      <ContainerForest>
        <h1>FORECAST</h1>
        {loadingForecast && <Loader>LOADING...</Loader>}
        <ForecastList loading={loadingForecast}>
          {forecastList && <Forecast forecastList={forecastList.data} area={forecastList.idAreaAviso} />}
        </ForecastList>
      </ContainerForest>
    </Container>
  );
}
