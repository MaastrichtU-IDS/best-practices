---
id: git-tutorial
title: Git tutorial
---

Create an account on [GitHub](https://github.com), if you don't have one. It is particularly useful as it can be used to login to various website (like your Google account)

:::tip Join the IDS GitHub organization

Contact Vincent on IDS Slack (or someone else) to add your GitHub user to the [MaastrichtU-IDS organization](https://github.com/MaastrichtU-IDS) on GitHub. You will then be able to create and edit repositories in the [organization](https://github.com/MaastrichtU-IDS).

:::

## ⚖️ Why use git?

* The best solution to [version](https://en.wikipedia.org/wiki/Version_control) your code. Most (if not all) projects including code development today are using `git`.
* `git` allows you to easily document, host and share your code. From the smallest programs with 2 files, to the largest software stacks!
* `git` helps you adopt an efficient process to develop code by improving it incrementally. 
  * It helps you by reviewing your code before committing it, to making sure you only save what you want. 
  * It allows you to check the history and changes you made to your code, allowing you to find where issues have been introduced and go back to any earlier version of the code. 
  * Code is stored both locally and on remote servers. You never have to worry about losing any of your work in a disaster scenario.
  * `git` offers a plethora of features to work together and in parallel on the same codebase. 
    * Changes from others contributing to your code can be reviewed and merged into your codebase. 
    * Instead of copy pasting existing code, a *fork* can be created to build on the code of other projects. This allows you to continually update your code with changes done to the original project.
* Open source, standard, multi-platform, incredibly efficient and modular. 
  * `git` is supported by all code hosting platforms, and development environments (IDE)
  * A lot of systems directly use `git` in their implementation (e.g. installing python or javascript packages can be done directly from `git` repositories)
* Bonus: allows you to publish static websites on [GitHub Pages](https://pages.github.com), and run your code in [GitHub Actions](https://github.com/features/actions) workflow for free (for data processing, testing, app deployment, etc)

:::info Write code = use git

Whenever you start working on code (scripts, mappings, Jupyter notebooks) **use `git`**. It's that simple! Especially if you want to show this code to other people.

:::

## ⚔️ Choose your weapons

Which tools do you want to use to manage your `git` repositories? 

:::tip Why not both?

A lot of people use multiple tools depending on the moment and the task they want to perform!
:::

### The terminal

55% of `git` users at IDS use the [`git` command](https://git-scm.com/) in the terminal.

✔️ Available anywhere (even when accessing a remote server without user interface)

✔️ Quick and efficient, especially when you already use the terminal to run your programs and scripts

✔️ Can be easily customized to have a more personal process to commit and push

❌ More work to learn, and to get nice branches visualizations

### IDE built-in support

25% of `git` users at IDS use their favorite IDE `git` built-in support (e.g. [VisualStudio Code](https://code.visualstudio.com/) or [IntelliJ](https://www.jetbrains.com/idea/)).

✔️ To manage `git` with a friendly UI without exiting your IDE

✔️ Some IDEs integrate `git` really well in their UI, e.g. VS Code allows you to revert only selected lines that changed directly from the test editor.

❌ Not always well integrated depending on the IDE, and how you use `git` (have you seen the size of the buttons in the VSCode UI?!)

### Desktop UI applications

20% of `git` users at IDS use the [GitHub Desktop](https://desktop.github.com/) UI application.

Other applications that focuses on managing `git` repositories are also available, such as [GitKraken](https://www.gitkraken.com/) or [SourceTree](https://www.sourcetreeapp.com/).

✔️ If you want to avoid the terminal, and have a nice UI well integrated with GitHub, and only focusing on the `git` repositories management

✔️ Quite helpful when you need to visualize repositories with complex branching

❌ Need to install one more app just for `git` management

❌ They don't support all operating systems for most of them

---

## 🐙 Get familiar with the basic concepts

### Clone

Download a remote repository from GitHub to your computer (here mentioned as "your local repository").

Using SSH (requires to have [set SSH keys to login](https://docs.github.com/en/github/authenticating-to-github/adding-a-new-ssh-key-to-your-github-account), but is safer and really easier on the long term)

```bash
git clone git@github.com:MaastrichtU-IDS/best-practices.git
```

Or HTTPS

```bash
git clone https://github.com/MaastrichtU-IDS/best-practices.git
```

You can also clone submodules if present:

```bash
git clone --recursive https://github.com/MaastrichtU-IDS/best-practices.git
```

### Status and diff

Check the global status of your local repository: display modified files, committed files, commits that needs to be pushed

```bash
git status
```

Check all the current changes you made that are not committed:

```bash
git diff
```

### Add changed files

In your local repository.

```bash
git add .
git add folder/
```

### Commit changes

In your local repository.

```bash
git commit -m "I did those changes"
```

### Push changes

From your local repository to the remote repository on GitHub.

```bash
git push
```

### Pull changes

From the remote repository on GitHub to your local repository.

```bash
git pull
```

### Use branches

:::info The default main branch

Note that the previous the default main branch of a repository was by standard `master`. It now has changed to be `main` (which is shorter, and less derogatory)

:::

Create a new branch

```bash
git checkout -b develop
```

Commit your changes to this `develop` branch.

Then merge the `develop` branch with the `main` branch, to make sure `develop` has no conflict with `main` before merging the changes to the `main` branch:

```bash
git merge main
```

Now change back to `main`:

```bash
git checkout main
```

Finally, merge the changes you committed in the `develop` to the `main` branch:

```bash
git merge develop
```

### Pull request

Do it on https://github.com/MaastrichtU-IDS/best-practices/compare

---

## 🦑 More advanced concepts

### Initialize a repository

You can also initialize an existing local folder to be a `git` repository:

```bash 
git init
```

Then you will probably want to add a remote repository on GitHub to push your changes:

```bash
git remote add origin https://github.com/MaastrichtU-IDS/best-practices.git
```

Push and save to the `main` branch in the `origin` repository:

```bash
git push -u origin main
```

### Configure user

Configure the `git` user globally (just need to be done once when first using `git` on a machine)

```bash
git config --global user.name "Firstname Lastname"
git config --global user.email "Firstname.Lastname@gmail.com"
```

### Add remote repositories

The default remote repository is named `origin`

```bash
git remote add origin https://github.com/MaastrichtU-IDS/best-practices.git
```

You can add more remote repositories (usually other forks of the repository) with the name you want

You can then pull in your current branch from any remote repository (here from the `main` branch in the `origin` remote repository):

```bash
git pull origin main
```

### Use submodules

Add a submodule:

```bash
git submodule add https://github.com/MaastrichtU-IDS/best-practices.git
```

Also add recursively all the submodules of the repository added as submodule:

```bash
git submodule add --recursive https://github.com/MaastrichtU-IDS/best-practices.git
```

### Revert and reset

Soft reset, without losing it (unlike reset). Creates a new commit that cancel the last commit.

```shell
git revert HEAD
```

This will go back to last commit by reseting all files to their state at this commit in your local repository.

```bash
git reset --hard HEAD
```

Remove all commits pushed to GitHub that are more recents than the provided commit in the `origin` remote repository

```shell
git push origin +$COMMIT^:$BRANCH
```

### Search in commits

Current branch

```bash
git log --grep=searchme
```

All branches

```bash
git log --all --grep=searchme
```

### Check the `.git` folder

Checkout `.git/config` file to find where your `git` repository configuration is stored

---

## Git best practices

### Atomic commits
Once you are familiar with the some of the technical basics of `git`, it can be helpful to start utilizing [atomic commits](https://www.pauline-vos.nl/atomic-commits/). Among other advantages, this practice of making small changes at a time without breaking the code allows you to go back to any point earlier point in time and run that version of the code without issues.

### Write descriptive commit messages
When writing the commit message, describe which changes were made and why they are important. By doing this, a later `git log` will allow you to read which changes were made where, making decision making involving earlier commits much easier.

### Git branching strategies
When working on a codebase with a larger group, consider branching strategies such as [git flow](https://datasift.github.io/gitflow/IntroducingGitFlow.html). As in most IDS cases this will be too involved, consider as a lightweight strategy to no longer commit to the master and create separate branches for each issue.

---

## 🔗 External resources

* GitHub tutorial: https://try.github.io

* Another tutorial: https://rogerdudler.github.io/git-guide

* A problem? Visit [OhShitGit!](https://ohshitgit.com/)