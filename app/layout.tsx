import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import './reset.css';
import type { ReactNode } from 'react';

const notoSans = localFont({
  variable: '--font-noto-sans',
  src: [
    {
      path: './fonts/NotoSans-Light.ttf',
      weight: '300',
    },
    {
      path: './fonts/NotoSans-Regular.ttf',
      weight: '400',
    },
    {
      path: './fonts/NotoSans-Medium.ttf',
      weight: '500',
    },
    {
      path: './fonts/NotoSans-SemiBold.ttf',
      weight: '600',
    },
    {
      path: './fonts/NotoSans-Bold.ttf',
      weight: '700',
    },
  ],
});

export const metadata: Metadata = {
  title: 'Top app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      lang='en'
      className={notoSans.className}
    >
      <body>{children}</body>
    </html>
  );
}
