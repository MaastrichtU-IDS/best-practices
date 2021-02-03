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

### Windows


This page provides instructions to prepare a Windows computer, and yourself, for data science development. 

We highly recommend to install Windows Subsystem for Linux (aka. Ubuntu Linux in Windows), but you will also find tips to develop on the Windows OS (Operating System).

## Install Windows Subsystem for Linux

It is recommended to constantly update your Windows OS to the latest available version to make sure you can install cutting edges softwares! Go to the update window and install all available updates (you might need to restart and install other update multiple times, Microsoft could not do better apparently)

Follow the [official instructions to install WSL 2](https://docs.microsoft.com/en-us/windows/wsl/install-win10) on your machine.

:::info Install with the command line

A simpler solution is available only if you signed up for Windows 10 insider to access development builds of Windows:

```powershell
wsl --install --distribution Ubuntu
```

:::

If you installed Windows Subsystem for Linux (WSL), then you have now 2 OS (Operating Systems) available: Windows and Ubuntu Linux.

Be aware, if you install an application using the Ubuntu terminal, then this application will only be available through the Ubuntu terminal.

## Learn the basic to use the terminal

The terminal is usually seen as a complex matrix. But it is just a natural way to interact with your computer, like for humans, just learn its (simple) language!

### First, which terminal?

The default Windows terminals are not user-friendly! (Default Ubuntu Shell, PowerShell, CMD...)

Thankfully Microsoft has been developing a **new open source and modern terminal now released** in version `1.0` ! 

See the [instructions to install the new Microsoft Terminal](https://github.com/microsoft/terminal)

:::note Install with Winget

```bash
winget install --id=Microsoft.WindowsTerminal -e
```

:::

:::info Install with Chocolatey

```bash
choco install microsoft-windows-terminal
```

:::

But if you still want to use the already installed terminal:

**Use the PowerShell! Do not use the old Command Invite!**

Here is a quote from a senior project manager working on developing terminals at Microsoft to convince you that you should not use the CMD (aka. Command Invite):

![Do not use CMD please](/img/do_not_use_cmd_please.png)

:::caution Bash is the future

Actually his last sentence is wrong. PowerShell was a ridiculous attempt to replicate the popular `Bash` (and `Zsh`), when Microsoft was still against open source. 

**Bash is the future**, no one in his right mind runs Windows server anymore.

:::

### Navigate the terminal

Using the terminal is not as complicated as muggles think, all you need to do is to go to the right directory (aka. folder) and tell your computer what he should do (aka. run a command).

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

To open and edit a file in the terminal the easiest is to use `nano`:

```bash
nano my_file.txt
```

:::info For purists

`vim` and `emacs` are also available.

:::

## Install packages

### On Ubuntu

You can use the `apt` package manager to install packages on WSL.

When you want to install a package just google "install MY_APPLICATION ubuntu", you should be proposed a few easy way to install your application/package in a few commands.

We highly recommend you to install [zsh and oh-my-zsh](https://ohmyz.sh/), it will take a minute and upgrade your Ubuntu terminal. Providing a much more user-friendly way to navigate the terminal!

### On Windows

It took several decades for Microsoft to properly understand interaction with computer, but the official Windows package manager is now available!

:::caution Use Winget

[Install winget](https://github.com/microsoft/winget-cli), the official Windows package manager. Still in beta at the moment. So the list of available packages is limited.

:::

:::info Use Chocolatey

For package not available in `winget` we recommend to use [Chocolatey](https://chocolatey.org/), the most popular tool to install packages on Windows. 

:::

---

:::tip Congratulation

Congratulation! If you installed those software you have now a cutting edge installation of Windows suited for any kind of development! 

:::

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