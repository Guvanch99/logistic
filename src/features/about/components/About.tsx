import { memo } from 'react'
import styled from 'styled-components/macro'
import { useTranslation } from 'react-i18next'
import { useMedia } from 'react-use'
import { flex, fontFamily } from '../../../core/styles/mixins'
import Airplanes from '../../../core/assets/airplane.gif'

const WrapperStyled = styled.div`
  ${flex({ justify: 'center', align: 'center' })};
`
const ContentStyled = styled.div<{isWrap: boolean}>`
  ${flex({ justify: 'center', align: 'center' })};
  max-width: 1100px;
  padding: 20px;
  margin: 50px 0;
  width: 100%;
  height: 100%;
  flex-direction: ${({ isWrap }) => (isWrap ? 'column' : 'row')};
`

const ImageStyled = styled.img`
  width: 500px;
  height: 100%;
  object-fit: cover;
  margin-right: 20px;
  border-radius: 10px;
`

const TextWrapper = styled.div`
  ${flex({ justify: 'flex-start', align: 'center' })};
  flex-direction: column;
`

const LabelStyled = styled.h1`
  ${fontFamily()};
  width: 100%;
  color: ${({ theme }) => theme.colors.darkBlack};
  line-height: 24px;
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 20px;
  text-align: start;
`

const TextStyled = styled.p`
  ${fontFamily()};
  width: 100%;
  color: ${({ theme }) => theme.colors.darkBlack};
  line-height: 24px;
  font-size: 18px;
  margin-bottom: 20px;
  text-align: start;
`
const About = () => {
  const { t } = useTranslation('translation')
  const isNetbook = useMedia('(max-width: 900px)')
  return (
    <WrapperStyled>
      <ContentStyled isWrap={isNetbook}>
        <ImageStyled src={Airplanes} alt="office"/>
        <TextWrapper>
          <LabelStyled>{t('about.label1')}</LabelStyled>
          <LabelStyled>{t('about.label2')}</LabelStyled>
          <LabelStyled>{t('about.label3')}</LabelStyled>
          <TextStyled>
            {t('about.main')}
          </TextStyled>
          <TextStyled>
            {t('about.body')}
          </TextStyled>
          <TextStyled>
            {t('about.footer')}
          </TextStyled>
        </TextWrapper>
      </ContentStyled>
    </WrapperStyled>
  )
}

export default memo(About)
