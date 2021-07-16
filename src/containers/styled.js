import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  justify-content: center;
  padding: var(--gutter);
  width:100%;
`

export const RegionList = styled.div`
  height: calc(100% - 100px);
  min-width: 150px;
  overflow-y: auto;
`

export const ContainerForest = styled.section`
  margin: 0 var(--gutter);
  position: relative;
  width: 200px;
`

export const ForecastList = styled.div`
  height: calc(100% - 100px);
  margin-top: 17px;
  min-width: 200px;
  overflow-y: auto;

  opacity: ${({ loading }) => loading ? '0.2' : '1'};
`

export const Loader = styled.p`
  font-weight: bold;
  margin: 30%;
  position: absolute;
`