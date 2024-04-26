import type { Metadata } from 'next';
import '@/styles/globals.css';
import { Rubik } from 'next/font/google';
const rubik = Rubik({ subsets: ['latin', 'arabic', 'cyrillic', 'hebrew', 'cyrillic-ext'], variable: '--font-rubik' });
import StyledComponentsRegistry from '@/libs/AntdRegistry';
import { Providers } from '@/redux/providers';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { open_sans } from '@/utils/fontUtils';
import Provider from './Provider';

export const metadata: Metadata = {
  title: 'Bella Onojie',
  description: 'QR Ordering App',
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        url: '/assets/icons/mini-logo.svg',
        href: '/assets/icons/mini-logo.svg',
      },
    ],
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${rubik.className} ${rubik.variable} ${open_sans.variable} bg-white-100 h-screen overflow-hidden`}
      >
        <Provider>
          <StyledComponentsRegistry>
            <ToastContainer />
            <Providers>{children}</Providers>
          </StyledComponentsRegistry>
        </Provider>
      </body>
    </html>
  );
}
