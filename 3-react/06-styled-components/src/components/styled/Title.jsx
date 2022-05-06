import styled from "styled-components"

export const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  height: 50px;
  width: 200px;
  background-color: ${(props) => props.primary ? "palevioletred" : "yellow"};;
  /* background-color: palevioletred; */

  &:hover {
    background-color: mediumslateblue;
  }

  @media (min-width: 500px) {
    height: 100px;
  }
`
