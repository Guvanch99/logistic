import { FC } from 'react'
import { IconWrapper } from './base/IconWrapper'
import { ReactComponent as Icon } from './svg/whatsappDesktop.svg'
import { TIconProps } from './types'

export const WhatsappDesktopIcon: FC<TIconProps> = (props) => (
  <IconWrapper {...props}>
    <Icon />
  </IconWrapper>
)
