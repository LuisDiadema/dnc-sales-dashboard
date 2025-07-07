import styled from 'styled-components'

const HomeArea = styled.div`
  background: #666;
`

const HomeLogin = styled.div`
  background-image: url(/login-image.svg);
  background-size: cover;
  height: 100vh;
  width: 50vw;
`

function Home() {
  return (
    <>
      <HomeArea>Home</HomeArea>
      <HomeLogin />
    </>
  )
}

export default Home
