import Navbar from '../components/navbar/navbar.js';
import Footer from '../components/footer/footer';
import PropTypes from 'prop-types';

const Page = (props) => {
  return (
    <div>
      <Navbar/>
        {props.children}
      <Footer/>
    </div>
  );
};

Page.propTypes = {
  children: PropTypes.array.isRequired
}

export default Page;
