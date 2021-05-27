(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{612:function(a,e,c){"use strict";c.r(e);var t=c(0),o=Object(t.a)({},(function(){var a=this,e=a.$createElement,c=a._self._c||e;return c("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[c("h1",{attrs:{id:"walkthrough"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#walkthrough"}},[a._v("#")]),a._v(" Walkthrough")]),a._v(" "),c("p",[a._v("The software is ready. Now you can go through: create an order book, buy a token, and sell a token.")]),a._v(" "),c("p",[a._v("If you have already started tests with the relayer, make sure to clear your old data on a new start with:")]),a._v(" "),c("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"cm0gfi8uc3RhcnBvcnQvcmVsYXllci9jb25maWcueW1sCg=="}}),a._v(" "),c("h2",{attrs:{id:"start-the-blockchains"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#start-the-blockchains"}},[a._v("#")]),a._v(" Start the Blockchains")]),a._v(" "),c("p",[a._v("Start the networks. For input, use the "),c("code",[a._v("mars.yml")]),a._v(" and "),c("code",[a._v("venus.yml")]),a._v(" for each blockchain.")]),a._v(" "),c("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"IyBzdGFydCBuZXR3b3JrcwpzdGFycG9ydCBzZXJ2ZSAtYyBtYXJzLnltbCAtcgpzdGFycG9ydCBzZXJ2ZSAtYyB2ZW51cy55bWwgLXIK"}}),a._v(" "),c("h2",{attrs:{id:"configure-the-relayer"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#configure-the-relayer"}},[a._v("#")]),a._v(" Configure the relayer")]),a._v(" "),c("p",[a._v("Start the relayer, use "),c("code",[a._v("Mars")]),a._v(" as the source blockchain and "),c("code",[a._v("Venus")]),a._v(" as the target blockchain.\nThe ports for "),c("code",[a._v("Mars")]),a._v(" are default ports. For "),c("code",[a._v("Venus")]),a._v(", the port details are in the "),c("code",[a._v("venus.yml")]),a._v(" file.")]),a._v(" "),c("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"IyByZWxheWVyIGNvbmZpZ3VyYXRpb24Kc3RhcnBvcnQgcmVsYXllciBjb25maWd1cmUgLWEgXAotLXNvdXJjZS1ycGMgJnF1b3Q7aHR0cDovLzAuMC4wLjA6MjY2NTcmcXVvdDsgXAotLXNvdXJjZS1mYXVjZXQgJnF1b3Q7aHR0cDovLzAuMC4wLjA6NDUwMCZxdW90OyBcCi0tc291cmNlLXBvcnQgJnF1b3Q7aWJjZGV4JnF1b3Q7IFwKLS1zb3VyY2UtdmVyc2lvbiAmcXVvdDtpYmNkZXgtMSZxdW90OyBcCi0tc291cmNlLWdhc3ByaWNlICZxdW90OzAuMDAwMDAyNXN0YWtlJnF1b3Q7IFwKLS1zb3VyY2UtcHJlZml4ICZxdW90O2Nvc21vcyZxdW90OyBcCi0tdGFyZ2V0LXJwYyAmcXVvdDtodHRwOi8vMC4wLjAuMDoyNjY1OSZxdW90OyBcCi0tdGFyZ2V0LWZhdWNldCAmcXVvdDtodHRwOi8vMC4wLjAuMDo0NTAxJnF1b3Q7IFwKLS10YXJnZXQtcG9ydCAmcXVvdDtpYmNkZXgmcXVvdDsgXAotLXRhcmdldC12ZXJzaW9uICZxdW90O2liY2RleC0xJnF1b3Q7IFwKLS10YXJnZXQtZ2FzcHJpY2UgJnF1b3Q7MC4wMDAwMDI1c3Rha2UmcXVvdDsgXAotLXRhcmdldC1wcmVmaXggJnF1b3Q7Y29zbW9zJnF1b3Q7Cg=="}}),a._v(" "),c("h2",{attrs:{id:"connect-the-relayer"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#connect-the-relayer"}},[a._v("#")]),a._v(" Connect the relayer")]),a._v(" "),c("p",[a._v("After the relayer is configured with the two blockchains, start running the relayer and connect the two blockchains.")]),a._v(" "),c("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"IyByZWxheWVyIGNvbm5lY3Rpb24Kc3RhcnBvcnQgcmVsYXllciBjb25uZWN0Cg=="}}),a._v(" "),c("h2",{attrs:{id:"commands-overview"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#commands-overview"}},[a._v("#")]),a._v(" Commands Overview")]),a._v(" "),c("p",[a._v("Commands that you are use in this walkthrough are:")]),a._v(" "),c("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"IyBUbyBnZXQgYWNjb3VudCBiYWxhbmNlcyBkdXJpbmcgdGhlIHR1dG9yaWFsOgojIEZvciBtYXJzCmludGVyY2hhbmdlZCBxIGJhbmsgYmFsYW5jZXMgW2FkZHJlc3NdCgojIEZvciB2ZW51cwppbnRlcmNoYW5nZWQgcSBiYW5rIGJhbGFuY2VzIFthZGRyZXNzXSAtLW5vZGUgdGNwOi8vbG9jYWxob3N0OjI2NjU5CgojIFRvIHNob3cgdGhlIG9yZGVyIGJvb2sKIyBGb3IgbWFycwppbnRlcmNoYW5nZWQgcSBpYmNkZXggbGlzdC1zZWxsT3JkZXJCb29rCgojIEZvciB2ZW51cwppbnRlcmNoYW5nZWQgcSBpYmNkZXggbGlzdC1idXlPcmRlckJvb2sgLS1ub2RlIHRjcDovL2xvY2FsaG9zdDoyNjY1OQo="}}),a._v(" "),c("h2",{attrs:{id:"create-an-order-book"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#create-an-order-book"}},[a._v("#")]),a._v(" Create an Order Book")]),a._v(" "),c("p",[a._v("Create an order book for a new pair of tokens to the exchange.\nThe source blockchain is "),c("code",[a._v("Mars")]),a._v(". The  target blockchain is "),c("code",[a._v("Venus")]),a._v(".")]),a._v(" "),c("p",[a._v("The order book is to sell "),c("code",[a._v("mcx")]),a._v(" and buy "),c("code",[a._v("vcx")]),a._v(" token.")]),a._v(" "),c("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"IyBjcmVhdGUgdGhlIHBhaXIKaW50ZXJjaGFuZ2VkIHR4IGliY2RleCBzZW5kLWNyZWF0ZVBhaXIgaWJjZGV4IGNoYW5uZWwtMCBtY3ggdmN4IC0tZnJvbSBhbGljZSAtLWNoYWluLWlkIG1hcnMgLS1ob21lIH4vLm1hcnMK"}}),a._v(" "),c("p",[a._v("Display current order books available:")]),a._v(" "),c("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"IyBzaG93IHRoZSBvcmRlcmJvb2tzCmludGVyY2hhbmdlZCBxIGliY2RleCBsaXN0LXNlbGxPcmRlckJvb2sKaW50ZXJjaGFuZ2VkIHEgaWJjZGV4IGxpc3QtYnV5T3JkZXJCb29rIC0tbm9kZSB0Y3A6Ly9sb2NhbGhvc3Q6MjY2NTkK"}}),a._v(" "),c("h2",{attrs:{id:"create-a-sell-order"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#create-a-sell-order"}},[a._v("#")]),a._v(" Create a sell order")]),a._v(" "),c("p",[a._v("Command to create a "),c("code",[a._v("packet")]),a._v(" with a sell order:")]),a._v(" "),c("p",[c("code",[a._v("interchanged tx ibcdex send-sellOrder [src-port] [src-channel] [amountDenom] [amount] [priceDenom] [price]")])]),a._v(" "),c("p",[a._v("This sell order sells 10 "),c("code",[a._v("mcx")]),a._v(" token for 15 "),c("code",[a._v("vcx")]),a._v(" token.")]),a._v(" "),c("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"IyBDcmVhdGUgYW5kIHNlbmQgdGhlIHNlbGwgb3JkZXIKaW50ZXJjaGFuZ2VkIHR4IGliY2RleCBzZW5kLXNlbGxPcmRlciBpYmNkZXggY2hhbm5lbC0wIG1jeCAxMCB2Y3ggMTUgLS1mcm9tIGFsaWNlIC0tY2hhaW4taWQgbWFycyAtLWhvbWUgfi8ubWFycwo="}}),a._v(" "),c("h2",{attrs:{id:"create-a-buy-order"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#create-a-buy-order"}},[a._v("#")]),a._v(" Create a buy order")]),a._v(" "),c("p",[a._v("Command to create a "),c("code",[a._v("packet")]),a._v(" with a buy order:")]),a._v(" "),c("p",[c("code",[a._v("interchanged tx ibcdex send-buyOrder [src-port] [src-channel] [amountDenom] [amount] [priceDenom] [price]")])]),a._v(" "),c("p",[a._v("This sell order buys 10 "),c("code",[a._v("mcx")]),a._v(" token for 5 "),c("code",[a._v("vcx")]),a._v(" token.")]),a._v(" "),c("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"IyBDcmVhdGUgYW5kIHNlbmQgdGhlIGJ1eSBvcmRlcgppbnRlcmNoYW5nZWQgdHggaWJjZGV4IHNlbmQtYnV5T3JkZXIgaWJjZGV4IGNoYW5uZWwtMCBtY3ggMTAgdmN4IDUgLS1mcm9tIGFsaWNlIC0tY2hhaW4taWQgdmVudXMgLS1ob21lIH4vLnZlbnVzIC0tbm9kZSB0Y3A6Ly9sb2NhbGhvc3Q6MjY2NTkK"}}),a._v(" "),c("h2",{attrs:{id:"cancel-buy-or-sell-order"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#cancel-buy-or-sell-order"}},[a._v("#")]),a._v(" Cancel Buy or Sell Order")]),a._v(" "),c("p",[a._v("Command to create a "),c("code",[a._v("packet")]),a._v(" with a cancel buy and sell order:")]),a._v(" "),c("p",[c("code",[a._v("interchanged tx ibcdex cancelSellOrder [port] [channel] [amountDenom] [priceDenom] [orderID]")])]),a._v(" "),c("p",[c("code",[a._v("interchanged tx ibcdex cancelBuyOrder [port] [channel] [amountDenom] [priceDenom] [orderID]")])]),a._v(" "),c("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"IyBTZWxsIG9yZGVyCmludGVyY2hhbmdlZCB0eCBpYmNkZXggY2FuY2VsU2VsbE9yZGVyIGliY2RleCBjaGFubmVsLTAgbWN4IHZjeCAwIC0tZnJvbSBhbGljZSAtLWNoYWluLWlkIG1hcnMgLS1ob21lIH4vLm1hcnMKCiMgQnV5IG9yZGVyCmludGVyY2hhbmdlZCB0eCBpYmNkZXggY2FuY2VsQnV5T3JkZXIgaWJjZGV4IGNoYW5uZWwtMCBtY3ggdmN4IDMgLS1mcm9tIGFsaWNlIC0tY2hhaW4taWQgdmVudXMgLS1ob21lIH4vLnZlbnVzIC0tbm9kZSB0Y3A6Ly9sb2NhbGhvc3Q6MjY2NTkK"}}),a._v(" "),c("h2",{attrs:{id:"exchange-tokens"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#exchange-tokens"}},[a._v("#")]),a._v(" Exchange Tokens")]),a._v(" "),c("p",[a._v("Send a sell order for selling 10 "),c("code",[a._v("mcx")]),a._v(" token for 15 "),c("code",[a._v("vcx")]),a._v(" token.")]),a._v(" "),c("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"IyBTZWxsIG9yZGVyCmludGVyY2hhbmdlZCB0eCBpYmNkZXggc2VuZC1zZWxsT3JkZXIgaWJjZGV4IGNoYW5uZWwtMCBtY3ggMTAgdmN4IDE1IC0tZnJvbSBhbGljZSAtLWNoYWluLWlkIG1hcnMgLS1ob21lIH4vLm1hcnMK"}}),a._v(" "),c("p",[a._v("Check the sell order book:")]),a._v(" "),c("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"IyBTZWxsIG9yZGVyIGJvb2sKaW50ZXJjaGFuZ2VkIHEgaWJjZGV4IGxpc3Qtc2VsbE9yZGVyQm9vawo="}}),a._v(" "),c("p",[a._v("Result")]),a._v(" "),c("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"U2VsbE9yZGVyQm9vazoKLSBhbW91bnREZW5vbTogbWN4CiAgaW5kZXg6IGliY2RleC1jaGFubmVsLTAtbWN4LXZjeAogIG9yZGVySURUcmFjazogMgogIG9yZGVyczoKICAtIGFtb3VudDogMTAKICAgIGNyZWF0b3I6IGNvc21vczFoZmRzdmszcmwzYTdyZmd4dm5ldG5uZnZwdmp4dHJqbXdyeW0zZgogICAgaWQ6IDAKICAgIHByaWNlOiAxNQogIHByaWNlRGVub206IHZjeApwYWdpbmF0aW9uOgogIG5leHRfa2V5OiBudWxsCiAgdG90YWw6ICZxdW90OzEmcXVvdDsK"}}),a._v(" "),c("p",[a._v("Send a sell order for buying 10 "),c("code",[a._v("mcx")]),a._v(" token for 5 "),c("code",[a._v("vcx")]),a._v(" token.")]),a._v(" "),c("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"IyBCdXkgb3JkZXIKaW50ZXJjaGFuZ2VkIHR4IGliY2RleCBzZW5kLWJ1eU9yZGVyIGliY2RleCBjaGFubmVsLTAgbWN4IDEwIHZjeCA1IC0tZnJvbSBhbGljZSAtLWNoYWluLWlkIHZlbnVzIC0taG9tZSB+Ly52ZW51cyAtLW5vZGUgdGNwOi8vbG9jYWxob3N0OjI2NjU5Cg=="}}),a._v(" "),c("p",[a._v("Check the buy order book:")]),a._v(" "),c("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"IyBCdXkgb3JkZXIgYm9vawppbnRlcmNoYW5nZWQgcSBpYmNkZXggbGlzdC1idXlPcmRlckJvb2sgLS1ub2RlIHRjcDovL2xvY2FsaG9zdDoyNjY1OQo="}}),a._v(" "),c("p",[a._v("Result")]),a._v(" "),c("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"QnV5T3JkZXJCb29rOgotIGFtb3VudERlbm9tOiBtY3gKICBpbmRleDogaWJjZGV4LWNoYW5uZWwtMC1tY3gtdmN4CiAgb3JkZXJJRFRyYWNrOiAzCiAgb3JkZXJzOgogIC0gYW1vdW50OiAxMAogICAgY3JlYXRvcjogY29zbW9zMXVoZ2g1aGs4aGRtcWc4ZGw4a3dmeDJjNmp4ZzZ5bXE3eDhoOGZ6CiAgICBpZDogMQogICAgcHJpY2U6IDUKICBwcmljZURlbm9tOiB2Y3gKcGFnaW5hdGlvbjoKICBuZXh0X2tleTogbnVsbAogIHRvdGFsOiAmcXVvdDsxJnF1b3Q7Cg=="}}),a._v(" "),c("h2",{attrs:{id:"complete-exchange-with-a-sell-order"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#complete-exchange-with-a-sell-order"}},[a._v("#")]),a._v(" Complete Exchange with a Sell Order")]),a._v(" "),c("p",[a._v("Now, send a sell order packet that fills a previously created buy order.")]),a._v(" "),c("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"IyBQZXJmb3JtIGEgc2VsbCBvcmRlciB0aGF0IGdldCBjb21wbGV0ZWx5IGZpbGxlZAppbnRlcmNoYW5nZWQgdHggaWJjZGV4IHNlbmQtc2VsbE9yZGVyIGliY2RleCBjaGFubmVsLTAgbWN4IDUgdmN4IDMgLS1mcm9tIGFsaWNlIC0tY2hhaW4taWQgbWFycyAtLWhvbWUgfi8ubWFycwo="}}),a._v(" "),c("p",[a._v("Result")]),a._v(" "),c("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"U2VsbE9yZGVyQm9vazoKLSBhbW91bnREZW5vbTogbWN4CiAgaW5kZXg6IGliY2RleC1jaGFubmVsLTAtbWN4LXZjeAogIG9yZGVySURUcmFjazogMgogIG9yZGVyczoKICAtIGFtb3VudDogMTAKICAgIGNyZWF0b3I6IGNvc21vczFoZmRzdmszcmwzYTdyZmd4dm5ldG5uZnZwdmp4dHJqbXdyeW0zZgogICAgaWQ6IDAKICAgIHByaWNlOiAxNQogIHByaWNlRGVub206IHZjeApCdXlPcmRlckJvb2s6Ci0gYW1vdW50RGVub206IG1jeAogIGluZGV4OiBpYmNkZXgtY2hhbm5lbC0wLW1jeC12Y3gKICBvcmRlcklEVHJhY2s6IDMKICBvcmRlcnM6CiAgLSBhbW91bnQ6IDUKICAgIGNyZWF0b3I6IGNvc21vczF1aGdoNWhrOGhkbXFnOGRsOGt3ZngyYzZqeGc2eW1xN3g4aDhmegogICAgaWQ6IDEKICAgIHByaWNlOiA1CiAgcHJpY2VEZW5vbTogdmN4Cg=="}}),a._v(" "),c("h2",{attrs:{id:"compare-balances"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#compare-balances"}},[a._v("#")]),a._v(" Compare Balances")]),a._v(" "),c("p",[a._v("After the exchange has been executed, compare the new balances and see the new "),c("code",[a._v("IBC")]),a._v(" token voucher in your balance.")]),a._v(" "),c("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"IyBHZXQgYmFsYW5jZQppbnRlcmNoYW5nZWQgcSBiYW5rIGJhbGFuY2VzIGNvc21vczFoZmRzdmszcmwzYTdyZmd4dm5ldG5uZnZwdmp4dHJqbXdyeW0zZgo="}}),a._v(" "),c("p",[a._v("Result")]),a._v(" "),c("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"YmFsYW5jZXM6Ci0gYW1vdW50OiAmcXVvdDsyNSZxdW90OwogIGRlbm9tOiBpYmMvNTBENzBCNzc0OEZCOEFBNjlGMDkxMTRFQzlFNTYxNUMzOUUwNzM4MUZFODBFNjI4QTFBRjYzQTZGNUM3OTgzMwotIGFtb3VudDogJnF1b3Q7OTg1JnF1b3Q7CiAgZGVub206IG1jeAotIGFtb3VudDogJnF1b3Q7MCZxdW90OwogIGRlbm9tOiBzdGFrZQotIGFtb3VudDogJnF1b3Q7MTAwMCZxdW90OwogIGRlbm9tOiB0b2tlbgpwYWdpbmF0aW9uOgogIG5leHRfa2V5OiBudWxsCiAgdG90YWw6ICZxdW90OzAmcXVvdDsK"}}),a._v(" "),c("h2",{attrs:{id:"complete-exchange-with-a-buy-order"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#complete-exchange-with-a-buy-order"}},[a._v("#")]),a._v(" Complete Exchange with a Buy Order")]),a._v(" "),c("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"IyBGaWxsZWQgYnV5IG9yZGVyCmludGVyY2hhbmdlZCB0eCBpYmNkZXggc2VuZC1idXlPcmRlciBpYmNkZXggY2hhbm5lbC0wIG1jeCA1IHZjeCAxNSAtLWZyb20gYWxpY2UgLS1jaGFpbi1pZCB2ZW51cyAtLWhvbWUgfi8udmVudXMgLS1ub2RlIHRjcDovL2xvY2FsaG9zdDoyNjY1OQo="}}),a._v(" "),c("p",[a._v("Result")]),a._v(" "),c("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"U2VsbE9yZGVyQm9vazoKLSBhbW91bnREZW5vbTogbWN4CiAgaW5kZXg6IGliY2RleC1jaGFubmVsLTAtbWN4LXZjeAogIG9yZGVySURUcmFjazogMgogIG9yZGVyczoKICAtIGFtb3VudDogNQogICAgY3JlYXRvcjogY29zbW9zMWhmZHN2azNybDNhN3JmZ3h2bmV0bm5mdnB2anh0cmptd3J5bTNmCiAgICBpZDogMAogICAgcHJpY2U6IDE1CiAgcHJpY2VEZW5vbTogdmN4CkJ1eU9yZGVyQm9vazoKLSBhbW91bnREZW5vbTogbWN4CiAgaW5kZXg6IGliY2RleC1jaGFubmVsLTAtbWN4LXZjeAogIG9yZGVySURUcmFjazogMwogIG9yZGVyczoKICAtIGFtb3VudDogNQogICAgY3JlYXRvcjogY29zbW9zMXVoZ2g1aGs4aGRtcWc4ZGw4a3dmeDJjNmp4ZzZ5bXE3eDhoOGZ6CiAgICBpZDogMQogICAgcHJpY2U6IDUKICBwcmljZURlbm9tOiB2Y3gK"}}),a._v(" "),c("h2",{attrs:{id:"compare-balances-2"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#compare-balances-2"}},[a._v("#")]),a._v(" Compare Balances")]),a._v(" "),c("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"aW50ZXJjaGFuZ2VkIHEgYmFuayBiYWxhbmNlcyBjb3Ntb3MxaGZkc3ZrM3JsM2E3cmZneHZuZXRubmZ2cHZqeHRyam13cnltM2YK"}}),a._v(" "),c("p",[a._v("Result")]),a._v(" "),c("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"YmFsYW5jZXM6Ci0gYW1vdW50OiAmcXVvdDsxMDAmcXVvdDsKICBkZW5vbTogaWJjLzUwRDcwQjc3NDhGQjhBQTY5RjA5MTE0RUM5RTU2MTVDMzlFMDczODFGRTgwRTYyOEExQUY2M0E2RjVDNzk4MzMKLSBhbW91bnQ6ICZxdW90Ozk4NSZxdW90OwogIGRlbm9tOiBtY3gKLSBhbW91bnQ6ICZxdW90OzAmcXVvdDsKICBkZW5vbTogc3Rha2UKLSBhbW91bnQ6ICZxdW90OzEwMDAmcXVvdDsKICBkZW5vbTogdG9rZW4K"}}),a._v(" "),c("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"aW50ZXJjaGFuZ2VkIHEgYmFuayBiYWxhbmNlcyBjb3Ntb3MxdWhnaDVoazhoZG1xZzhkbDhrd2Z4MmM2anhnNnltcTd4OGg4ZnogLS1ub2RlIHRjcDovL2xvY2FsaG9zdDoyNjY1OQo="}}),a._v(" "),c("p",[a._v("Result")]),a._v(" "),c("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"YmFsYW5jZXM6Ci0gYW1vdW50OiAmcXVvdDsxMCZxdW90OwogIGRlbm9tOiBpYmMvOTk2NzhBMTBBRjY4NEUzM0U4ODk1OTcyN0YyNDU1QUU0MkNDQzY0Q0Q3NkVDRkE5NjkxRTFCNUEzMjM0MkQzMwotIGFtb3VudDogJnF1b3Q7OTAwMDAwMDAwJnF1b3Q7CiAgZGVub206IHN0YWtlCi0gYW1vdW50OiAmcXVvdDsxMDAwJnF1b3Q7CiAgZGVub206IHRva2VuCi0gYW1vdW50OiAmcXVvdDs4NzUmcXVvdDsKICBkZW5vbTogdmN4Cg=="}}),a._v(" "),c("h2",{attrs:{id:"complete-exchange-with-a-partially-filled-sell-order"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#complete-exchange-with-a-partially-filled-sell-order"}},[a._v("#")]),a._v(" Complete Exchange with a Partially Filled Sell Order")]),a._v(" "),c("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"IyBTZWxsIG9yZGVyIHRoYXQgZ2V0cyBwYXJ0aWFsbHkgZmlsbGVkCmludGVyY2hhbmdlZCB0eCBpYmNkZXggc2VuZC1zZWxsT3JkZXIgaWJjZGV4IGNoYW5uZWwtMCBtY3ggMTAgdmN4IDMgLS1mcm9tIGFsaWNlIC0tY2hhaW4taWQgbWFycyAtLWhvbWUgfi8ubWFycwo="}}),a._v(" "),c("p",[a._v("Result")]),a._v(" "),c("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"U2VsbE9yZGVyQm9vazoKLSBhbW91bnREZW5vbTogbWN4CiAgaW5kZXg6IGliY2RleC1jaGFubmVsLTAtbWN4LXZjeAogIG9yZGVySURUcmFjazogNAogIG9yZGVyczoKICAtIGFtb3VudDogNQogICAgY3JlYXRvcjogY29zbW9zMWhmZHN2azNybDNhN3JmZ3h2bmV0bm5mdnB2anh0cmptd3J5bTNmCiAgICBpZDogMAogICAgcHJpY2U6IDE1CiAgLSBhbW91bnQ6IDUKICAgIGNyZWF0b3I6IGNvc21vczFoZmRzdmszcmwzYTdyZmd4dm5ldG5uZnZwdmp4dHJqbXdyeW0zZgogICAgaWQ6IDIKICAgIHByaWNlOiAzCiAgcHJpY2VEZW5vbTogdmN4CkJ1eU9yZGVyQm9vazoKLSBhbW91bnREZW5vbTogbWN4CiAgaW5kZXg6IGliY2RleC1jaGFubmVsLTAtbWN4LXZjeAogIG9yZGVySURUcmFjazogMwogIG9yZGVyczogW10KICBwcmljZURlbm9tOiB2Y3gK"}}),a._v(" "),c("h2",{attrs:{id:"compare-balances-3"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#compare-balances-3"}},[a._v("#")]),a._v(" Compare Balances")]),a._v(" "),c("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"aW50ZXJjaGFuZ2VkIHEgYmFuayBiYWxhbmNlcyBjb3Ntb3MxaGZkc3ZrM3JsM2E3cmZneHZuZXRubmZ2cHZqeHRyam13cnltM2YK"}}),a._v(" "),c("p",[a._v("Result")]),a._v(" "),c("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"YmFsYW5jZXM6Ci0gYW1vdW50OiAmcXVvdDsxMjUmcXVvdDsKICBkZW5vbTogaWJjLzUwRDcwQjc3NDhGQjhBQTY5RjA5MTE0RUM5RTU2MTVDMzlFMDczODFGRTgwRTYyOEExQUY2M0E2RjVDNzk4MzMKLSBhbW91bnQ6ICZxdW90Ozk3NSZxdW90OwogIGRlbm9tOiBtY3gKLSBhbW91bnQ6ICZxdW90OzAmcXVvdDsKICBkZW5vbTogc3Rha2UKLSBhbW91bnQ6ICZxdW90OzEwMDAmcXVvdDsKICBkZW5vbTogdG9rZW4K"}}),a._v(" "),c("h2",{attrs:{id:"complete-exchange-with-a-partially-filled-buy-order"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#complete-exchange-with-a-partially-filled-buy-order"}},[a._v("#")]),a._v(" Complete Exchange with a Partially Filled Buy Order")]),a._v(" "),c("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"IyBCdXkgb3JkZXIgdGhhdCBnZXRzIHBhcnRpYWxseSBmaWxsZWQKaW50ZXJjaGFuZ2VkIHR4IGliY2RleCBzZW5kLWJ1eU9yZGVyIGliY2RleCBjaGFubmVsLTAgbWN4IDEwIHZjeCA1IC0tZnJvbSBhbGljZSAtLWNoYWluLWlkIHZlbnVzIC0taG9tZSB+Ly52ZW51cyAtLW5vZGUgdGNwOi8vbG9jYWxob3N0OjI2NjU5Cg=="}}),a._v(" "),c("p",[a._v("Result")]),a._v(" "),c("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"U2VsbE9yZGVyQm9vazoKLSBhbW91bnREZW5vbTogbWN4CiAgaW5kZXg6IGliY2RleC1jaGFubmVsLTAtbWN4LXZjeAogIG9yZGVySURUcmFjazogNAogIG9yZGVyczoKICAtIGFtb3VudDogNQogICAgY3JlYXRvcjogY29zbW9zMWhmZHN2azNybDNhN3JmZ3h2bmV0bm5mdnB2anh0cmptd3J5bTNmCiAgICBpZDogMAogICAgcHJpY2U6IDE1CiAgcHJpY2VEZW5vbTogdmN4CkJ1eU9yZGVyQm9vazoKLSBhbW91bnREZW5vbTogbWN4CiAgaW5kZXg6IGliY2RleC1jaGFubmVsLTAtbWN4LXZjeAogIG9yZGVySURUcmFjazogNQogIG9yZGVyczoKICAtIGFtb3VudDogNQogICAgY3JlYXRvcjogY29zbW9zMXVoZ2g1aGs4aGRtcWc4ZGw4a3dmeDJjNmp4ZzZ5bXE3eDhoOGZ6CiAgICBpZDogMwogICAgcHJpY2U6IDUKICBwcmljZURlbm9tOiB2Y3gK"}}),a._v(" "),c("h2",{attrs:{id:"compare-balances-4"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#compare-balances-4"}},[a._v("#")]),a._v(" Compare Balances")]),a._v(" "),c("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"aW50ZXJjaGFuZ2VkIHEgYmFuayBiYWxhbmNlcyBjb3Ntb3MxdWhnaDVoazhoZG1xZzhkbDhrd2Z4MmM2anhnNnltcTd4OGg4ZnogLS1ub2RlIHRjcDovL2xvY2FsaG9zdDoyNjY1OQo="}}),a._v(" "),c("p",[a._v("Result")]),a._v(" "),c("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"YmFsYW5jZXM6Ci0gYW1vdW50OiAmcXVvdDsyMCZxdW90OwogIGRlbm9tOiBpYmMvOTk2NzhBMTBBRjY4NEUzM0U4ODk1OTcyN0YyNDU1QUU0MkNDQzY0Q0Q3NkVDRkE5NjkxRTFCNUEzMjM0MkQzMwotIGFtb3VudDogJnF1b3Q7OTAwMDAwMDAwJnF1b3Q7CiAgZGVub206IHN0YWtlCi0gYW1vdW50OiAmcXVvdDsxMDAwJnF1b3Q7CiAgZGVub206IHRva2VuCi0gYW1vdW50OiAmcXVvdDs4MjUmcXVvdDsKICBkZW5vbTogdmN4Cg=="}}),a._v(" "),c("h2",{attrs:{id:"cancel-a-sell-order"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#cancel-a-sell-order"}},[a._v("#")]),a._v(" Cancel a Sell Order")]),a._v(" "),c("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"IyBDYW5jZWwgYSBzZWxsIG9yZGVyCmludGVyY2hhbmdlZCB0eCBpYmNkZXggY2FuY2VsU2VsbE9yZGVyIGliY2RleCBjaGFubmVsLTAgbWN4IHZjeCAwIC0tZnJvbSBhbGljZSAtLWNoYWluLWlkIG1hcnMgLS1ob21lIH4vLm1hcnMK"}}),a._v(" "),c("p",[a._v("Result:")]),a._v(" "),c("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"U2VsbE9yZGVyQm9vazoKLSBhbW91bnREZW5vbTogbWN4CiAgaW5kZXg6IGliY2RleC1jaGFubmVsLTAtbWN4LXZjeAogIG9yZGVySURUcmFjazogNAogIG9yZGVyczogW10KICBwcmljZURlbm9tOiB2Y3gK"}}),a._v(" "),c("h2",{attrs:{id:"cancel-a-buy-order"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#cancel-a-buy-order"}},[a._v("#")]),a._v(" Cancel a Buy Order")]),a._v(" "),c("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"IyBDYW5jZWwgYSBidXkgb3JkZXIKaW50ZXJjaGFuZ2VkIHR4IGliY2RleCBjYW5jZWxCdXlPcmRlciBpYmNkZXggY2hhbm5lbC0wIG1jeCB2Y3ggMyAtLWZyb20gYWxpY2UgLS1jaGFpbi1pZCB2ZW51cyAtLWhvbWUgfi8udmVudXMgLS1ub2RlIHRjcDovL2xvY2FsaG9zdDoyNjY1OQo="}}),a._v(" "),c("p",[a._v("Result:")]),a._v(" "),c("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"QnV5T3JkZXJCb29rOgotIGFtb3VudERlbm9tOiBtY3gKICBpbmRleDogaWJjZGV4LWNoYW5uZWwtMC1tY3gtdmN4CiAgb3JkZXJJRFRyYWNrOiA1CiAgb3JkZXJzOiBbXQogIHByaWNlRGVub206IHZjeAo="}}),a._v(" "),c("h2",{attrs:{id:"exchange-a-token-and-return-to-original-token"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#exchange-a-token-and-return-to-original-token"}},[a._v("#")]),a._v(" Exchange a Token and Return to Original Token")]),a._v(" "),c("p",[a._v("After the exchange of a token from blockchain "),c("code",[a._v("Mars")]),a._v(" to "),c("code",[a._v("Venus")]),a._v(", you end up with a voucher token on the "),c("code",[a._v("Venus")]),a._v(" blockchain. The voucher token was minted into existence on the "),c("code",[a._v("Venus")]),a._v(" blockchain while locked up on the "),c("code",[a._v("Mars")]),a._v(" blockchain. When the process is reversed, the token vouchers on the "),c("code",[a._v("Venus")]),a._v(" is burned and the original token on "),c("code",[a._v("Mars")]),a._v(" can get unlocked.")]),a._v(" "),c("p",[a._v("Practice this exercise with the following commands.")]),a._v(" "),c("p",[a._v("First, create the order pair:")]),a._v(" "),c("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"aW50ZXJjaGFuZ2VkIHR4IGliY2RleCBzZW5kLWNyZWF0ZVBhaXIgaWJjZGV4IGNoYW5uZWwtMCBtY3ggdmN4IC0tZnJvbSBhbGljZSAtLWNoYWluLWlkIG1hcnMgLS1ob21lIH4vLm1hcnMK"}}),a._v(" "),c("p",[a._v("Create the sell order:")]),a._v(" "),c("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"aW50ZXJjaGFuZ2VkIHR4IGliY2RleCBzZW5kLXNlbGxPcmRlciBpYmNkZXggY2hhbm5lbC0wIG1jeCAxMCB2Y3ggMTUgLS1mcm9tIGFsaWNlIC0tY2hhaW4taWQgbWFycyAtLWhvbWUgfi8ubWFycwo="}}),a._v(" "),c("p",[a._v("Create the matching buy order:")]),a._v(" "),c("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"aW50ZXJjaGFuZ2VkIHR4IGliY2RleCBzZW5kLWJ1eU9yZGVyIGliY2RleCBjaGFubmVsLTAgbWN4IDEwIHZjeCAxNSAtLWZyb20gYWxpY2UgLS1jaGFpbi1pZCB2ZW51cyAtLWhvbWUgfi8udmVudXMgLS1ub2RlIHRjcDovL2xvY2FsaG9zdDoyNjY1OQo="}}),a._v(" "),c("p",[a._v("Get the balances:")]),a._v(" "),c("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"aW50ZXJjaGFuZ2VkIHEgYmFuayBiYWxhbmNlcyBjb3Ntb3MxZDc0NWx2dmducmN1emdnZXplMGR1MzB2c2RnM3kwZm1xN3A1Y3QK"}}),a._v(" "),c("p",[a._v("Result:")]),a._v(" "),c("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"YmFsYW5jZXM6Ci0gYW1vdW50OiAmcXVvdDsxNTAmcXVvdDsKICBkZW5vbTogaWJjLzUwRDcwQjc3NDhGQjhBQTY5RjA5MTE0RUM5RTU2MTVDMzlFMDczODFGRTgwRTYyOEExQUY2M0E2RjVDNzk4MzMKLSBhbW91bnQ6ICZxdW90Ozk5MCZxdW90OwogIGRlbm9tOiBtY3gKLSBhbW91bnQ6ICZxdW90OzAmcXVvdDsKICBkZW5vbTogc3Rha2UKLSBhbW91bnQ6ICZxdW90OzEwMDAmcXVvdDsKICBkZW5vbTogdG9rZW4K"}}),a._v(" "),c("p",[a._v("See the balance on "),c("code",[a._v("Venus")]),a._v(" blockchain:")]),a._v(" "),c("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"aW50ZXJjaGFuZ2VkIHEgYmFuayBiYWxhbmNlcyBjb3Ntb3MxNHI0cGtlYXQ3djZyNW41bXNyNGEzM2M4bHB0cXJyeXFhdTN6cmcgIC0tbm9kZSB0Y3A6Ly9sb2NhbGhvc3Q6MjY2NTkK"}}),a._v(" "),c("p",[a._v("Result:")]),a._v(" "),c("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"YmFsYW5jZXM6Ci0gYW1vdW50OiAmcXVvdDsxMCZxdW90OwogIGRlbm9tOiBpYmMvOTk2NzhBMTBBRjY4NEUzM0U4ODk1OTcyN0YyNDU1QUU0MkNDQzY0Q0Q3NkVDRkE5NjkxRTFCNUEzMjM0MkQzMwotIGFtb3VudDogJnF1b3Q7OTAwMDAwMDAwJnF1b3Q7CiAgZGVub206IHN0YWtlCi0gYW1vdW50OiAmcXVvdDsxMDAwJnF1b3Q7CiAgZGVub206IHRva2VuCi0gYW1vdW50OiAmcXVvdDs4NTAmcXVvdDsKICBkZW5vbTogdmN4Cg=="}}),a._v(" "),c("p",[a._v("Check the denom tracing and the path of the token on "),c("code",[a._v("Mars")]),a._v(":")]),a._v(" "),c("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"ICMgU2VlIG9uIGVhY2ggY2hhaW4gdGhlIHNhdmVkIHRyYWNlIGRlbm9tCmludGVyY2hhbmdlZCBxIGliY2RleCBsaXN0LWRlbm9tVHJhY2UK"}}),a._v(" "),c("p",[a._v("Result:")]),a._v(" "),c("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"RGVub21UcmFjZToKLSBjaGFubmVsOiBjaGFubmVsLTAKICBpbmRleDogaWJjLzk5Njc4QTEwQUY2ODRFMzNFODg5NTk3MjdGMjQ1NUFFNDJDQ0M2NENENzZFQ0ZBOTY5MUUxQjVBMzIzNDJEMzMKICBvcmlnaW46IG1jeAogIHBvcnQ6IGliY2RleAo="}}),a._v(" "),c("p",[a._v("See the path of the token voucher received on "),c("code",[a._v("Venus")]),a._v(":")]),a._v(" "),c("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"aW50ZXJjaGFuZ2VkIHEgaWJjZGV4IGxpc3QtZGVub21UcmFjZSAtLW5vZGUgdGNwOi8vbG9jYWxob3N0OjI2NjU5Cg=="}}),a._v(" "),c("p",[a._v("Result:")]),a._v(" "),c("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"RGVub21UcmFjZToKLSBjaGFubmVsOiBjaGFubmVsLTAKICBpbmRleDogaWJjLzUwRDcwQjc3NDhGQjhBQTY5RjA5MTE0RUM5RTU2MTVDMzlFMDczODFGRTgwRTYyOEExQUY2M0E2RjVDNzk4MzMKICBvcmlnaW46IHZjeAogIHBvcnQ6IGliY2RlCg=="}}),a._v(" "),c("p",[a._v("As explained earlier, the process cannot be reversed on the same order book.")]),a._v(" "),c("p",[a._v("To reverse the exchange path, create a new order book pair:")]),a._v(" "),c("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"IyBDcmVhdGUgYSBwYWlyIGluIHRoZSBvcHBvc2l0ZSB3YXkKaW50ZXJjaGFuZ2VkIHR4IGliY2RleCBzZW5kLWNyZWF0ZVBhaXIgaWJjZGV4IGNoYW5uZWwtMCBpYmMvNTBENzBCNzc0OEZCOEFBNjlGMDkxMTRFQzlFNTYxNUMzOUUwNzM4MUZFODBFNjI4QTFBRjYzQTZGNUM3OTgzMyBpYmMvOTk2NzhBMTBBRjY4NEUzM0U4ODk1OTcyN0YyNDU1QUU0MkNDQzY0Q0Q3NkVDRkE5NjkxRTFCNUEzMjM0MkQzMyAtLWZyb20gYWxpY2UgLS1jaGFpbi1pZCBtYXJzIC0taG9tZSB+Ly5tYXJzCg=="}}),a._v(" "),c("p",[a._v("The order book is now created on both blockchains. Check for the SellOrderbook on "),c("code",[a._v("Mars")]),a._v(" and Buyorderbook on "),c("code",[a._v("Venus")]),a._v(" respectively.")]),a._v(" "),c("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"IyBPbiBNYXJzOgpTZWxsT3JkZXJCb29rOgotIGFtb3VudERlbm9tOiBpYmMvNTBENzBCNzc0OEZCOEFBNjlGMDkxMTRFQzlFNTYxNUMzOUUwNzM4MUZFODBFNjI4QTFBRjYzQTZGNUM3OTgzMwogIGluZGV4OiBpYmNkZXgtY2hhbm5lbC0wLWliYy81MEQ3MEI3NzQ4RkI4QUE2OUYwOTExNEVDOUU1NjE1QzM5RTA3MzgxRkU4MEU2MjhBMUFGNjNBNkY1Qzc5ODMzLWliYy85OTY3OEExMEFGNjg0RTMzRTg4OTU5NzI3RjI0NTVBRTQyQ0NDNjRDRDc2RUNGQTk2OTFFMUI1QTMyMzQyRDMzCiAgb3JkZXJJRFRyYWNrOiAwCiAgb3JkZXJzOiBbXQogIHByaWNlRGVub206IGliYy85OTY3OEExMEFGNjg0RTMzRTg4OTU5NzI3RjI0NTVBRTQyQ0NDNjRDRDc2RUNGQTk2OTFFMUI1QTMyMzQyRDMzCg=="}}),a._v(" "),c("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"IyBPbiBWZW51cwpCdXlPcmRlckJvb2s6Ci0gYW1vdW50RGVub206IGliYy81MEQ3MEI3NzQ4RkI4QUE2OUYwOTExNEVDOUU1NjE1QzM5RTA3MzgxRkU4MEU2MjhBMUFGNjNBNkY1Qzc5ODMzCiAgaW5kZXg6IGliY2RleC1jaGFubmVsLTAtaWJjLzUwRDcwQjc3NDhGQjhBQTY5RjA5MTE0RUM5RTU2MTVDMzlFMDczODFGRTgwRTYyOEExQUY2M0E2RjVDNzk4MzMtaWJjLzk5Njc4QTEwQUY2ODRFMzNFODg5NTk3MjdGMjQ1NUFFNDJDQ0M2NENENzZFQ0ZBOTY5MUUxQjVBMzIzNDJEMzMKICBvcmRlcklEVHJhY2s6IDEKICBvcmRlcnM6IFtdCiAgcHJpY2VEZW5vbTogaWJjLzk5Njc4QTEwQUY2ODRFMzNFODg5NTk3MjdGMjQ1NUFFNDJDQ0M2NENENzZFQ0ZBOTY5MUUxQjVBMzIzNDJEMzMK"}}),a._v(" "),c("p",[a._v("Exchange the token from the voucher back to the original token denomination with the following commands.")]),a._v(" "),c("p",[a._v("Create the sell order on "),c("code",[a._v("Mars")]),a._v(":")]),a._v(" "),c("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"IyBFeGNoYW5nZSB0b2tlbnMgYmFjawppbnRlcmNoYW5nZWQgdHggaWJjZGV4IHNlbmQtc2VsbE9yZGVyIGliY2RleCBjaGFubmVsLTAgaWJjLzUwRDcwQjc3NDhGQjhBQTY5RjA5MTE0RUM5RTU2MTVDMzlFMDczODFGRTgwRTYyOEExQUY2M0E2RjVDNzk4MzMgMTAgaWJjLzk5Njc4QTEwQUY2ODRFMzNFODg5NTk3MjdGMjQ1NUFFNDJDQ0M2NENENzZFQ0ZBOTY5MUUxQjVBMzIzNDJEMzMgMSAtLWZyb20gYWxpY2UgLS1jaGFpbi1pZCBtYXJzIC0taG9tZSB+Ly5tYXJzCg=="}}),a._v(" "),c("p",[a._v("Create the buy order on "),c("code",[a._v("Venus")]),a._v(":")]),a._v(" "),c("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"aW50ZXJjaGFuZ2VkIHR4IGliY2RleCBzZW5kLWJ1eU9yZGVyIGliY2RleCBjaGFubmVsLTAgaWJjLzUwRDcwQjc3NDhGQjhBQTY5RjA5MTE0RUM5RTU2MTVDMzlFMDczODFGRTgwRTYyOEExQUY2M0E2RjVDNzk4MzMgNSBpYmMvOTk2NzhBMTBBRjY4NEUzM0U4ODk1OTcyN0YyNDU1QUU0MkNDQzY0Q0Q3NkVDRkE5NjkxRTFCNUEzMjM0MkQzMyAxIC0tZnJvbSBhbGljZSAtLWNoYWluLWlkIHZlbnVzIC0taG9tZSB+Ly52ZW51cyAtLW5vZGUgdGNwOi8vbG9jYWxob3N0OjI2NjU5Cg=="}}),a._v(" "),c("p",[a._v("See balances on "),c("code",[a._v("Mars")]),a._v(":")]),a._v(" "),c("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"aW50ZXJjaGFuZ2VkIHEgYmFuayBiYWxhbmNlcyBjb3Ntb3MxZDc0NWx2dmducmN1emdnZXplMGR1MzB2c2RnM3kwZm1xN3A1Y3QK"}}),a._v(" "),c("p",[a._v("Result:")]),a._v(" "),c("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"YmFsYW5jZXM6Ci0gYW1vdW50OiAmcXVvdDsxNDAmcXVvdDsKICBkZW5vbTogaWJjLzUwRDcwQjc3NDhGQjhBQTY5RjA5MTE0RUM5RTU2MTVDMzlFMDczODFGRTgwRTYyOEExQUY2M0E2RjVDNzk4MzMKLSBhbW91bnQ6ICZxdW90Ozk5NSZxdW90OwogIGRlbm9tOiBtY3gKLSBhbW91bnQ6ICZxdW90OzAmcXVvdDsKICBkZW5vbTogc3Rha2UKLSBhbW91bnQ6ICZxdW90OzEwMDAmcXVvdDsKICBkZW5vbTogdG9rZW4K"}}),a._v(" "),c("p",[a._v("See balances on "),c("code",[a._v("Venus")]),a._v(":")]),a._v(" "),c("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"aW50ZXJjaGFuZ2VkIHEgYmFuayBiYWxhbmNlcyBjb3Ntb3MxNHI0cGtlYXQ3djZyNW41bXNyNGEzM2M4bHB0cXJyeXFhdTN6cmcgIC0tbm9kZSB0Y3A6Ly9sb2NhbGhvc3Q6MjY2NTkK"}}),a._v(" "),c("p",[a._v("Result:")]),a._v(" "),c("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"YmFsYW5jZXM6Ci0gYW1vdW50OiAmcXVvdDs1JnF1b3Q7CiAgZGVub206IGliYy85OTY3OEExMEFGNjg0RTMzRTg4OTU5NzI3RjI0NTVBRTQyQ0NDNjRDRDc2RUNGQTk2OTFFMUI1QTMyMzQyRDMzCi0gYW1vdW50OiAmcXVvdDs5MDAwMDAwMDAmcXVvdDsKICBkZW5vbTogc3Rha2UKLSBhbW91bnQ6ICZxdW90OzEwMDAmcXVvdDsKICBkZW5vbTogdG9rZW4KLSBhbW91bnQ6ICZxdW90Ozg1NSZxdW90OwogIGRlbm9tOiB2Y3gK"}}),a._v(" "),c("p",[a._v("Congratulations, you successfully built and used the "),c("code",[a._v("ibcdex")]),a._v(" module.")]),a._v(" "),c("ul",[c("li",[a._v("You created order books across blockchain token pairs.")]),a._v(" "),c("li",[a._v("You successfully created buy orders and sell orders.")]),a._v(" "),c("li",[a._v("You matched orders in full and in part.")]),a._v(" "),c("li",[a._v("You created an order book for an exchange from Mars to Venus, and another order book from Venus to Mars with the voucher token.")]),a._v(" "),c("li",[a._v("You successfully made an exchange from one blockchain to the other and returned the original token.")])]),a._v(" "),c("p",[a._v("In the next chapter you learn how to add tests to your blockchain module to make sure the logic you are expecting is actually executed.")])],1)}),[],!1,null,null,null);e.default=o.exports}}]);