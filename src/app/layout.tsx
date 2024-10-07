import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Stay with me',
  description: '1인가구 맞춤형 주거 구독, 스테이위드미',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="kr">
      <body>{children}</body>
    </html>
  );
}
