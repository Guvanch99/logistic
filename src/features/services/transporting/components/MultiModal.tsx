import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { DescriptionStyled, ImageStyled, LabelStyled, WrapperStyled } from '../../styled'
import Multimodal from '../../../../core/assets/multimodal.jpeg'

const MultiModal = () => {
  const { t } = useTranslation('translation')
  return (
    <WrapperStyled>
      <ImageStyled src={Multimodal} alt="Multimodal"/>
      <div>
        <LabelStyled>{t('main.servicesOption.multiModal')}</LabelStyled>
        <DescriptionStyled>
          {t('multiModal.main')}
        </DescriptionStyled>
        <DescriptionStyled>
          {t('multiModal.secondary')}
        </DescriptionStyled>
      </div>
    </WrapperStyled>
  )
}

export default memo(MultiModal)
