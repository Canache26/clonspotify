import { LoginButton, Container } from "./style"
import { loginURL, getTokenFromURL } from "../../spotifylogic"


const Login = () => {
  const Token = getTokenFromURL()
  console.log(Token)
  return (
    <Container>
        <img src="https://ipadizate.com/hero/2018/05/Spotify-Portada.jpg?width=1200&aspect_ratio=16:9" alt="Logo"/>
        <LoginButton href={loginURL}>Iniciar sesion en Spotify</LoginButton>
    </Container>
  )
}

export default Login