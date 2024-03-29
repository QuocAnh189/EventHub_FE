import { ReactNode, ReactElement } from 'react'

export interface LayoutProps {
  children: ReactNode
}

export interface NextPageWithLayout {
  // eslint-disable-next-line no-unused-vars
  Layout?: (props: LayoutProps) => ReactElement
}
