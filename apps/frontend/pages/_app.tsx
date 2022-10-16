import { AppProps } from 'next/app';
import Head from 'next/head';
import Title from '../components/heading/title.component';
import { ModalProvider } from '../components/modal/modal.context';
import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <ModalProvider>
      <Head>
        <title>Welcome to frontend!</title>
      </Head>
      <nav className="sticky top-0 z-30  bg-teal-500 p-6">
        <div className="container mx-auto flex flex-wrap items-center justify-between">
          <div className=" mr-6 flex flex-shrink-0 items-center text-white">
            <Title className="text-xl font-semibold tracking-tight">
              Todos
            </Title>
          </div>
          <div className="block w-full flex-grow lg:flex lg:w-auto lg:items-center lg:justify-end">
            <div>
              <a
                href="#"
                className="mt-4 inline-block rounded border border-white px-4 py-2 text-sm leading-none text-white hover:border-transparent hover:bg-white hover:text-teal-500 lg:mt-0"
              >
                Export CSV
              </a>
            </div>
          </div>
        </div>
      </nav>
      <main className="container mx-auto">
        <Component {...pageProps} />
      </main>
    </ModalProvider>
  );
}

export default CustomApp;
