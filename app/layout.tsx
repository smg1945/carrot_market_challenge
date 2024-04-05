import "../styles/globals.css";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: {
    template: "%s | World Billionaires",
    default: "World Billionaires"
  },
  description: "Information about the world's billionaires.",
}

export default function Layout({ children }: {children: React.ReactNode}) {
  return (
    <html lang='en'>
      <body>
        {children}
      </body>
    </html>
  )
}
