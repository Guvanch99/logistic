import { memo, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import styled, { css } from 'styled-components/macro'
import { NavLink, Outlet } from 'react-router-dom'
import { useMedia } from 'react-use'
import { flex, fontFamily } from '../../../../core/styles/mixins'

const WrapperStyled = styled.div<{isTablet: boolean}>`
  padding: 20px;
  width: 100%;
  height: 100%;
  ${flex({ justify: 'flex-start', align: 'flex-start' })};
  overflow: auto;
  ${({ isTablet }) => isTablet && css`
    flex-direction: column;
    justify-content: center;
    align-content: center;
  `}

`
const ContentStyled = styled.div<{isTablet: boolean}>`
  width: 100%;
  ${({ isTablet }) => isTablet && css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
  `}
  & > div{
    width: 100%;
    ${flex({ justify: 'flex-start', align: 'flex-start' })};
    flex-direction: column;
  }
`
const NavigationContainerStyled = styled.ul<{isTablet: boolean}>`
  width:${({ isTablet }) => (isTablet ? '100%' : '300px')} ;
  ${flex({ justify: 'flex-start', align: 'flex-start' })};
  flex-direction: column;
  ${fontFamily()};
  border-radius: 10px;
  box-shadow: 5px 2px 26px -2px rgba(0,0,0,0.75);
  -webkit-box-shadow: 5px 2px 26px -2px rgba(0,0,0,0.75);
  -moz-box-shadow: 5px 2px 26px -2px rgba(0,0,0,0.75);
  margin:20px 40px 20px 0px

`

const MenuItemStyled = styled.li`
  margin: 10px;
  padding: 10px;
  border-bottom: 1px solid #eee;
`

const CustomNavLink = styled(NavLink)`
  &&{
    ${fontFamily()}
    font-size: 16px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.darkBlack};
    text-transform:uppercase;
    :hover{
      color: ${({ theme }) => theme.colors.blue400}
    }
  }
`

const navigationTransport = [
  {
    url: '/transporting',
    label: 'transportation.label'
  },
  {
    url: '/transporting/airways',
    label: 'transportmenu.airways'
  },
  {
    url: '/transporting/highway',
    label: 'transportmenu.highway'
  },
  {
    url: '/transporting/railway',
    label: 'transportmenu.railway'
  },
  {
    url: '/transporting/maritime',
    label: 'transportmenu.maritime'
  },
  {
    url: '/transporting/multimodal',
    label: 'main.servicesOption.multiModal'
  },
  {
    url: '/transporting/partial',
    label: 'main.servicesOption.partialShipping'
  },
  {
    url: '/transporting/specialShipping',
    label: 'main.servicesOption.specialShipping'
  }
]
const Transporting = () => {
  const { t } = useTranslation('translation')
  const ref = useRef<HTMLDivElement | null>(null)
  const isTablet = useMedia('(max-width: 700px)')
  const handleClick = () => {
    if (ref && ref.current) {
      ref.current?.scrollIntoView()
    }
  }
  return (
    <WrapperStyled isTablet={isTablet}>
      <NavigationContainerStyled isTablet={isTablet}>
        {
          navigationTransport.map(({ url, label }) => (
            <MenuItemStyled key={url}>
              <CustomNavLink to={url} onClick={handleClick}>
                {t(label)}
              </CustomNavLink>
            </MenuItemStyled>
          ))
        }
      </NavigationContainerStyled>
      <ContentStyled isTablet={isTablet} ref={ref}>
        <Outlet/>
      </ContentStyled>
    </WrapperStyled>
  )
}

export default memo(Transporting)
