import { useTranslation } from 'react-i18next'
import { memo } from 'react'
import { DescriptionStyled, ImageStyled, LabelStyled } from '../../styled'
import ConsaltencyImage from '../../../../core/assets/consultancy.jpeg'

const Transportation = () => {
  const { t } = useTranslation('translation')
  return (
    <>
      <ImageStyled src={ConsaltencyImage} alt="transportation"/>
      <div>
        <LabelStyled>{t('transportation.label')}</LabelStyled>
        <DescriptionStyled>
          {t('transportation.main')}
        </DescriptionStyled>
        <DescriptionStyled>
          {t('transportation.description')}
        </DescriptionStyled>
      </div>
    </>
  )
}

export default memo(Transportation)
