import styled from 'styled-components'

export const Container = styled.header`
  background-color: var(--blue);
`

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 1.1rem 2rem 10rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    font-size: 1rem;
    color: var(--shape);
    background: var(--blue-light);
    border: 0;
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 3rem;
    border: 1px solid var(--blue-light) ;
    &:hover {
      filter: brightness(0.9);
      border: 1px solid var(--shape);
    }
  }
`
