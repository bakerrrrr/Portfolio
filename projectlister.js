import fetch from 'node-fetch';
const api = 'https://api.github.com/users/bakerrrrr/repos';

async function getrepos() {
    const data = {}

    let response = await fetch(api);
    response = await response.json();

    response.forEach(repo => data[repo.name] = { description: repo.description ?? 'N/A', url: repo.html_url });
    return data;
}
const repos = Promise.resolve(getrepos());

document.open();
document.write('<h1>My Github Repos</h1>');
Object.entries(repos).forEach(([name, { description, url }]) => {
    document.write(`<div class="repo">
        <h2>${name}</h2>
        <p>${description}</p>
        <a href="${url}" target="_blank">${url}</a>
    </div>`);
});