import {connect} from 'react-redux';

import Link from 'next/link';


class Footer extends React.Component {
  render = () => {
    return (
      <footer className='footer'>
        <div className='container'>
          <span className='text-muted'>Place sticky footer content here.</span>
        </div>

        <style jsx>
        {`
          /* Sticky footer styles
          -------------------------------------------------- */
          .footer {
            position: absolute;
            bottom: 0;
            width: 100%;
            height: 100px; /* Set the fixed height of the footer here */
            line-height: 100px; /* Vertically center the text there */
            background-color: #f5f5f5;
          }
        `}
        </style>
      </footer>
    );
  };
};

const mapStateToProps = (state) => {
  return {
    language: state.language
  };
};

export default connect(mapStateToProps)(Footer);
