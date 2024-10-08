import type {
  NextComponentType,
  NextLayoutComponentType,
  NextPageContext,
} from 'next'
import type { AppProps } from 'next/app'

declare module 'next' {
  type NextLayoutComponentType<> = NextComponentType<
    NextPageContext,
    unknown,
    P
  > & {
    getLayout?: (page: ReactNode) => ReactNode
  }
}

declare module 'next/app' {
  type AppLayoutProps<> = AppProps & {
    Component: NextLayoutComponentType
  }
}
declare module '*.tgs' {
  const value: string
  export default value
}
