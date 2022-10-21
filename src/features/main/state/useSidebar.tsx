import constate from 'constate'
import { useState } from 'react'

const useSidebar = () => {
  const [isSidebar, setIsSidebar] = useState(false)

  return {
    isSidebar,
    setIsSidebar
  }
}
export const [SidebarProvider, useSidebarContext] = constate(useSidebar)
