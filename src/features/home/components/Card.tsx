import { FC, memo } from 'react'
import styled from 'styled-components/macro'
import { NavLink } from 'react-router-dom'
import { flex, fontFamily } from '../../../core/styles/mixins'

const WrapperStyled = styled(NavLink)`
  ${flex(({ justify: 'space-evenly', align: 'flex-start' }))};
  flex-direction: column;
  margin: 20px;
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.blue500};
  transition:all 0.5s ease-in;
  width: 260px;
  height: 260px;
  :hover{
    background: ${({ theme }) => theme.colors.red};
    transform: scale(1.04);
  }
`

const LabelStyled = styled.div`
  ${fontFamily()};
  ${flex({ justify: 'center', align: 'center' })}
  color: ${({ theme }) => theme.colors.white};
  font-weight: 600;
  font-size: 22px;
  text-align: center;
  text-transform:uppercase;
  padding: 8px 16px;
`

const ImageStyled = styled.img`
  width: 260px;
  height: 260px;
  object-fit: cover;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
`

type TProps = {
  label: string
  image: string
  url: string
}

const Card: FC<TProps> = ({ label, url, image }) => (
  <WrapperStyled to={url}>
    <LabelStyled>{label}</LabelStyled>
    <ImageStyled src={image} alt={label}/>
  </WrapperStyled>
)

export default memo(Card)
