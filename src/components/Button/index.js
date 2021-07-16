import styled from 'styled-components'

const Button = styled.button`
  border: 0;
  background-color: var(--color-secondary);
  border: 1px solid var(--color-secondary);
  color: var(--color-tertiary);
  padding: 5px;
  border-radius: 2px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: var(--color-primary);
    border: 1px solid var(--color-primary);
  }
`

export default Button