import '../styles/main.scss';
import Header from '@/components/blocks/Header';
import Footer from '@/components/blocks/Footer';
import FormModal from '@/components/modals/FormModal';
import GalleryModal from '@/components/modals/GalleryModal';
import { ToastContainer } from 'react-toastify';

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="ru">
            <head>
                <meta name="theme-color" content="#f3e7dd" />
                <meta name="robots" content="noindex, nofollow" />
                {/* Удалить */}
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=0" />
            </head>
            <body>
                <Header />
                {children}
                <Footer />
                <FormModal />
                <GalleryModal />
                <ToastContainer
                    position="top-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick={false}
                    rtl={false}
                   
                    draggable
                    pauseOnHover
                    theme="colored"
                    
                />
            </body>
        </html>
    );
}
