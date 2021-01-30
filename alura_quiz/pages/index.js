import styled from 'styled-components'
import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizBackground from '../src/components/QuizBackground';

import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';

//criando um componente e puxando o style components

//const Title = styled.h1`
//font-size: 50px;
//color: ${({ theme }) => theme.colors.primary};
//`

//function Title(props){ //props /calopsita /var qualquer
//  return (
 // <h1>
  //{props.children}
  //</h1>
 // )
//}

//background
const BackgroundImage = styled.div`
    background-image: url(${db.bg});
    flex: 1;
    background-size: cover;
    background-position: center;
`;

//container + responsividade
export const QuizContainer = styled.div`
    width: 100%;
    max-width: 350px;
    padding-top: 45px;
    margin:auto 10%;
    @media screen and (max-width:500px) {
      margin: auto;
      padding: 15px;
    }
`;

//export funcao
export default function Home() {
  return (
    <BackgroundImage>
      <QuizContainer>
        <Widget>
          <Widget.Content>
            <Widget.Header>
              <h1>titulo</h1>
            </Widget.Header>
            <p>lorem lorem lorem</p>
          </Widget.Content>
        </Widget>
        <Widget>
        <Widget.Content>
            <h1>titulo</h1>
            <p>lorem lorem lorem</p>
          </Widget.Content>
        </Widget>
        <Footer/>
      </QuizContainer> 
    </BackgroundImage>
  );
}
