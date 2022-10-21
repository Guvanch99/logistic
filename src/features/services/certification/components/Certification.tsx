import { useTranslation } from 'react-i18next'
import { memo } from 'react'
import { DescriptionStyled, ImageStyled, LabelStyled, WrapperStyled } from '../../styled'
import CertificationImage from '../../../../core/assets/certification.jpeg'

const Certification = () => {
  const { t } = useTranslation('translation')
  return (
    <WrapperStyled>
      <ImageStyled src={CertificationImage} alt="certification"/>
      <div>
        <LabelStyled>{t('certification.label')}</LabelStyled>
        <DescriptionStyled>
          {t('certification.description')}
        </DescriptionStyled>
      </div>
    </WrapperStyled>
  )
}

export default memo(Certification)
