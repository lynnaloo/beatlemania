# Beatlemania

A Serverless Framework Example with a simple HTTP service deployed on four different cloud platforms - John (Amazon Web Services), Paul (IBM Cloud), George (Google Cloud Platform, and Ringo (Microsoft Azure)

## Setup

See the `README.md` in each service for more instructions for that FaaS environment.

# Install

With [Node LTS](https://nodejs.org/) installed, install the Serverless Framework:

```
$ npm install -g serverless
```

Clone this repository

```
$ git clone git@github.com:lynnaloo/beatlemania.git
$ cd beatlemania
```

Choose a cloud platform, install libraries, deploy, and run!

```
$ cd george
$ npm install
$ serverless deploy
$ serverless invoke -f sing
```

Since these are HTTP services, you can execute them like a REST API

```
http://{generated cloud platform url}/sing
```




