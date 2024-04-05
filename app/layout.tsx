import type { Metadata } from "next";
import "../styles/globals.css";


export const metadata: Metadata = {
  title: "World Billionaires",
  description: "A list of the world's billionaires",
};

export default function Layout({ children }: {children: React.ReactNode}) {
  return (
    <html lang='en'>
      <body>
        {children}
      </body>
    </html>
  )
}
