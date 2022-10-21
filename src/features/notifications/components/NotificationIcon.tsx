import styled from 'styled-components/macro'
import { CloseIcon } from '../../../core/icons/CloseIcon'

const IconWrapper = styled.div`
color: ${({ theme }) => theme.colors.darkBlack};
`

const NotificationIcon = () => (
  <IconWrapper>
    <CloseIcon width={20} height={20}/>
  </IconWrapper>
)
export default NotificationIcon
