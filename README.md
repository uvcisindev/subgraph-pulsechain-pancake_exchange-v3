This is exchange-v3 subgraph of the pancakeswap subgraphs. Since The Graph does not natively support pulsechain to deploy subgraphs, We need to create a local subgraph node which listens to the events on the pulsechain through the RPC URL of pulsechain.

Steps to deploy exchange-v3 a local graph node
Assuming local graph node is running. (Link for setup - https://github.com/Ujjwalcis/local-graph-node-setup-docker)
1. yarn install
2. yarn codegen
3. yarn build
4. yarn create-local
5. yarn deploy-local

To make sure that everything gets synced, the start block for syncing the subgraph is set as 18900000, which is a little before when every contract was deployed.
