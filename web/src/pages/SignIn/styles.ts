import styled from 'styled-components';
import { shade } from 'polished';

import sighInBackgroundImg from '../../assets/sign-in-background.png';

export const Container = styled.div`
    height: 100vh;

    display: flex;
    align-items: stretch; //itens dentro do container vai esticar o maximo que puder ( ter 100vh tbm)
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    place-content: center; // Pega todo conteudo e coloca no centro dos dois eixos

    width: 100%;
    max-width: 700px;

    form {
        margin: 80px 0;
        width: 340px;
        text-align: center;

        h1{
            margin-bottom: 24px;
        }

        input {
            background: #232129;
            border-radius: 10px;
            border: 2px solid #232129;
            padding: 16px;
            width: 100%;
            color: #F4EDE8;

            &::placeholder{
                color: #666360;
            }
           
            & + input {
            margin-top: 8px;
            }
        }

       

        button{
            background: #ff9000;
            height: 56px;
            border-radius: 10px;
            border: 0;
            padding: 0 16px;
            color: #312e38;
            width: 100%;
            font-weight: 500;
            margin-top: 16px;
            transition: background-color .2s;

            &:hover{
                background: ${shade(.2,'#ff9000')};
            }
        }

        a {
            color: #F4EDE8;
            display: block;
            margin-top: 24px;
            text-decoration: none;
            transition: color .2s;

            &:hover {
                color: ${shade(.2, '#F4EDE8')}
            }
        }
    }

    > a {
        color: #ff9000;
        display: block;
        margin-top: 24px;
        text-decoration: none;
        transition: color .2s;

        display: flex;
        align-items: center;

        svg {
            margin-right: 16px;
        }
       
        &:hover {
            color: ${shade(.2, '#ff9000')}
        }

    }
`;

export const Background = styled.div`
    flex: 1;
    background: url(${sighInBackgroundImg}) no-repeat center;
    background-size: cover; //Vai garantir que a imagem ocupara todo espaço possivel
`;