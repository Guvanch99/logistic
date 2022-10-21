import styled, { css } from 'styled-components/macro'
import { useEffect } from 'react'
import { useMedia } from 'react-use'
import { MenuItem, Select } from '@mui/material'
import { FlagIcon } from 'react-flag-kit'
import { NavLink } from 'react-router-dom'
import Navigation from './Navigation'
import { flex } from '../../../core/styles/mixins'
import logo from '../../../core/assets/logo.png'
import { useSidebarContext } from '../state/useSidebar'
import { HamburgerIcon } from '../../../core/icons/HamburgerIcon'
import { TLanguage, useLanguageContext } from '../state/useLanguage'
import { RussianFlag } from '../../../core/icons/RussianFlag'

const WrapperStyled = styled.div<{isTablet: boolean}>`
  ${flex({ justify: 'space-between', align: 'center' })};
  width: 100%;
  padding: 8px 20px;
  box-shadow: 0 9px 8px 0 rgba(34, 60, 80, 0.2);
  &>div{
    ${flex({ justify: 'space-between', align: 'center' })};
  }
  ${({ isTablet }) => isTablet && css`
  justify-content: space-evenly;
  `}
`

const CustomMenuItemStyled = styled(MenuItem)`
&&{
  ${flex(({ justify: 'center', align: 'center' }))}
  
  & >div{
    margin-left: 4px;
  }
}
`
const LogoStyled = styled.img`
  width: 120px;
  object-fit: cover;
`
const IconContainerStyled = styled.div`
  cursor: pointer;
`

const CustomSelectStyled = styled(Select)`
&&{
  
  img{
    display: none;
  }
  span{
    display: none;
  }
}
`
const Header = () => {
  const { language, setLanguage } = useLanguageContext()
  const { setIsSidebar, isSidebar } = useSidebarContext()
  const isTablet = useMedia('(max-width: 700px)')
  useEffect(() => {
    if (!isTablet) {
      setIsSidebar(true)
    } else {
      setIsSidebar(false)
    }
  }, [isTablet])
  return (
    <WrapperStyled isTablet={isTablet}>
      <NavLink to="/">
        <LogoStyled src={logo} alt="logo"/>
      </NavLink>
      {isTablet && (
        <IconContainerStyled onClick={() => setIsSidebar(!isSidebar)}>
          <HamburgerIcon
            width={30}
            height={30}
          />
        </IconContainerStyled>
      )}
      <div>
        {isSidebar && <Navigation/>}
        <CustomSelectStyled
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={language}
          style={{
            height: '40px'
          }}
          onChange={(event) => setLanguage(event.target.value as TLanguage)}
        >
          <CustomMenuItemStyled value="en">
            <FlagIcon code="US" size={14}/>
            <div>
              en
            </div>
          </CustomMenuItemStyled>
          <CustomMenuItemStyled value="ru">
            <RussianFlag width={14} height={14}/>
            <div>
              ru
            </div>
          </CustomMenuItemStyled>
          <CustomMenuItemStyled value="tr">
            <FlagIcon code="TR" size={14}/>
            <div>
              tr
            </div>
          </CustomMenuItemStyled>
        </CustomSelectStyled>
      </div>
    </WrapperStyled>
  )
}

export default Header
