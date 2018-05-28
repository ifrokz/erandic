import '../components/styles/style.scss';

const isClientOrServer = () => {
  return (typeof window !== 'undefined' && window.document) ? 'client' : 'server';
};

const Index = ({userAgent, params, query}) => (
  <div>
    <h1>Hello world from Next JS {isClientOrServer()}</h1>
    <div>
      <p>{userAgent}</p>
      <p>{JSON.stringify(params)}</p>
      <p>{JSON.stringify(query)}</p>
    </div>
  </div>
);

Index.getInitialProps = async ({req}) => {
  const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
  console.log('body:', req.query, req.query, req.params);
  return { userAgent, params: req.params, query: req.query }
}

export  default Index;
