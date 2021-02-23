---
id: development-environment
title: Development environment
---

Taking the time to properly set up your development environment can save time and headaches in the long run. Your development environment will usually consist of a mix of local software and remote services. Consider taking the following practices into account for future work.

## Local Development Environment

### General Tips

#### Docker
Using Docker comes with lot of advantages, one of the most prominent ones being the ability to run programs in an environment that is always the same (and thus, no more 'it works on my laptop' issues). Consider using Docker to run existing third party software on your laptop, to share your program with others, or to run your application on a remote server. 

#### Conda
Consider using [Conda environments](https://docs.conda.io/en/latest/) to make managing libraries for different programming languages easier. Be wary of the [difference between pip and Conda](https://stackoverflow.com/questions/20994716/what-is-the-difference-between-pip-and-conda) if you do.

#### Terminal basics
The terminal is the interface with which you can execute text based commands. We recommend getting a basic familiarity to at least be able to navigate the folder structure and run shell commands. This is not as difficult as it may seem at first (windows cmd will not run some of these commands, see the section below to set up a similar terminal experience).

List files and directories in the current directory:

```powershell
ls
```

Change directory:

```powershell
cd my-subdirectory

# Go back one directory:
cd ../my-parent-directory
```

Get the current directory you are in:

```powershell
pwd
```

The easiest way to open and edit a file in the terminal is to use `nano`:

```bash
nano my_file.txt
```

:::info For purists

`vim` and `emacs` are also available.

:::

### Windows

#### Updates
For security and usability reasons, it is recommended to continuously update your Windows OS to the latest version.

#### Install Windows Subsystem for Linux
Installing Windows Subsystem for Linux will allow you to run Ubuntu Linux in your Windows environment. This is the recommended approach for any running *.sh* scripts you may find in other repositories. Furthermore, WSL is recommended as a best practice in favour of the environment native cmd and powershell. This provides better reusability as the same scripts can be used on Linux and MacOs. 
Follow the [official instructions to install WSL 2](https://docs.microsoft.com/en-us/windows/wsl/install-win10) on your machine.

:::info Install with the command line

A simpler solution is available only if you signed up for Windows 10 insider to access development builds of Windows:

```powershell
wsl --install --distribution Ubuntu
```

:::

:::warning Different environments
Most applications installed using the WSL terminal will only be available in WSL.
:::

#### Microsoft terminal

Microsoft terminal provides an improved user experience compared to the default terminals such as Ubuntu Shell, PowerShell, CMD. See the [instructions to install the new Microsoft Terminal](https://github.com/microsoft/terminal)


#### Installing packages

##### WSL package manager

You can use the `apt` package manager to install packages on WSL.

When you want to install a package just google "install MY_APPLICATION ubuntu", you should be proposed a few easy way to install your application/package in a few commands.

We recommend the installation of [zsh and oh-my-zsh](https://ohmyz.sh/), it will take a minute and upgrade your Ubuntu terminal. Providing a much more user-friendly way to navigate the terminal.

##### Winget
[Install winget](https://github.com/microsoft/winget-cli), the official Windows package manager. Still in beta at the moment. So the list of available packages is limited.

##### Chocolatey
For packages not available in `winget` we recommend to use [Chocolatey](https://chocolatey.org/), the most popular tool to install packages on Windows. 

---

## Remote Environments

### Data Science Research Infrastructure

The [Data Science Research Infrastructure](https://maastrichtu-ids.github.io/dsri-documentation/) (DSRI) at Maastricht University provides CPU and GPUs nodes for Data Science computing. This service should be considered for all research that requires a large amount of computational resources, as well as anything that benefits from being run remotely and/or continuously. At the moment it is less suitable for public web services, as it requires a [VPN connection to the UM network](https://vpn.maastrichtuniversity.nl/) to gain access. Any program or script can easily be run on DSRI by deploying a Docker container.

:::info

See the [DSRI documentation](https://maastrichtu-ids.github.io/dsri-documentation)

:::

### Collaborative environments

For free computational resources, collaborative scripting and sharing your work, consider using cloud environments such as [Google Collab](https://colab.research.google.com), [Kaggle](https://www.kaggle.com) or a combination of [Jupyter Notebook and Binder](https://mybinder.org/).

:::tip Free power

Kaggle is free during competitions.

:::


### Store data

#### Sensible research data

If you have sensible research data: use **[DataHub](https://portal.datahubmaastricht.nl/)**

#### Research data

If you have data to publish related to a research project: use [**SURF**](https://www.surf.nl/en/research-ict)