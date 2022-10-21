import styled from 'styled-components/macro'
import { memo, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import transportingImage from '../../../core/assets/truckCard.jpeg'
import warehousingImage from '../../../core/assets/warehousing.jpeg'
import clearanceImage from '../../../core/assets/customService.jpeg'
import insuranceImage from '../../../core/assets/insurance.webp'
import agencyImage from '../../../core/assets/agency.webp'
import consultancyImage from '../../../core/assets/consultancy.jpeg'
import { flex, fontFamily } from '../../../core/styles/mixins'
import Card from './Card'
import Button, { BaseButton } from '../../../core/components/CustomButton'

const WrapperStyled = styled.div`
  padding: 20px;
  ${flex({})};
  flex-direction: column;
  
  & > div{
    ${flex({ justify: 'space-evenly', align: 'center' })};
    flex-wrap: wrap;
  }
  
  ${BaseButton}{
    margin:20px auto;
    width: 120px;
    height: 40px;
    text-align: center;
    background: ${({ theme }) => theme.colors.blue500};
    color: ${({ theme }) => theme.colors.white};
    
    :hover{
      background: ${({ theme }) => theme.colors.blue800};
    }
  }
`

const TitleText = styled.h1`
  ${fontFamily()}
  color: ${({ theme }) => theme.colors.darkBlack};
  font-weight: 600;
  font-size: 22px;
  margin-bottom: 24px;
  text-align: start;
  text-transform:uppercase;

  :after {
    width: 40px;
    content: "";
    height: 4px;
    background: ${({ theme }) => theme.colors.blue500};
    margin-top: 20px;
    display: block;
  }
}
`

const cardData = [
  {
    id: 1,
    label: 'main.servicesOption.transporting',
    url: 'transporting',
    image: transportingImage
  },
  {
    id: 2,
    label: 'main.servicesOption.customs',
    url: 'cleaning',
    image: clearanceImage
  },
  {
    id: 3,
    label: 'main.servicesOption.warehouse',
    url: 'warehouse',
    image: warehousingImage
  },
  {
    id: 4,
    label: 'main.servicesOption.agency',
    url: 'agency',
    image: agencyImage
  },
  {
    id: 5,
    label: 'main.servicesOption.consultancy',
    url: 'consultancy',
    image: consultancyImage
  },
  {
    id: 6,
    label: 'main.servicesOption.insurance',
    url: 'insurance',
    image: insuranceImage
  }
]

const NavigationCard = () => {
  const [isShowMore, setShowMore] = useState(false)
  const { t } = useTranslation('translation')
  const cardInfo = useMemo(
    () =>
      (isShowMore ? cardData : cardData.filter(({ id }) => ![4, 5, 6].includes(id))),
    [isShowMore]
  )
  return (
    <WrapperStyled>
      <TitleText>{t('main.services')}</TitleText>
      <div>
        {
          cardInfo.map(({ label, image, url, id }) => (
            <Card key={id} url={url} label={t(label)} image={image}/>
          ))
        }
      </div>
      <Button type="button" text={isShowMore ? t('showLess') : t('showMore')} onClick={() => setShowMore(!isShowMore)} />
    </WrapperStyled>
  )
}

export default memo(NavigationCard)
