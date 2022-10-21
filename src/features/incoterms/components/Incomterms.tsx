import styled from 'styled-components/macro'
import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useMedia } from 'react-use'
import Intercom from '../../../core/assets/incoterms.jpeg'
import { flex, fontFamily } from '../../../core/styles/mixins'

const WrapperStyled = styled.div<{isTablet: boolean}>`
  ${flex({ justify: 'center', align: 'flex-start' })};
  flex-direction: ${({ isTablet }) => (isTablet ? 'column' : 'row')};
  margin: 40px 20px;
`

const ImageStyled = styled.img`
  border-radius: 20px;
  object-fit: cover;
  margin-right: 40px;
  height: 250px;
  margin-bottom: 30px;

  max-width: 100%;
  width: 500px;
`
const TextContainerStyled = styled.div`
  max-width: 530px;
  
  &  div{
    margin-bottom: 40px;
  }
`

const LabelStyled = styled.h1`
  ${fontFamily()}
  line-height: 1.2;
  color: rgb(91, 91, 93);
  margin-top: 0px;
  margin-bottom: 15px;
  font-size: 30px;
  clear: both;
`
const DescriptionStyled = styled.p`
  ${fontFamily()}
  margin-bottom: 15px;
  padding-left: 0px;
  color: rgb(91, 91, 93);
  font-family: ProximaNova, Arial, Helvetica, sans-serif, normal;
  font-size: 14px;
`
const Incomterms = () => {
  const { t } = useTranslation('translation')
  const isTablet = useMedia('(max-width: 700px)')
  return (
    <WrapperStyled isTablet={isTablet}>
      <ImageStyled src={Intercom} alt="intercom"/>
      <TextContainerStyled>
        <div>
          <LabelStyled>{t('blog.incometerm.label')}</LabelStyled>
          <DescriptionStyled>{t('blog.incometerm.description')}</DescriptionStyled>
        </div>
        <div>
          <LabelStyled>{t('blog.incometerm.EXW.main')}</LabelStyled>
          <DescriptionStyled>{t('blog.incometerm.EXW.description')}</DescriptionStyled>
        </div>
        <div>
          <LabelStyled>{t('blog.incometerm.FCA.main')}</LabelStyled>
          <DescriptionStyled>{t('blog.incometerm.FCA.description')}</DescriptionStyled>
        </div>
        <div>
          <LabelStyled>{t('blog.incometerm.FAS.main')}</LabelStyled>
          <DescriptionStyled>{t('blog.incometerm.FAS.description')}</DescriptionStyled>
        </div>
        <div>
          <LabelStyled>{t('blog.incometerm.FOB.main')}</LabelStyled>
          <DescriptionStyled>{t('blog.incometerm.FOB.description')}</DescriptionStyled>
        </div>
        <div>
          <LabelStyled>{t('blog.incometerm.CFR.main')}</LabelStyled>
          <DescriptionStyled>{t('blog.incometerm.CFR.description')}</DescriptionStyled>
        </div>
        <div>
          <LabelStyled>{t('blog.incometerm.CIF.main')}</LabelStyled>
          <DescriptionStyled>{t('blog.incometerm.CIF.description')}</DescriptionStyled>
        </div>
        <div>
          <LabelStyled>{t('blog.incometerm.CIP.main')}</LabelStyled>
          <DescriptionStyled>{t('blog.incometerm.CIP.description')}</DescriptionStyled>
        </div>
        <div>
          <LabelStyled>{t('blog.incometerm.CPT.main')}</LabelStyled>
          <DescriptionStyled>{t('blog.incometerm.CPT.description')}</DescriptionStyled>
        </div>
        <div>
          <LabelStyled>{t('blog.incometerm.DDP.main')}</LabelStyled>
          <DescriptionStyled>{t('blog.incometerm.DDP.description')}</DescriptionStyled>
        </div>
        <div>
          <LabelStyled>{t('blog.incometerm.DAT.main')}</LabelStyled>
          <DescriptionStyled>{t('blog.incometerm.DAT.description')}</DescriptionStyled>
        </div>
        <div>
          <LabelStyled>{t('blog.incometerm.DAP.main')}</LabelStyled>
          <DescriptionStyled>{t('blog.incometerm.DAP.description')}</DescriptionStyled>
        </div>
      </TextContainerStyled>
    </WrapperStyled>
  )
}

export default memo(Incomterms)
