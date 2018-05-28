import Navbar from '../components/nav';

import './styles/style.scss';

const isClientOrServer = () => {
  return (typeof window !== 'undefined' && window.document) ? 'client' : 'server';
};

const Index = () => (
  <section>
    <Navbar/>
    <h1>Hello world from Next JS {isClientOrServer()}</h1>
  </section>
);

export  default Index;
