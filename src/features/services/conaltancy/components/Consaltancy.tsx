import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { DescriptionStyled, ImageStyled, LabelStyled, WrapperStyled } from '../../styled'
import ConsaltencyImage from '../../../../core/assets/consultancy.jpeg'

const Consaltency = () => {
  const { t } = useTranslation('translation')
  return (
    <WrapperStyled>
      <ImageStyled src={ConsaltencyImage} alt="consultancy"/>
      <div>
        <LabelStyled>{t('consultancy.label')}</LabelStyled>
        <DescriptionStyled>
          {t('consultancy.description')}
        </DescriptionStyled>
      </div>
    </WrapperStyled>
  )
}

export default memo(Consaltency)
