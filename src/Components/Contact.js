import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div>
      <div
        className="ui raised very padded text container segment"
        style={{ marginTop: '80px' }}
      >
        <Link to="/alex" className="ui header">
          Alex
        </Link>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          eaque error illo voluptatibus harum vel dolore quas, optio neque
          perspiciatis. Totam iusto esse quasi tempore ad et quam, reprehenderit
          asperiores.
        </p>
      </div>
      <div
        className="ui raised very padded text container segment"
        style={{ marginTop: '80px' }}
      >
        <Link to="/samantha" className="ui header">
          Samantha
        </Link>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          eaque error illo voluptatibus harum vel dolore quas, optio neque
          perspiciatis. Totam iusto esse quasi tempore ad et quam, reprehenderit
          asperiores.
        </p>
      </div>
    </div>
  );
};

export default Contact;
