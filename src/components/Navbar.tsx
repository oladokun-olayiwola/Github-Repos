import { Component } from 'solid-js';
import { NavLink } from "@solidjs/router"

const Navbar: Component = () => {
    return (
      // <main class="mt-4 ms-4 margin start-50 position-absolute translate-middle " >
      <nav class='my-5 ms-3 text-center bg-light '>
        <NavLink
          href="/"
          activeClass="btn-success"
          end
          class="btn btn-primary me-4"
        >
          Home
        </NavLink>
        <NavLink
          href="/saved-repo"
          activeClass="btn-success"
          class="btn btn-primary"
        >
          Saved Repos
        </NavLink>
      </nav>
    );
}

export default Navbar;