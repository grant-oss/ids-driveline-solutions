import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'Isuzu Driveline Solutions | Truck Gearbox Specialists',
      },
      {
        name: 'description',
        content:
          "South Africa's specialists in Isuzu truck gearbox repairs, rebuilds, parts, differentials and fleet support.",
      },
      {
        name: 'theme-color',
        content: '#080a0c',
      },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-ZA">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  )
}
