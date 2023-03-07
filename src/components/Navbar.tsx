import { Component } from 'solid-js';
import { NavLink } from "@solidjs/router"

const Navbar: Component = () => {
    return (
      <main>
        <NavLink href="/" activeClass='btn-success' end class="btn btn-primary mt-8 ml-5">
          Home
        </NavLink>
        <NavLink href="/saved-repo" activeClass='btn-success' class="btn btn-primary" >
          Saved Repos
        </NavLink>
      </main>
    );
}

export default Navbar;