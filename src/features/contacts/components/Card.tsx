import { FC, ReactNode } from 'react'
import styled from 'styled-components/macro'
import { LocationIcon } from '../../../core/icons/LocationIcon'
import { PhoneIcon } from '../../../core/icons/PhoneIcon'
import { EmailIcon } from '../../../core/icons/EmailIcon'
import { flex, fontFamily } from '../../../core/styles/mixins'

const WrapperStyled = styled.div<{height?: number}>`
  ${flex({ justify: 'space-between', align: 'center' })};
  flex-direction: column;
  height: ${({ height }) => (height ? `${height}px` : 'auto')};
  width: 100%;
  padding: 20px;
  max-width: 550px;
  height: 200px;
  border: 1px solid #dadada;
  :hover{
    background:#dadada ;
  }
`

const LabelStyled = styled.div`
  width: 100%;
  ${fontFamily()};
  line-height: 18px;
  color: ${({ theme }) => theme.colors.darkBlack};
  font-size: 22px;
  font-weight: 700;
  :after {
    width: 60px;
    content: "";
    height: 4px;
    background: ${({ theme }) => theme.colors.blue800};
    margin: 15px 0 20px 0;
    display: block;
  }
`

const IconContainerStyled = styled.div`
  color: ${({ theme }) => theme.colors.darkBlack};
  margin-right: 8px;
`

const TextStyled = styled.div`
  ${fontFamily()}
  ${flex({ justify: 'flex-start', align: 'center' })};
  width: 100%;
  margin-bottom: 10px;
  color: #424242;
  font-size: 14px;
  font-weight: 400;
`
type TProps = {
  label?: string
  address: string
  phone: string
  email: string
  children?: ReactNode
  height?: number
}

const Card: FC<TProps> = ({ address, phone, email, label, children, height }) => (
  <WrapperStyled height={height}>
    {label && <LabelStyled>{label}</LabelStyled>}
    <TextStyled>
      <IconContainerStyled>
        <LocationIcon width={20} height={20}/>
      </IconContainerStyled>
      {address}
    </TextStyled>
    <TextStyled>
      <IconContainerStyled>
        <PhoneIcon width={20} height={20}/>
      </IconContainerStyled>
      {phone}
    </TextStyled>
    <TextStyled>
      <IconContainerStyled>
        <EmailIcon width={20} height={20}/>
      </IconContainerStyled>
      {email}
    </TextStyled>
    {children}
  </WrapperStyled>
)

export default Card
