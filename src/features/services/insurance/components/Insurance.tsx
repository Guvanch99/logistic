import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { DescriptionStyled, ImageStyled, LabelStyled, WrapperStyled } from '../../styled'
import InsuranceImage from '../../../../core/assets/insurance.webp'

const Insurance = () => {
  const { t } = useTranslation('translation')
  return (
    <WrapperStyled>
      <ImageStyled src={InsuranceImage} alt="InsuranceImage"/>
      <div>
        <LabelStyled>{t('insurance.label')}</LabelStyled>
        <DescriptionStyled>
          {t('insurance.description')}
        </DescriptionStyled>
      </div>
    </WrapperStyled>
  )
}

export default memo(Insurance)
