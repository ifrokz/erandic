import '../components/styles/style.scss';
import {connect} from 'react-redux'
import {startClock, serverRenderClock} from '../redux/store'

const isClientOrServer = () => {
  return (typeof window !== 'undefined' && window.document) ? 'client' : 'server';
};

// const Index = ({userAgent, params, query}) => {
//   console.log(params);return(
//   <div>
//     <h1>Hello world from Next JS {isClientOrServer()}</h1>
//     <div>
//       <p>{userAgent}</p>
//       <p>{JSON.stringify(params)}</p>
//       <p>{JSON.stringify(query)}</p>
//     </div>
//   </div>
// )};

// Index.getInitialProps = async ({req}) => {
//   const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
//   console.log('body:', req.query, req.query, req.params);
//   return { userAgent, params: req.params, query: req.query }
// }

class Index extends React.Component {
  static getInitialProps = async ({reduxStore, req}) => {
    const isServer = !!req
    reduxStore.dispatch(serverRenderClock(isServer))

    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
    console.log('body:', req.query, req.query, req.params);
    return { userAgent, params: req.params, query: req.query }
  }

  componentDidMount () {
    const {dispatch} = this.props
    this.timer = startClock(dispatch)
  }

  componentWillUnmount () {
    clearInterval(this.timer)
  }

  render = () => (
    <div>
      <h1>Hello world from Next JS {isClientOrServer()}</h1>
      <div>
        <p>{`userAgent => ${this.props.userAgent}`}</p>
        <p>{`Params => ${JSON.stringify(this.props.params)}`}</p>
        <p>{`Query => ${JSON.stringify(this.props.query)}`}</p>
        <p>{this.props.lastUpdate}</p>
      </div>
    </div>
  );
};
function mapStateToProps (state) {
  console.log(state)
  const {lastUpdate} = state
  return {lastUpdate}
}
export default connect(mapStateToProps)(Index)
// export  default Index;
