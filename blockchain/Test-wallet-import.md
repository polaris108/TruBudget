## Starting a blockchain via multichain locally with arguments Trubudget is using

```
-txindex TrubudgetChain -maxshowndata=100000 -port=7447 -autosubscribe=streams -datadir=/root/.multichain -debug=mcapi,mchn,mccoin,mcatxo,mcminer,mcblock -printtoconsole
```

## Get Docker id of running blockchain container

`export DOCKER_ID=${docker ps -aqf "name=blockchain_blockchain_1"}`

## Test if multichain has streams

`docker exec -it $DOCKER_ID multichain-cli TrubudgetChain liststreams`

## Test if multichain has users

`docker exec -it $DOCKER_ID multichain-cli TrubudgetChain liststreamitems users`

## Get wallet of multichain

# TODO

`docker exec -it $DOCKER_ID multichain-cli TrubudgetChain dumpwallet mywallet`
`//COPY generated wallet file`

## Import wallet file into new chain

`docker cp mywallet $DOCKER_ID:/tmp/mywallet`
`docker exec -it $DOCKER_ID multichain-cli TrubudgetChain importwallet mywallet`
