import styled from 'styled-components/macro'
import { flex, fontFamily } from '../../core/styles/mixins'

export const WrapperStyled = styled.div`
  padding: 20px;
  width: 100%;
  height: 100%;
  ${flex({ justify: 'flex-start', align: 'flex-start' })};
  flex-direction: column;
  
  & > div{
    ${flex({ justify: 'flex-start', align: 'flex-start' })};
    flex-direction: column;
  }
`

export const ImageStyled = styled.img`
  width: auto;
  height: 250px;
  border-radius: 20px;
  object-fit: cover;
  margin-bottom: 30px;

  max-width: 100%;
  width: 500px;
`
export const LabelStyled = styled.div`
  ${fontFamily()}
  color: ${({ theme }) => theme.colors.darkBlack};
  font-weight: 600;
  font-size: 22px;
  margin-bottom: 24px;
  text-align: start;
  text-transform:uppercase;

  :after {
    width: 40px;
    content: "";
    height: 4px;
    background: ${({ theme }) => theme.colors.blue500};
    margin-top: 20px;
    display: block;
  }
}
`

export const DescriptionStyled = styled.p`
  ${fontFamily()};
  margin-bottom: 10px;
  color: #424242;
  font-size: 14px;
  font-weight: 400;
`
