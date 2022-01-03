import styled from 'styled-components';

export const Container = styled.div`
    padding: 0 2rem;
    text-align: center;
`

export const Main = styled.main`
    min-height: 100vh;
    padding: 4rem 0;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
`
export const Title = styled.h1`
    color:#20B2AA;
    font-size:40px;
`
export const Footer = styled.footer`
    display: flex;
    flex: 1;
    padding: 2rem 0;
    margin:0px;
    border-top: 1px solid #eaeaea;
    justify-content: center;
    align-items: center;
    background-color:#FFF8DC;
    a{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-grow: 1;
    }
`

