# MCO-Server

[![CircleCI](https://circleci.com/gh/drazisil/mco-server.svg?style=shield)](https://circleci.com/gh/drazisil/mco-server)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier) 
[![NSP Status](https://nodesecurity.io/orgs/drazisil/projects/f5724640-0c3f-4c14-a32d-821760fc186d/badge)](https://nodesecurity.io/orgs/drazisil/projects/f5724640-0c3f-4c14-a32d-821760fc186d)
[![Greenkeeper badge](https://badges.greenkeeper.io/drazisil/mco-server.svg)](https://greenkeeper.io/)

## About

This is a game server, being written from scratch, for a very old and long dead game. The owners of said game have shown no interest in bringing it back, but even so all names of their IP have been avoided to prevent issues.

## Help Wanted

I'm writing this from scratch. While I'm proud of what I've done, I'm hitting the point where I need help. Therefore, I'm open-sourcing this. Any assistance you can provide, either from code help, to suggestions, to even pointing out better ways to do things are greatly appreciated.

## Server Setup

* See [./docs/server.md]

## Client Setup

* See [./docs/client.md]

## Started

Mar 6, 2016

## Current Status

### Done

* Client clears patch and update server (port 80)
* Client clears the login web server (port 443)
* Client clears the login server (port 8226)
* Client clears the persona server (port 8228)
* Client clears the lobby/room server (port 7003) and decrypts the NPS packets sent after
* Client passes client connect to MCOTS (port 43300) ands decrypt the packets sent after

### TODO

* Create database
* Create packets
* Respond correctly to NPS and MCOTS packets
