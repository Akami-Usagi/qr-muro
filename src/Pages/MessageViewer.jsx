import styled from "styled-components";

const BackgoundVideo = styled.video`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
    object-fit: cover;
    filter: brightness(60%);
`

const TicLogo = styled.img`
  width: 400px;
  position: absolute;
  right: 80px;
  top: 0;
  bottom: 0;
  margin: auto;
  
`
const AvanzandoLogo = styled.img`
  width: 500px;
  position: absolute;
  left: 50px;
  top: 0;
  bottom: 0;
  margin: auto;
  
`
const Title = styled.img`
  width: 1000px;
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  top: 40px;
`
const Qr = styled.img`
  width: 550px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
`
const Scan = styled.img`
  width: 800px;
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  bottom: 50px;
`

const MessageViewer = () => {
  

  return (
    <div>
    <BackgoundVideo autoPlay loop muted playsInline>
            <source src="video/background.mp4" type="video/mp4" />
            Tu navegador no soporta videos HTML5
    </BackgoundVideo>
    <TicLogo src="images/logo_tic.png"/>
    <AvanzandoLogo src="images/avanzando.png"/>
    <Title src="images/title.png"/>
    <Scan src="images/scan.png"/>
    <Qr src="images/code.png"/>
        
      
    
    </div>
  );
};

export default MessageViewer;
