import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { DescriptionStyled, ImageStyled, LabelStyled, WrapperStyled } from '../../styled'
import RailwayFreight from '../../../../core/assets/railway.jpeg'

const Railway = () => {
  const { t } = useTranslation('translation')
  return (
    <WrapperStyled>
      <ImageStyled src={RailwayFreight} alt="RailwayFreight"/>
      <div>
        <LabelStyled>{t('transportmenu.railway')}</LabelStyled>
        <DescriptionStyled>
          {t('railwayFreight.main')}
        </DescriptionStyled>
      </div>
    </WrapperStyled>
  )
}

export default memo(Railway)
