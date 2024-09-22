import { Navbar } from '@/3_widgets/navbar'

// eslint-disable-next-line react/function-component-definition
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      {children}
      <div className='navbar'>
        {' '}
        <Navbar />
      </div>
    </>
  )
}
