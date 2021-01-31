import styled from 'styled-components';
import Head from 'next/head';
import { useRouter } from 'next/router';
import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import { useState } from 'react';

// criando um componente e puxando o style components

// const Title = styled.h1`
// font-size: 50px;
// color: ${({ theme }) => theme.colors.primary};
// `

// function Title(props){ //props /calopsita /var qualquer
//  return (
// <h1>
// {props.children}
// </h1>
// )
// }

// background
const BackgroundImage = styled.div`
    background-image: url(${db.bg});
    flex: 1;
    background-size: cover;
    background-position: center;
`;


// container + responsividade
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

// export funcao
export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');
  console.log('retorno do use state', name, setName);

  return (
    <BackgroundImage>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>Coffee Time Quiz</h1>
          </Widget.Header>
          <Widget.Content>
            <form onSubmit={ function(infosDoEvento){
              infosDoEvento.preventDefault();
              router.push(`/quiz?name=${name}`);
              //router manda para a proxima pagina
            }}>
              <input 
              onChange = {function(infosDoEvento){
                console.log(infosDoEvento.target.value);
                //State
                //name = infosDoEvento.target.value;
                setName(infosDoEvento.target.value);
              }} 
              placeholder="Escreva seu nome..."  
              />
              <button type="submit" disabled={name.length === 0}>
                Jogar {name}!
              </button>
            </form>
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Content>
            <h1>titulo</h1>
            <p>lorem lorem lorem</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
    </BackgroundImage>
  );
}
