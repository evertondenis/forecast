import styled from 'styled-components'

const Input = styled.input`
  background: var(--color-tertiary);
  border: 1px solid var(--color-primary);
  border-radius: 2px;
  color: var(--color-primary);
  padding: 5px;
  margin: var(--gutter) 0;
  width: 100%;
  transition: all 0.2s ease-in-out;

  &:hover {
    border: 1px solid var(--color-secondary);
  }
`

export default Input