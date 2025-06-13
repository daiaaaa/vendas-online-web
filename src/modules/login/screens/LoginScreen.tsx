import { BackgroundImage, LimitedContainer, LogoImage } from '../styles/loginScreen.styles';
import { ContainerLogin } from '../styles/loginScreen.styles';
import { ContainerLoginScreen } from '../styles/loginScreen.styles';

const LoginScreen = () => {
  return (
    <ContainerLoginScreen>
      <ContainerLogin>
        <LimitedContainer>
          <LogoImage src="./logo.png" />
        </LimitedContainer>
      </ContainerLogin>
      <BackgroundImage src="background.png" />
    </ContainerLoginScreen>
  );
};

export default LoginScreen;
