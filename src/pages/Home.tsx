import { Component, createSignal, For} from 'solid-js';
import RepoCard, {Repo} from '../components/RepoCard';
import { username, repos, setUsername } from '../App';

const refetchWithUsername = (event: Event) => {
    event.preventDefault()
    const name = document.getElementById("usernameInput") as HTMLInputElement;
    // console.log(name.value);
    name ? setUsername(name.value) : console.log("Input name werey");
}


const Home: Component = () => {
    return (
      <div class='m-4 text-center'>
        <h2>Home</h2>
        <form class="mb-3 " onSubmit={(event) => refetchWithUsername(event)}>
          <input
            type="text"
            class="p-1 align-middle"
            placeholder="Type username..."
            id="usernameInput"
            required
          />

          <button class="btn btn-dark ms-3 w-auto text-center" onClick={(e) => refetchWithUsername(e)}>
            Fetch
          </button>
        </form>
        <h3>GitHub repos for {username()}</h3>
        <For each={repos()}>{(repo: Repo) => <RepoCard repo={repo} />}</For>
      </div>
    );
}

export default Home;