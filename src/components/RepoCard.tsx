import { Component, For } from "solid-js";
import { savedRepos, setSavedRepos } from "../pages/savedRepo";

export interface Repo {
  id: string;
  html_url: string;
  name: string;
  description: string;
  stargazers_count: string;
  owner: {
    login: string;
    repos_url: string;
  };
}

interface Props {
  repo: Repo;
}
const saveRepo = (repo: Repo) => {
  setSavedRepos([repo, ...savedRepos()]);
  localStorage.setItem("savedRepos", JSON.stringify(savedRepos()));
};
const unSaveRepo = (repoId: string) => {
  setSavedRepos(savedRepos()?.filter((item) => item.id !== repoId));
  localStorage.setItem("savedRepos", JSON.stringify(savedRepos()));
};
const isSaved = (repoId: string) => {
  const saved = savedRepos().filter((item) => item.id === repoId);
  return saved.length > 0;
};

const RepoCard: Component<Props> = ({ repo }) => {
  return (
    <div class="card m-4">
      <div class="card-header">&#11088; stars: {repo.stargazers_count}</div>
      <div class="card-body">
        <a
          href={repo.html_url}
          class="h4 card-title text-decoration-none"
          target="_blank"
          rel="noreferrer"
        >
          <strong>{repo.owner?.login}</strong>/{repo.name}
        </a>
        <p class="card-text">{repo.description}</p>
        {!isSaved(repo.id) ? (
          <button class="btn btn-success" onClick={(e) => saveRepo(repo)}>
            Save
          </button>
        ) : (
          <button class="btn btn-danger" onClick={(e) => unSaveRepo(repo?.id)}>
            UnSave
          </button>
        )}
      </div>
    </div>
  );
};

export default RepoCard;
