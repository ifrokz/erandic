import Navbar from '../../components/Navbar';
import Footer from '../../components/footer';
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
