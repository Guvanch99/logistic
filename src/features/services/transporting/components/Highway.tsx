import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { DescriptionStyled, ImageStyled, LabelStyled, WrapperStyled } from '../../styled'
import RoadFreight from '../../../../core/assets/roadFreight.jpeg'

const Highway = () => {
  const { t } = useTranslation('translation')
  return (
    <WrapperStyled>
      <ImageStyled src={RoadFreight} alt="RoadFreight"/>
      <div>
        <LabelStyled>{t('transportmenu.highway')}</LabelStyled>
        <DescriptionStyled>
          {t('roadFreight.main')}
        </DescriptionStyled>
        <DescriptionStyled>
          {t('roadFreight.secondary')}
        </DescriptionStyled>
      </div>
    </WrapperStyled>
  )
}

export default memo(Highway)
