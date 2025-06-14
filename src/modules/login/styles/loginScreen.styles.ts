import styled from 'styled-components';

export const ContainerLoginScreen = styled.div`
    display: flex;
    justify-content: right;
    width: 100%;
`;

export const BackgroundImage = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    object-fit: cover;
    z-index: -1;
 `;

export const LogoImage = styled.img`
    width: 100%;


`;

export const ContainerLogin = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgb(230, 204, 221);
    padding: 22px;
    width: 100%;
    height: 100vh;
    max-width: 646px;
`;

export const LimitedContainer = styled.div`
    width: 100%;
    max-width: 498px;
    display: flex;
    justify-content: center;
    flex-direction: column;
`;