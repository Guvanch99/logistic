import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { DescriptionStyled, ImageStyled, LabelStyled, WrapperStyled } from '../../styled'
import PartialShippingImage from '../../../../core/assets/partialShipping.jpeg'

const PartialShipping = () => {
  const { t } = useTranslation('translation')
  return (
    <WrapperStyled>
      <ImageStyled src={PartialShippingImage} alt="PartialShippingImage"/>
      <div>
        <LabelStyled>{t('main.servicesOption.partialShipping')}</LabelStyled>
        <DescriptionStyled>
          {t('partialShipping.main')}
        </DescriptionStyled>
      </div>
    </WrapperStyled>
  )
}

export default memo(PartialShipping)
