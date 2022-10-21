import { FC } from 'react'
import styled from 'styled-components/macro'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { flex, fontFamily } from '../../../core/styles/mixins'

const WrapperStyled = styled.div`
  ${flex({})};
  flex-direction: column;
  width: 100%;
  border-radius: 10px;
  max-width: 300px;
  cursor: pointer;
  transition:all 0.4s  ease-in;
  :hover{
    transform: scale(1.02);
  }
`

const ImageStyled = styled.img`
  width: 300px;
  height: 200px;
  border-radius: 20px;
  object-fit: cover;
`

const LabelStyled = styled.div`
  ${fontFamily()}
  ${flex({ justify: 'flex-start', align: 'center' })};
  font-size: 18px;
  margin-top: 8px;
  font-weight: 600;
  margin-bottom: 5px;
  color: ${({ theme }) => theme.colors.darkBlack};
  height: 42px;
  overflow: hidden;
`

const DescriptionStyled = styled.p`
  ${fontFamily()}
  color: #5e5e5e;
  font-size: 14px;
`

type TProps = {
  image: string
  label: string
  description: string
}
const Card: FC<TProps> = ({ image, label, description }) => {
  const navigate = useNavigate()
  const { t } = useTranslation('translation')
  return (
    <WrapperStyled onClick={() => navigate('/blog/incoterms')}>
      <ImageStyled src={image} alt={label}/>
      <LabelStyled>{t(label)}</LabelStyled>
      <DescriptionStyled>{t(description)}</DescriptionStyled>
    </WrapperStyled>
  )
}

export default Card
