import "./globals.css";
import Provider from '@/components/Provider'

export const metadata = {
  title: "Worth Pink salt",
  description: "Generated by Zubair shehzad ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body>
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  );
}