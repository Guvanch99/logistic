import { memo } from 'react'
import styled from 'styled-components/macro'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import footerImage from '../../../core/assets/footerImage.jpeg'
import logo from '../../../core/assets/logo.png'
import { InstagramIcon } from '../../../core/icons/InstagramIcon'
import { LinkedInIcon } from '../../../core/icons/LinkedInIcon'
import { flex, fontFamily } from '../../../core/styles/mixins'
import { WhatsappDesktopIcon } from '../../../core/icons/WhatsappDesktopIcon'
import agencyImage from '../../../core/assets/agency.webp'

const WrapperStyled = styled.div`
  width: 100%;
  height: 100%;
`

const LogoStyled = styled.img`
  width: 120px;
  height: 120px;
  object-fit: contain;
`

const FooterStyled = styled.footer`
  padding:20px;
  ${flex({ justify: 'center', align: 'center' })};
  flex-direction: column;
  width: 100%;
  object-fit: contain;
  background:linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${footerImage}) top center no-repeat;
  background-size: 100% 100%;

`

const HeaderStyled = styled.div`
  margin-bottom: 20px;
`

const BodyStyled = styled.div`
  ${flex({ justify: 'space-evenly', align: 'flex-start' })};
  flex-wrap: wrap;
  width: 100%;
`

const BottomStyled = styled.div`
${flex({ justify: 'center', align: 'center' })};
`

const IconContainerStyled = styled.div`
  color: ${({ theme }) => theme.colors.white};
  margin: 0 8px;
  cursor: pointer;
`

const ContentStyled = styled.div`
  ${flex({ justify: 'center', align: 'center' })};
  flex-direction: column;
  margin: 20px;

  & > div {
    ${fontFamily()}
    color: ${({ theme }) => theme.colors.white};
    font-weight: 600;
    font-size: 22px;
    margin-bottom: 24px;
    text-align: center;
    text-transform:uppercase;
    
    :after {
      width: 40px;
      content: "";
      height: 4px;
      background: #fff;
      margin: 15px auto 0;
      display: block;
    }
  }
`

const CustomNavigation = styled(NavLink)`
&&{
  ${fontFamily()}
  padding: 5px 0;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
  transition: all 150ms ease-out;
  
  :hover{
    color: ${({ theme }) => theme.colors.blue500};
  }
}
`

const ContainerStyled = styled.article`
  ${fontFamily()}
  color: ${({ theme }) => theme.colors.white};
  font-weight: 600;
  font-size: 14px;
  margin-bottom: 24px;
  text-align: center;
  max-width: 200px;
  &>div{
    margin: 10px 0;
  }
`

const FooterBottomTextStyled = styled.div`
  ${fontFamily()};
  margin-top: 10px;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 600;
  font-size: 14px;
  margin-bottom: 24px;
  text-align: center;
`

const IconContainerNavStyled = styled.a`
  color: ${({ theme }) => theme.colors.white};
  margin: 0 8px;
  cursor: pointer;
`

const options = [
  {
    id: 1,
    label: 'main.servicesOption.transporting',
    url: 'transporting'
  },
  {
    id: 2,
    label: 'main.servicesOption.customs',
    url: 'cleaning'
  },
  {
    id: 3,
    label: 'main.servicesOption.warehouse',
    url: 'warehouse'
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
    url: 'consultancy'
  },
  {
    id: 6,
    label: 'main.servicesOption.insurance',
    url: 'insurance'
  }
]

const Footer = () => {
  const { t } = useTranslation('translation')
  return (
    <WrapperStyled>
      <FooterStyled>
        <HeaderStyled>
          <LogoStyled src={logo} alt="logo"/>
        </HeaderStyled>
        <BodyStyled>
          <ContentStyled>
            <div>BOSPHORUS Logistcs</div>
            <CustomNavigation to="/">
              {t('main.home')}
            </CustomNavigation>
            <CustomNavigation to="about">
              {t('main.about')}
            </CustomNavigation>
            <CustomNavigation to="blog">
              {t('main.blog')}
            </CustomNavigation>
            <CustomNavigation to="contact">
              {t('main.contacts')}
            </CustomNavigation>
          </ContentStyled>
          <ContentStyled>
            <div>{t('main.services')}</div>
            {
              options.map(({ label, url }) => (
                <CustomNavigation to={url}>
                  {t(label)}
                </CustomNavigation>
              ))
            }
          </ContentStyled>
          <ContentStyled>
            <div>{t('footer.contactInfo')}</div>
            <ContainerStyled>
              <div>{t('footer.address')}</div>
              <IconContainerStyled/>
              {t('footer.addressInfo')}
            </ContainerStyled>
            <ContainerStyled>
              <div>
                <div>{t('footer.timeWork')}</div>
              </div>
              <div>
                <div>{t('footer.timeDaily')}</div>
              </div>
              <div>
                <div>{t('footer.timeOff')}</div>
              </div>
            </ContainerStyled>
            <ContainerStyled>
              <div>{t('footer.phone')}</div>
              <IconContainerStyled/>
              +90 534 774 90 75
            </ContainerStyled>
            <ContainerStyled>
              <div>{t('footer.email')}</div>
              <IconContainerStyled/>
              info@bosphoruslogistic.com
            </ContainerStyled>
          </ContentStyled>
        </BodyStyled>
        <BottomStyled>
          <IconContainerNavStyled href="https://wa.me/905347749075" target="_blank">
            <WhatsappDesktopIcon/>
          </IconContainerNavStyled>
          <IconContainerNavStyled href="https://instagram.com/bosphoruslogistic?igshid=YmMyMTA2M2Y=" target="_blank">
            <InstagramIcon/>
          </IconContainerNavStyled>
          <IconContainerNavStyled href="https://tr.linkedin.com/company/bosphorus-acentelik-d%C4%B1%C5%9F-tic-ltd-%C5%9Fti?trk=public_post_share-update_actor-text" target="_blank">
            <LinkedInIcon/>
          </IconContainerNavStyled>
        </BottomStyled>
        <FooterBottomTextStyled>
          &#169;
          {' '}
          {t('footerCopyright')}
        </FooterBottomTextStyled>
      </FooterStyled>
    </WrapperStyled>
  )
}
export default memo(Footer)
