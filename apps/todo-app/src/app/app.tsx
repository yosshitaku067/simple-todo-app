import React from 'react';
import { Route, Routes } from 'react-router-dom';
import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  ApolloProvider,
} from '@apollo/client';

import Title from './components/heading/title.component';
import { ModalProvider } from './components/modal/modal.context';
import ProjectsPage from './pages/projects/projects.page';

import './styles.css';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: createHttpLink({
    uri: '/api/graphql',
    credentials: 'include',
  }),
});

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <ModalProvider>
        <nav className="sticky top-0 z-30  bg-teal-500 p-6">
          <div className="container mx-auto flex flex-wrap items-center justify-between">
            <div className=" mr-6 flex flex-shrink-0 items-center text-white">
              <Title className="text-xl font-semibold tracking-tight">
                {"One Man's Todo"}
              </Title>
            </div>
            <div className="block w-full flex-grow lg:flex lg:w-auto lg:items-center lg:justify-end">
              <div>
                <a
                  href="#"
                  className="mt-4 mr-4 inline-block rounded border border-white px-4 py-2 text-sm leading-none text-white hover:border-transparent hover:bg-white hover:text-teal-500 lg:mt-0"
                >
                  Export CSV
                </a>
                <a
                  href="#"
                  className="mt-4 inline-block rounded border border-white px-4 py-2 text-sm leading-none text-white hover:border-transparent hover:bg-white hover:text-teal-500 lg:mt-0"
                >
                  Export Text
                </a>
              </div>
            </div>
          </div>
        </nav>
        <main className="container mx-auto">
          <Routes>
            <Route path="/" element={<ProjectsPage />} />
          </Routes>
        </main>
      </ModalProvider>
    </ApolloProvider>
  );
};

export default App;
