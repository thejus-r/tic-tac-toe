import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body className='bg-stone-900 h-screen text-stone-100 flex flex-col justify-center items-center'>{children}</body>
    </html>
  )
}
