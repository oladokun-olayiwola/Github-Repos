import { Component, createEffect, createSignal } from "solid-js";
import { Route, Routes } from "@solidjs/router";
import 'bootstrap/dist/css/bootstrap.css';
import { Home, savedRepo, Error } from "./pages";
import Navbar from "./components/Navbar";
import axios from "axios";
import { Repo } from "./components/RepoCard";

const [username, setUsername] = createSignal("oladokun-olayiwola")
const [repos, setRepos] = createSignal([])
// const [savedRepos, setsavedRepos] = createSignal([Repo])


const App: Component = () => {
  createEffect( async () => {
    const result = await axios.get(
      `https://api.github.com/users/oladokun-olayiwola/repos?sort=created`
    );
    const {data: repo} = result
    setRepos(repo)
  })
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" component={Home} />
        <Route path="/saved-repo" component={savedRepo} />
        <Route path="*" component={Error} />
      </Routes>
    </>
  );
};

export default App;

export { username, setUsername, repos}