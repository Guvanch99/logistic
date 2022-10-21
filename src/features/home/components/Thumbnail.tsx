import styled from 'styled-components/macro'
import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { ServicesIcon } from '../../../core/icons/ServicesIcon'
import { TruckIcon } from '../../../core/icons/TruckIcon'
import { UsersIcon } from '../../../core/icons/UsersIcon'
import { flex, fontFamily } from '../../../core/styles/mixins'

const Wrapper = styled.div`
  ${flex({ justify: 'center', align: 'flex-start' })};
  flex-wrap: wrap;
  padding: 60px 0;
`

const IconContainer = styled.div`
  color: ${({ theme }) => theme.colors.blue500};
`

const ContentStyled = styled.div`
  ${flex({ justify: 'flex-start', align: 'center' })};
  flex-direction: column;
  margin: 10px 20px;
  width: 100%;
  max-width: 360px;
`

const LabelTextStyled = styled.h1`
  ${fontFamily()}
  color: ${({ theme }) => theme.colors.darkBlack};
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 10px;
`
const TextStyled = styled.p`
  ${fontFamily()};
  text-align: center;
  color: #555555;
  font-size: 15px;
`

const Thumbnail = () => {
  const { t } = useTranslation('translation')
  return (
    <Wrapper>
      <ContentStyled>
        <IconContainer>
          <ServicesIcon width={58} height={48}/>
        </IconContainer>
        <LabelTextStyled>
          {t('home.service.label')}
        </LabelTextStyled>
        <TextStyled>
          {t('home.service.description')}
        </TextStyled>
      </ContentStyled>
      <ContentStyled>
        <IconContainer>
          <TruckIcon width={58} height={48}/>
        </IconContainer>
        <LabelTextStyled>
          {t('home.truck.label')}
        </LabelTextStyled>
        <TextStyled>
          {t('home.truck.description')}
        </TextStyled>
      </ContentStyled>
      <ContentStyled>
        <IconContainer>
          <UsersIcon width={58} height={48}/>
        </IconContainer>
        <LabelTextStyled>
          {t('home.users.label')}
        </LabelTextStyled>
        <TextStyled>
          {t('home.users.description')}
        </TextStyled>
      </ContentStyled>
    </Wrapper>
  )
}

export default memo(Thumbnail)
