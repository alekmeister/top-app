import type { Metadata } from 'next';
import localFont from 'next/font/local';
import '../src/app/styles/globals.css';
import '../src/app/styles/reset.css';
import React, { ReactNode } from 'react';
import { Footer } from 'widgets/Footer';
import { Header } from 'widgets/Header';
import { Sidebar } from 'widgets/Sidebar';
import styles from './appLayout.module.css';

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
      <body className={styles.main_page}>
        <Header className={styles.header} />
        <Sidebar className={styles.sidebar} />
        <div className={styles.body}> {children}</div>
        <Footer className={styles.footer} />
      </body>
    </html>
  );
}
