# Scope

This repository holds the website for the ham radio group "Draussenfunker".

## Setup
Install Nodejs Version 14.

Run `yarn install` to install the required packages.
Run `yarn dev` to start the local development environment.
Push to `main` branch to deploy the website.

## Editing

Vuepress uses Markdown. Documentation on how to use it, is readily avaible.
You can use Frontmatter to change layout and other settings per page: [https://v2.vuepress.vuejs.org/reference/default-theme/frontmatter.html](https://v2.vuepress.vuejs.org/reference/default-theme/frontmatter.html)

Inside the `docs` folder, you'll find several files and folders.
The file `docs/blog/helloworld.md` will be rendered to `/blog/helloworld`, the `docs/blog/readme.md` will be rendered to `/blog/`

Images and other assets can be placed into the public dir. `docs/.vuepress/public/images/example.png` and be accessed in the browser via `/images/example.png`.

## Contribution
Piece of cake:
- File an issue
- File a corresponding pull request
- "I don't know what a pull request is!" : Just file an issue, we ll take good care of you. :)

### Setting up a Development Environment to contribute

#### Methode #1
tl;dr:
- clone the repository
- run "yarn install"
- run "yarn dev"

#### Methode #2 
You got a docker environment running anyway? Lovely:
- run docker compose up
