import React from 'react';
import {Link} from 'react-scroll'

class Nav extends React.Component {
    render() {
  return (
   <div>
<h2>This is the nav page</h2>
<ul>
<li className="listPadding">
    <Link onClick={this.handleScroll}
        to="home"
        activeClass="active"
        spy={true} 
        smooth={true}
    >
        Home
    </Link>
  </li>

  <li className="listPadding">
    <Link onClick={this.handleScroll}
        to="resume"
        activeClass="active"
        spy={true} 
        smooth={true}
    >
        resume
    </Link>
  </li>
</ul>


   </div>

  );
  }
}

export default Nav;