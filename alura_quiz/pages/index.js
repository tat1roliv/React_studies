import styled from 'styled-components';
import Head from 'next/head';
import { useRouter } from 'next/router';
import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizLogo from '../src/components/QuizLogo';
import QuizContainer from '../src/components/QuizContainer';
import QuizBackground from '../src/components/QuizBackground';
import Input from '../src/components/Input';
import Button from '../src/components/Button';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import { useState } from 'react';

// export funcao
export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');
  console.log('retorno do use state', name, setName);

  return (
    <QuizBackground backgroundImage = {db.bg}>
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
              <Input
                name="userName"
                onChange = {function(infosDoEvento){
                //console.log(infosDoEvento.target.value);
                //State
                //name = infosDoEvento.target.value;
                setName(infosDoEvento.target.value);
              }} 
              placeholder="Escreva seu nome..."  
              value={name}
              />
              <Button type="submit" disabled={name.length === 0}>
                Jogar {name}!
              </Button>
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
    </QuizBackground>
  );
}
