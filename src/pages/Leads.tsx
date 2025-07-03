import styled from 'styled-components'

const LeadsArea = styled.div`
  background: #666;
`

const LeadsLogin = styled.div`
  background-image: url(/login-image.svg);
  background-size: cover;
  height: 100vh;
  width: 50vw;
`

function Leads() {
  return (
    <>
      <LeadsArea>Leads</LeadsArea>
      <LeadsLogin />
    </>
  )
}

export default Leads
