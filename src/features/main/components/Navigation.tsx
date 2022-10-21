import styled, { css } from 'styled-components/macro'
import { NavLink, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useMedia } from 'react-use'
import { useTranslation } from 'react-i18next'
import { flex, fontFamily } from '../../../core/styles/mixins'
import logo from '../../../core/assets/logo.png'
import { CloseIcon } from '../../../core/icons/CloseIcon'
import { useSidebarContext } from '../state/useSidebar'

const WrapperStyled = styled.div<{isTablet: boolean}>`
  ${flex({ justify: 'flex-start', align: 'center' })};
  
  ${({ isTablet }) => isTablet && css`
    ${flex({ justify: 'flex-start', align: 'center' })};
    flex-direction: column;
    width: 100%;
    height: 100%;
    z-index: 2;
    position: absolute;
    background: ${({ theme }) => theme.colors.white};
    top: 0;
    left: 0;
  `}
`
const CustomNavigationStyled = styled(NavLink)`
&&{
  ${fontFamily()}
  font-size: 16px;
  font-weight: 600;
  padding: 10px;
  color: ${({ theme }) => theme.colors.darkBlack};
  text-decoration: none;
  text-shadow: 0 0 0 #333;
  transition: all 250ms ease-out;
  text-align: center;
  border-radius: 10px;
  margin: 0 10px;
  
  :hover{
    background: ${({ theme }) => theme.colors.blue400}
  }
}
`
const MenuNavigation = styled.ul`
  ${fontFamily()};
  position: relative;
  font-size: 16px;
  font-weight: 600;
  padding: 10px;
  color: ${({ theme }) => theme.colors.darkBlack};
  text-decoration: none;
  text-shadow: 0 0 0 #333;
  transition: all 250ms ease-out;
  text-align: center;
  border-radius: 10px;
  cursor: pointer;
  margin: 0 10px;

  :hover{
    background: ${({ theme }) => theme.colors.blue400}
  }
  
  & >div{
    position: absolute;
    background: ${({ theme }) => theme.colors.white};
    left: 0;
    z-index: 2;
    top:39px;
    height: 300px;
    width: 240px;
    border-radius: 6px;
    border: 0.4px solid ${({ theme }) => theme.colors.grey600a6} ;
  }
`

const MenuItemStyled = styled.li`
  ${fontFamily()};
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.darkBlack};
  text-decoration: none;
  padding: 10px;
  text-shadow: 0 0 0 #333;
  transition: all 250ms ease-out;
  text-align: start;
  border-radius: 10px;
  margin-top:8px;

  :hover{
    background: ${({ theme }) => theme.colors.blue400}
  }
`

const LogoStyled = styled.img`
  width: 120px;
  object-fit: cover;
  margin: 100px 0;
`

const IconContainerStyled = styled.div`
  position: absolute;
  right: 20px;
  top: 20px;
  cursor: pointer;
  :hover{
    color: ${({ theme }) => theme.colors.red};
  }
`

const options = [
  {
    label: 'main.servicesOption.transporting',
    url: 'transporting'
  },
  {
    label: 'main.servicesOption.warehouse',
    url: 'warehouse'
  },
  {
    label: 'main.servicesOption.insurance',
    url: 'insurance'
  },
  {
    label: 'main.servicesOption.agency',
    url: 'agency'
  },
  {
    label: 'main.servicesOption.consultancy',
    url: 'consultancy'
  },
  {
    label: 'main.servicesOption.customs',
    url: 'cleaning'
  }
]
const Navigation = () => {
  const isTablet = useMedia('(max-width: 700px)')
  const { setIsSidebar } = useSidebarContext()
  const [isServices, setIsServices] = useState(false)
  const [isMenuDropdown, setIsMenuDropDown] = useState(false)
  const navigate = useNavigate()
  const { t } = useTranslation('translation')
  const handleNavigate = (url: string) => {
    navigate(`/${url}`)
    if (isTablet) {
      setIsSidebar(false)
    }
  }
  return (
    <WrapperStyled isTablet={isTablet}>
      {isTablet && (
        <IconContainerStyled onClick={() => setIsSidebar(false)}>
          <CloseIcon width={30} height={30}/>
        </IconContainerStyled>
      )}
      {isTablet && <LogoStyled alt="logo" src={logo}/>}
      <CustomNavigationStyled
        to="/"
        onClick={() => {
          if (isTablet) {
            setIsSidebar(false)
          }
        }}>
        {t('main.home')}
      </CustomNavigationStyled>

      <CustomNavigationStyled
        to="about"
        onClick={() => {
          if (isTablet) {
            setIsSidebar(false)
          }
        }}>
        {t('main.about')}
      </CustomNavigationStyled>
      <MenuNavigation
        onMouseEnter={() => setIsServices(true)}
        onMouseLeave={() => setIsServices(false)}
      >
        {t('main.services')}
        {(isServices || isMenuDropdown) && (
          <div
            onMouseEnter={() => setIsMenuDropDown(true)}
            onMouseLeave={() => setIsMenuDropDown(false)}
          >
            {
              options.map(({ label, url }) => (
                <MenuItemStyled
                  onClick={() => handleNavigate(url)}
                >
                  {t(label)}
                </MenuItemStyled>
              ))
            }
          </div>
        )}
      </MenuNavigation>
      <CustomNavigationStyled
        to="/blog"
        onClick={() => {
          if (isTablet) {
            setIsSidebar(false)
          }
        }}>
        {t('main.blog')}
      </CustomNavigationStyled>
      <CustomNavigationStyled
        to="/contacts"
        onClick={() => {
          if (isTablet) {
            setIsSidebar(false)
          }
        }}>
        {t('main.contacts')}
      </CustomNavigationStyled>
    </WrapperStyled>
  )
}

export default Navigation
