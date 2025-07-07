import styled from 'styled-components'

const RegistrationArea = styled.div`
  background: #666;
`

const RegistrationLogin = styled.div`
  background-image: url(/login-image.svg);
  background-size: cover;
  height: 100vh;
  width: 50vw;
`

function Resgistration() {
  return (
    <>
      <RegistrationArea>Resgistrayion</RegistrationArea>
      <RegistrationLogin />
    </>
  )
}

export default Resgistration
