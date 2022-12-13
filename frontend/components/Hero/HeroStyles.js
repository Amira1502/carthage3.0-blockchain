import styled from 'styled-components';


export const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  justifyContent: 'center'
  width: 100%;
  margin-top: 30px;
  margin-left: 100px;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    display: flex;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  }
`;

export const LeftSection = styled.div`
  width: 100%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  }
  
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  }
`;

export const Img = styled.img`
  width:30%;
  height:10%;
  object-fit: cover;
  overflow: hidden;
`
