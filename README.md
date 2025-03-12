# Prerequisities

## Operating system

This guide is for linux and/or for WSL,
Configuration on pure Windows will need additional steps

## Installing git

`sudo apt-get update`

`sudo apt-get install git -y`

`git config --global user.name "Your Name"`

`git config --global user.email "your.email@example.com"`

## Adding ssh key

This step is optional but recommended - so you can use ssh for cloning / pushing

1. Generate key

`ssh-keygen -t ed25519 -C "your.email@example.com"`

2. Display generated key

`cat ~/.ssh/id_ed25519.pub`

3. Copy it
4. Paste into github page

- click on profile image
- select settings
- go to SSH and GPG keys
- new SSH key
- name it as you like
- paste copied data
- click Add Key

5. update remote, change username and repo to proper values

`git remote set-url origin git@github.com:<username>/<repo>.git`

## Connecting VS Code to wsl (optional)

If you're using both wsl instead of casual linux and VS code

Alternatively to the following, you can just install VS code inside WSL

1. open VS Code

2. go to extensions tab on the left
3. search for, and install `Remote-WSL`

To run remote project, pick `F1` and type `Remote-WSL: New Window or Remote-WSL: Reopen Folder in WSL`

## Installing node.js

`sudo apt-get update`

`curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -`

`sudo apt-get install -y nodejs`

## Installing docker

If following section will require you to install docker separately, please do on your own

For easier usage, you may set up docker as you system user group, so you won't need to use sudo to run docker compose, by following docker documentation, but it's not required

## Installing docker compose

Dont mess it with docker-compose as now docker compose is the plugin for docker, not standalone program.

`sudo apt-get update`

`sudo apt-get install ca-certificates curl gnupg lsb-release`

<pre> bash sudo mkdir -p /etc/apt/keyrings curl -fsSL https://download.docker.com/linux/ubuntu/gpg \ | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg echo \ "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] \ https://download.docker.com/linux/ubuntu \ $(lsb_release -cs) stable" \ | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null </pre>

`sudo apt-get update`

`sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin`

# Setup

## Cloning repo

`git clone git@github.com:underground-wsb/underground-project-back.git`

## Installing dependencies

In repository forlder (underground-project-back)

`npm install`

## Building containers

`sudo docker compose up --build`

# Running application

## Runing docker containers

`sudo docker compose up`
