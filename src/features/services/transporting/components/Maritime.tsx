import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { DescriptionStyled, ImageStyled, LabelStyled, WrapperStyled } from '../../styled'
import OceanFreight from '../../../../core/assets/truck4.png'

const Maritime = () => {
  const { t } = useTranslation('translation')
  return (
    <WrapperStyled>
      <ImageStyled src={OceanFreight} alt="OceanFreight"/>
      <div>
        <LabelStyled>{t('transportmenu.maritime')}</LabelStyled>
        <DescriptionStyled>
          {t('maritime.main')}
        </DescriptionStyled>
      </div>
    </WrapperStyled>
  )
}

export default memo(Maritime)
