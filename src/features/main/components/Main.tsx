import styled from 'styled-components/macro'
import { Outlet } from 'react-router-dom'
import { useMedia } from 'react-use'
import Header from './Header'
import Footer from './Footer'
import { flex } from '../../../core/styles/mixins'
import { SidebarProvider, useSidebarContext } from '../state/useSidebar'
import { WhatsappIcon } from '../../../core/icons/WhatsappIcon'
import { LanguageProvider } from '../state/useLanguage'

const WrapperStyled = styled.div<{isOverflow: boolean}>`
  ${flex({})};
  flex-direction: column;
  width: 100%;
  height: 100%;
  position: relative;
  overflow: ${({ isOverflow }) => (isOverflow ? 'hidden' : 'auto')};
`
const OutletWrapper = styled.div`
  flex: 1 0 auto;
`
const IconContainer = styled.a`
  cursor: pointer;
  position: absolute;
  right: 20px;
  bottom: 20px;
  animation: scaleKeyframe 2s linear infinite;
  transform: scale(1.50);
  @keyframes scaleKeyframe {
    from {
      transform: scale(1);
    }
    to {
      transform: rotate(2);
    }
  }

`
const Main = () => {
  const { isSidebar } = useSidebarContext()
  const isTablet = useMedia('(max-width: 700px)')
  return (
    <>
      <WrapperStyled isOverflow={isSidebar && isTablet}>
        <Header/>
        <OutletWrapper>
          <Outlet/>
        </OutletWrapper>
        <Footer/>
      </WrapperStyled>
      {isTablet && (
        <IconContainer target="_blank" href="https://wa.me/905347749075">
          <WhatsappIcon/>
        </IconContainer>
      )}
    </>
  )
}

export default () => (
  <SidebarProvider>
    <LanguageProvider>
      <Main/>
    </LanguageProvider>
  </SidebarProvider>
)
