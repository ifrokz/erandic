import Navbar from '../../components/Navbar';
import Footer from '../../components/footer';

const  Page = (props) => {
  console.log(props);
  return (
    <div>
      <Navbar/>
      {props.children}
      <Footer/>
    </div>
  );
};

export default Page;
