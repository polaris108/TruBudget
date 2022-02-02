<!-- TODO check this doc -->

# Create a New Network Directly on Machine

**It is highly recommended to use the [Docker-Compose Setup guide](./create-new-docker-compose.md) instead of this Setup guide.**

This guide describes how to create a new network without the use of Docker, Docker-Compose or Kubernetes.
Before starting make sure to have `node`,`npm` and the [latest release of MultiChain](https://www.multichain.com/download-community/) available on your machine.

## Table of Contents

- [Connect to an existing Blockchain network](#connect-to-an-existing-blockchain-network)
  - [Get the repository](#get-the-repository)
  - [Blockchain](#blockchain)

## Get the repository

Clone the Github repository of the components onto the designated machines.

Clone the repository:

```
git clone https://github.com/openkfw/TruBudget.git
cd TruBudget
```

:::info
If you work with an existing checkout, make sure you have the latest changes:

```
git pull
```

:::

## Connect to an existing Blockchain network

This section describes how you can setup a blockchain node that will try to connect to an existing network. You cannot run the slave node on the same server where the master node is located because the port `7447` is already used by master node. If you want also want to setup an API and Frontend, follow the instructions from [Frontend](#frontend) and [API](#api).

To connect to an already existing Blockchain network **adapt** and set the following environment parameters:

```bash
export ORGANIZATION="YourOrga";
export RPC_PORT=8000;
export RPC_USER="multichainrpc";
export RPC_PASSWORD="password";
export RPC_ALLOW_IP="0.0.0.0/0";
export MULTICHAIN_DIR="/root"
export EXTERNAL_IP = [external IP here];
export P2P_PROD_HOST = [IP of prod instance of seed node];
export P2P_PROD_PORT = [MultiChain port of prod instance of seed node];
export P2P_TEST_HOST = [IP of test instance of seed node];
export P2P_TEST_PORT = [MultiChain port of test instance of seed node];
export API_PROD_HOST=[IP of seed API (prod)];
export API_PROD_PORT=[port of seed API (prod)];
export API_TEST_HOST=[IP of seed API (test)];
export API_TEST_PORT=[port of seed API (test)];
```

Navigate into the `blockchain` directory and install the node packages defined in the `package.json` and start the Blockchain with:

```bash
cd blockchain/
npm install
npm start > startup.log 2>&1 &
```

Since you are trying to connect to an already existing Blockchain network the node has to be approved by a master node.
Before the approval, the `startup.log` should look similar to:

```bash
TrubudgetChain http 192.168.96.3 8080 7447 TrubudgetChain@192.168.96.3:7447
>>> Args: -txindex,-port=7447,-autosubscribe=streams,TrubudgetChain@192.168.96.3:7447,,
>> [MULTICHAIN_DIR]/.multichain/TrubudgetChain/multichain.conf rpcport=8000
rpcuser=multichainrpc
rpcpassword=password
rpcallowip=0.0.0.0/0
multichaind  | Retrieving blockchain parameters from the seed node 192.168.96.3:7447 ...
multichaind  | Blockchain successfully initialized.
multichaind  | Please ask blockchain admin or user having activate permission to let you connect and/or transact:
multichaind  | multichain-cli TrubudgetChain grant [redacted] connect
multichaind  | multichain-cli TrubudgetChain grant [redacted] connect,send,receive
multichaind  |
MultiChain 2.0 alpha 2 Daemon (latest protocol 20002)
>>> Multichain stopped. Retry in 10 Seconds...
```

After the node was approved by the master node, the `startup.log` should update to this:

```bash
>> MULTICHAIN_DIR/.multichain/multichain.conf rpcport=8000
rpcuser=multichainrpc
rpcpassword=password
rpcallowip=0.0.0.0/0

TrubudgetChain http 192.168.96.3 8080 7447 TrubudgetChain@192.168.96.3:7447
>>> Args: -txindex,-port=7447,-autosubscribe=streams,TrubudgetChain@192.168.96.3:7447,,
>> MULTICHAIN_DIR/.multichain/TrubudgetChain/multichain.conf rpcport=8000
rpcuser=multichainrpc
rpcpassword=password
rpcallowip=0.0.0.0/0

multichaind  | Retrieving blockchain parameters from the seed node 192.168.96.3:7447 ...
multichaind  | Other nodes can connect to this node using:
multichaind TrubudgetChain@172.17.0.3:7447
This host has multiple IP addresses, so from some networks:
multichaind TrubudgetChain@192.168.96.2:7447
multichaind  | Node ready.
```
