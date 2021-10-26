# Starport

## Install

The quickest and simplest way to create blockchain applications with the Cosmos SDK is to use Starport. 

To install Starport at the command line:

```bash
$ curl https://get.starport.network/starport! | bash

```bash
$ sudo mv starport /usr/local/bin/
```

And verify your installation with a version request:

```bash
$ starport version
```

You can also just type `starport` to see the commands it offers:

```bash
Starport is a tool for creating sovereign blockchains built with Cosmos SDK, the world’s
most popular modular blockchain framework. Starport offers everything you need to scaffold,
test, build, and launch your blockchain.

To get started, create a blockchain:

starport scaffold chain github.com/cosmonaut/mars

Usage:
  starport [command]

Available Commands:
  scaffold    Scaffold a new blockchain, module, message, query, and more
  chain       Build, initialize and start a blockchain node or perform other actions on the blockchain
  generate    Generate clients, API docs from source code
  network     Launch a blockchain network in production
  relayer     Connects blockchains via IBC protocol
  tools       Tools for advanced users
  docs        Show Starport docs
  version     Print the current build information
  help        Help about any command

Flags:
  -h, --help   help for starport

Use "starport [command] --help" for more information about a command.
```

There is a very good [introduction tutorial](https://docs.starport.network/guide/hello.html) provided by the [Starport documentation](https://docs.starport.network/) which you should first check and try to see the Hello-World response at [http://localhost:1317/cosmonaut/hello/hello/posts](http://localhost:1317/cosmonaut/hello/hello/posts). 

## Your chain

You can create a chain for Alice with:

```bash
$ starport scaffold chain github.com/alice/chain
```

The scaffolding will take some time. After the scaffolding you will have a folder `chain`. 
In it you will see that we have 
  - a folder for the application called `app`, 
  - a folder for the commands called `cmd`, 
  - a folder for the protobuff definitions called `proto`,
  - a folder for the UI called `vue`, see [Vue.js](https://vuejs.org/).

You can observe in the code following lines:

```golang
// this line is used by starport scaffolding # 1
```

so you should not replace those files in order to keep Starport working.

So in the `chain` folder, run:

```bash
$ starport chain serve
```

The `starport chain serve` command will do several things:
  - install all dependicies
  - it will build protobuff files
  - compile the application
  - it will initialize the node with a single validator
  - it will add accounts

so at the end it will give you a testnet with a node running. Take a look at the `config.yml` file in the `chain` folder:

```yaml
accounts:
  - name: alice
    coins: ["20000token", "200000000stake"]
  - name: bob
    coins: ["10000token", "100000000stake"]
validator:
  name: alice
  staked: "100000000stake"
client:
  vuex:
    path: "vue/src/store"
  openapi:
    path: "docs/static/openapi.yml"
faucet:
  name: bob
  coins: ["5token", "100000stake"]
```

in this file cou can set the accounts and the validator. In addition you can let Starport generate a client and a faucet. 

You can observe the endpoints of the blockchain in the output of the `starport chain serve` command:

```bash
🌍 Tendermint node: http://0.0.0.0:26657
🌍 Blockchain API: http://0.0.0.0:1317
🌍 Token faucet: http://0.0.0.0:4500
```

If you make any change in the source, Starport will rebuild the binaries before starting the blockchain and keep the state. 

Now, create a front end. Find the commands in the commands in the `readme.md` in the `chain` folder:

```bash
$ cd vue
$ npm install
$ npm run serve
```

Navigate to [http://localhost:8080/](http://localhost:8080/). See that no wallet is created or imported yet. Use the mnemonic for Alice in the output of the `starport chain serve` command to import a wallet.

Now you can see Alices balance. In addition in the left bar, you can navigate to the custom type which will be empty at the moment. You can create a `message` with:

```bash
$  starport scaffold message createPost title body
```

In the terminal output, you will see a list of files which are created or modified by the `message` command:

```bash
modify proto/chain/tx.proto
modify x/chain/client/cli/tx.go
create x/chain/client/cli/tx_create_post.go
modify x/chain/handler.go
create x/chain/keeper/msg_server_create_post.go
modify x/chain/types/codec.go
create x/chain/types/message_create_post.go
```

You see in the `proto/chain/tx.proto` the definition of the message:

```golang
// this line is used by starport scaffolding # proto/tx/message
message MsgCreatePost {
  string creator = 1;
  string title = 2;
  string body = 3;
}
```

Starport will also include a command into the CLI:

```golang
func CmdCreatePost() *cobra.Command {
  cmd := &cobra.Command{
    Use:   "create-post [title] [body]",
    Short: "Broadcast message createPost",
    Args:  cobra.ExactArgs(2),
    ...
```

Starport uses the Vue.js frontend, so you will find a function in the `starport/chain/vue/src/store/generated/alice/chain/alice.chain.chain/index.js`:

```javascript
        async MsgCreatePost({ rootGetters }, { value }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgCreatePost(value);
                return msg;
            }
            catch (e) {
                if (e == MissingWalletError) {
                    throw new SpVuexError('TxClient:MsgCreatePost:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgCreatePost:Create', 'Could not create message: ' + e.message);
                }
            }
        }
```


## Next 

- [Create an IBC Interchain Exchange module](https://tutorials.cosmos.network/interchain-exchange/tutorial/00-intro.html)