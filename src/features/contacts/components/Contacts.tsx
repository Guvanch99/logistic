import { memo } from 'react'
import styled from 'styled-components/macro'
import { useTranslation } from 'react-i18next'
import { YMaps, Map, Placemark } from 'react-yandex-maps'
import { useMedia } from 'react-use'
import Card from './Card'
import Offer from '../../offer/components/Offer'
import { InstagramIcon } from '../../../core/icons/InstagramIcon'
import { LinkedInIcon } from '../../../core/icons/LinkedInIcon'
import { flex, fontFamily } from '../../../core/styles/mixins'
import { WhatsappDesktopIcon } from '../../../core/icons/WhatsappDesktopIcon'
import { LocationIcon } from '../../../core/icons/LocationIcon'
import { PhoneIcon } from '../../../core/icons/PhoneIcon'
import { EmailIcon } from '../../../core/icons/EmailIcon'

const WrapperStyled = styled.div`
  margin: 20px 20px 100px 20px;
  & >div{
    ${flex({ justify: 'center', align: 'center' })};
    flex-wrap: wrap;
  }
`

const LabelStyled = styled.div`
  ${flex({ })};
  justify-self: flex-start !important;
  align-self: flex-start !important;
  flex-direction: column;
  text-align: start;
  width: 100%;
  ${fontFamily()};
  line-height: 18px;
  color: ${({ theme }) => theme.colors.darkBlack};
  font-size: 22px;
  font-weight: 700;
  :after {
    width: 60px;
    content: "";
    height: 4px;
    background: ${({ theme }) => theme.colors.blue800};
    margin: 15px 0 20px 0;
    display: block;
  }
`

const ContentStyled = styled.div<{isTablet: boolean}>`
  width: 100%;
  ${flex({ justify: 'space-evenly', align: 'center' })};
  flex-direction: ${({ isTablet }) => (isTablet ? 'column' : 'row')};
`

const ContainerStyled = styled.div`
  ${flex({ justify: 'flex-start', align: 'flex-start' })};
  margin-top: 20px;
  flex-direction: column;
  & >div{
    ${flex({ justify: 'center', align: 'center' })};
    flex-direction: column;
  }
`

const IconsStyled = styled.div`
  ${flex({ justify: 'center', align: 'center' })}
`

const IconContainerStyled = styled.a`
  color: ${({ theme }) => theme.colors.darkBlack};
  margin: 0 8px;
  cursor: pointer;

  transition:all 1s ease-in;
  :hover{
    transform: scale(2.1);
  }
`

const WrapAddressStyled = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2,1fr);
`

const CardStyled = styled.div<{isTablet: boolean}>`
  ${flex({ justify: 'space-between', align: 'center' })}
  flex-direction: ${({ isTablet }) => (isTablet ? 'column' : 'row')};
  width: 100%;
`

const IconStyled = styled.div`
  color: ${({ theme }) => theme.colors.darkBlack};
  margin-right: 8px;
`
const TextStyled = styled.div`
  ${fontFamily()}
  ${flex({ justify: 'center', align: 'center' })};
  width: 100%;
  margin-bottom: 10px;
  word-break: keep-all;
  color: #424242;
  font-size: 14px;
  font-weight: 400;
`

const Contacts = () => {
  const isTablet = useMedia('(max-width: 700px)')
  const { t } = useTranslation('translation')
  return (
    <WrapperStyled>
      <div>
        <CardStyled isTablet={isTablet}>
          <TextStyled>
            <IconStyled>
              <LocationIcon width={20} height={20}/>
            </IconStyled>
            {t('footer.addressInfo')}
          </TextStyled>
          <TextStyled>
            <IconStyled>
              <PhoneIcon width={20} height={20}/>
            </IconStyled>
            +90 534 774 90 75
          </TextStyled>
          <TextStyled>
            <IconStyled>
              <EmailIcon width={20} height={20}/>
            </IconStyled>
            info@bosphoruslogistic.com
          </TextStyled>
        </CardStyled>
        <YMaps query={{ lang: 'en_US' }}>
          <Map
            height={400}
            width="100%"
            defaultState={{
              center: [48.707067, 44.516975],
              zoom: 4.4
            }}>
            <Placemark geometry={[40.995409, 28.823829]}/>
            <Placemark geometry={[41.000085, 71.672579]}/>
            <Placemark geometry={[39.654404, 66.975827]}/>
            <Placemark geometry={[41.067100, 28.751003]}/>
            <Placemark geometry={[40.985934, 29.181215]}/>
            <Placemark geometry={[55.641249, 37.683203]}/>
          </Map>
        </YMaps>
      </div>
      <WrapAddressStyled>
        <ContainerStyled>
          <LabelStyled>{t('contacts.office')}</LabelStyled>
          <div>
            <Card
              label={t('contacts.labelUz')}
              address={t('contacts.officeAddress.1')}
              phone="+998 90 754 77 00 / +998 91 293 32 00"
              email="-" />
            <Card
              label={t('contacts.labelUz')}
              address={t('contacts.officeAddress.2')}
              phone="+998 95 412 00 02"
              email="-" />
            <Card
              label={t('contacts.labelRU')}
              address={t('contacts.warehouseAddress.3')}
              phone="+7 968 031 51 77"
              email="-" />
          </div>
        </ContainerStyled>
        <ContainerStyled>
          <LabelStyled>{t('contacts.warehouse')}</LabelStyled>
          <div>
            <Card
              label={t('contacts.labelTRWarehouse')}
              address={t('contacts.warehouseAddress.1')}
              phone="-"
              email="-" />
            <Card
              label={t('contacts.labelTRWarehouse')}
              address={t('contacts.warehouseAddress.2')}
              phone="-"
              email="-" />
            <Card
              label={t('contacts.labelRUWarehouse')}
              address={t('contacts.warehouseAddress.3')}
              phone="+7 968 031 51 77"
              email="-" />
          </div>
        </ContainerStyled>
      </WrapAddressStyled>
      <ContentStyled isTablet={isTablet}>
        <Offer noBackgroundImage/>
        <IconsStyled>
          <IconContainerStyled href="https://instagram.com/bosphoruslogistic?igshid=YmMyMTA2M2Y=" target="_blank">
            <InstagramIcon/>
          </IconContainerStyled>
          <IconContainerStyled href="https://tr.linkedin.com/company/bosphorus-acentelik-d%C4%B1%C5%9F-tic-ltd-%C5%9Fti?trk=public_post_share-update_actor-text" target="_blank">
            <LinkedInIcon/>
          </IconContainerStyled>
          <IconContainerStyled href="https://wa.me/905347749075" target="_blank">
            <WhatsappDesktopIcon/>
          </IconContainerStyled>
        </IconsStyled>
      </ContentStyled>
    </WrapperStyled>
  )
}

export default memo(Contacts)
