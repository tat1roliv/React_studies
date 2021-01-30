import styled from 'styled-components'
import db from '../db.json';


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

const BackgroundImage = styled.div`
    background-image: url(${db.bg});
    flex: 1;
    background-size: cover;
    background-position: left;
`;

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

const Widget = styled.div`
    background-color: #1C1814;
    margin-top:24px;
    margin-bottom: 24px;
    border: 1px solid #ffffff;
    border-radius: 10px;
    overflow:hidden;


    h1, h2, h3{
      font-size: 16px;
      font-weight:700;
      line-height: 1;
      margin-bottom: 0;
    }
    p{
      font-size:14px;
      font-weight: 400;
      line-height:1; 
    }
`;


export default function Home() {
  return (
    <BackgroundImage>
      <QuizContainer>
        <Widget>
          <h1>titulo</h1>
          <p>lorem lorem lorem</p>
        </Widget>
        <Widget>
        x
        </Widget>
      </QuizContainer> 
    </BackgroundImage>
  );
}
