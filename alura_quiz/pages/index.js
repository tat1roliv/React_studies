import styled from 'styled-components'


//criando um componente e puxando o style components

const Title = styled.h1`
font-size: 50px;
color: ${({ theme }) => theme.colors.primary};
`

//function Title(props){ //props /calopsita /var qualquer
//  return (
 // <h1>
  //{props.children}
  //</h1>
 // )
//}


export default function Home() {
  return <Title>hola que tal</Title>
}
