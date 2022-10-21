import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { DescriptionStyled, ImageStyled, LabelStyled, WrapperStyled } from '../../styled'
import Warehousing from '../../../../core/assets/warehousing.jpeg'

const Warehouse = () => {
  const { t } = useTranslation('translation')
  return (
    <WrapperStyled>
      <ImageStyled src={Warehousing} alt="warehousing"/>
      <div>
        <LabelStyled>{t('warehouse.label')}</LabelStyled>
        <DescriptionStyled>
          {t('warehouse.description')}
        </DescriptionStyled>
      </div>
    </WrapperStyled>
  )
}

export default memo(Warehouse)
