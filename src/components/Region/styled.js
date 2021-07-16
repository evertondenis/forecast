import styled from 'styled-components'

export const List = styled.ul`
  list-style: none;
  padding: 0px;
`

export const Item = styled.li`
  background-color: var(--color-primary);
  border-radius: 5px;
  color: var(--color-tertiary);
  cursor: pointer;
  font-size: var(--font-sm);
  margin-bottom: 16px;
  padding-bottom: 5px;
  padding: 10px;
  text-align: left;
  transition: all 0.2s ease-in-out;

  &:hover {
    box-shadow: 0px 1px 2px 0px rgb(60 64 67 / 30%), 0px 2px 6px 2px rgb(60 64 67 / 15%);
  }
`