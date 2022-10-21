import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import AirFreight from '../../../../core/assets/truck2.jpeg'
import { DescriptionStyled, ImageStyled, LabelStyled, WrapperStyled } from '../../styled'

const Airways = () => {
  const { t } = useTranslation('translation')
  return (
    <WrapperStyled>
      <ImageStyled src={AirFreight} alt="AirFreight"/>
      <div>
        <LabelStyled>{t('transportmenu.airways')}</LabelStyled>
        <DescriptionStyled>
          {t('airFreight.main')}
        </DescriptionStyled>
        <DescriptionStyled>
          {t('airFreight.secondary')}
        </DescriptionStyled>
      </div>
    </WrapperStyled>
  )
}

export default memo(Airways)
