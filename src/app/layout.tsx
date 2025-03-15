import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from 'react-hot-toast';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Submit form to contact us',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>
        <Toaster
          position='top-center'
          toastOptions={{
            duration: 3000, // Keep toast open for 3 seconds
            style: {
                fontSize: '1.2rem',
                padding: '16px 20px',
                borderRadius: '8px',
            },
          }}
         />
        {children}
      </body>
    </html>
  );
}
