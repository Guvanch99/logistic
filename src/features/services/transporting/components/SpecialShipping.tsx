import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { DescriptionStyled, ImageStyled, LabelStyled, WrapperStyled } from '../../styled'
import SpecialShippingImage from '../../../../core/assets/specialShipping.jpeg'

const SpecialShipping = () => {
  const { t } = useTranslation('translation')
  return (
    <WrapperStyled>
      <ImageStyled src={SpecialShippingImage} alt="SpecialShippingImage"/>
      <div>
        <LabelStyled>{t('main.servicesOption.specialShipping')}</LabelStyled>
        <DescriptionStyled>
          {t('shipping.main')}
        </DescriptionStyled>
        <DescriptionStyled>
          {t('shipping.secondary')}
        </DescriptionStyled>
      </div>
    </WrapperStyled>
  )
}

export default memo(SpecialShipping)
