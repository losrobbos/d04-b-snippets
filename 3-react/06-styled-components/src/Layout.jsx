import styled from "styled-components"

export const Layout = styled.div`
  display: grid;

  /* two column layout on bigger devices */
  @media (min-width: 500px) {
    grid-template-columns: 1fr 1fr;
  }
`

export default Layout
