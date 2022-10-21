import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { ImageStyled, WrapperStyled, LabelStyled, DescriptionStyled } from '../../styled'
import AgencyImage from '../../../../core/assets/agency.webp'

const Agency = () => {
  const { t } = useTranslation('translation')
  window.scrollTo(0, 0)
  return (
    <WrapperStyled>
      <ImageStyled src={AgencyImage} alt="agency"/>
      <div>
        <LabelStyled>{t('agency.label')}</LabelStyled>
        <DescriptionStyled>
          {t('agency.description')}
        </DescriptionStyled>
      </div>
    </WrapperStyled>
  )
}

export default memo(Agency)
