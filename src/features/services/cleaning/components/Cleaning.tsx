import { useTranslation } from 'react-i18next'
import { memo } from 'react'
import { DescriptionStyled, ImageStyled, LabelStyled, WrapperStyled } from '../../styled'
import ClearanceImage from '../../../../core/assets/customService.jpeg'

const Cleaning = () => {
  const { t } = useTranslation('translation')
  return (
    <WrapperStyled>
      <ImageStyled src={ClearanceImage} alt="clearance"/>
      <div>
        <LabelStyled>{t('clearance.label')}</LabelStyled>
        <DescriptionStyled>
          {t('clearance.description')}
        </DescriptionStyled>
      </div>
    </WrapperStyled>
  )
}

export default memo(Cleaning)
