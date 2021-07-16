import styled from 'styled-components'

export const List = styled.ul`
  list-style: none;
  padding: 0px;
`

export const Item = styled.li`
  background-color: var(--color-secondary);
  border-radius: 5px;
  color: var(--color-tertiary);
  cursor: pointer;
  font-size: var(--font-sm);
  margin-bottom: 16px;
  padding-bottom: 5px;
  padding: 10px;
  text-align: left;
`

export const Message = styled.p`
  font-weight: bold;
  padding: var(--gutter);
  text-align: center;
`