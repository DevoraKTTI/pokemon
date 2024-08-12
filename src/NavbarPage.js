import {Navbar, Container, Nav} from 'react-bootstrap';
function NavbarPage(){
  return(
   <div>
    <ul class="nav justify-content-center">
      <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="/" >Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="https://shop.scholastic.com/parent-ecommerce/series-and-characters/magic-school-bus.html">The Magic School Bus </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="https://sites.prh.com/magic-tree-house#">The Magic Treehouse</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" aria-disabled="true">Disabled</a>
      </li>
    </ul>
  </div>
  )
}

export default NavbarPage