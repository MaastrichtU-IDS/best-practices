---
id: git-tutorial
title: Git tutorial
---

## Why use git?

* The best solution to version your code. Most code development today are versioned with git
* Open source, standard, multi-platform, incredibly efficient and modular. 
  * `git` is supported by all code hosting platforms, and development environments (IDE)
  * A lot of systems directly uses `git` in their implementation (e.g. installing python or javascript packages can be done directly from `git` repositories)
* `git` allows you to easily document, host and share your code. From the smallest programs with 2 files, to the largest software stacks!
* `git` helps you adopt an efficient process to develop code by improving it incrementally. 
  * It helps you reviewing your code before committing it, to make sure you only save what you want. 
  * It allows you to check the history and changes you made to your code, allowing you to find where issues have been introduced
* Bonus: allows you to publish static websites on [GitHub Pages](https://pages.github.com), and run your code in [GitHub Actions](https://github.com/features/actions) workflow for free (for data processing, testing, app deployment, etc)

:::info Write code = use git

Whenever you start working on code (scripts, mappings, Jupyter notebooks) **use `git`**. It's that simple! Especially if you want to show this code to other people.

:::

## Choose your weapon

Which tools do you want to use to manage your `git` repositories? 

:::tip Why not both?

A lot of people use multiple tools depending on the moment and the task they want to perform!
:::

### The terminal

55% of `git` users at IDS use the [`git` command](https://git-scm.com/) in the terminal.

✔️ Available anywhere (even when accessing a remote server without user interface)

✔️ Quick and efficient, especially when you already need to use the terminal to run your programs

✔️ Can be easily customized to have a more personal process to commit and push

❌ More work to learn, and to get nice branches visualizations

### IDE built-in support

25% of `git` users at IDS use their favorite IDE `git` built-in support (e.g. [VisualStudio Code](https://code.visualstudio.com/) or [IntelliJ](https://www.jetbrains.com/idea/)).

✔️ To manage `git` with a friendly UI without exiting your IDE

✔️ Some IDEs integrate `git` really well in their UI, e.g. VS Code allows you to revert only selected lines that changed directly from the test editor.

❌ Not always well integrated depending on the IDE, and how you use `git` (have you seen the size of the buttons in the VSCode UI?!)

### Desktop UI applications

15% of `git` users at IDS use the [GitHub Desktop](https://desktop.github.com/) UI application.

Other applications that focuses on managing `git` repositories are also available (such as [GitKraken](https://www.gitkraken.com/) or [SourceTree](https://www.sourcetreeapp.com/))

✔️ If you want to avoid the terminal, and have a nice UI well integrated with GitHub, and really focusing on the `git` repository management

✔️ Quite helpful when needing to visualize repositories with complex branching

❌ Add one more app just for `git` management

❌ They don't support all operating systems for most of them

---

## Get familiar with the basic concepts

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

Merge with other branch

```bash
git merge main
```

Change to existing branch

```bash
git checkout main
```

### Pull request

Do it on https://github.com/MaastrichtU-IDS/best-practices/compare

---

## More advanced concepts

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

## External resources

* GitHub tutorial: https://try.github.io

* Another tutorial: https://rogerdudler.github.io/git-guide

* A problem? Visit [OhShitGit!](https://ohshitgit.com/)