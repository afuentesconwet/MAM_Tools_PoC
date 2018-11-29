const rewire = require("rewire")
const mock = require("./mamMock")
let mamClient = require("../lib/mamClient")
const expect = require('chai').expect

async function main(){
	await mamClient.setProvider('http://nodes.testnet.iota.org')
	const client = await mamClient.createMamFrom({
            mode: 'public',
	    seed: "QKLQUOBGJDZBFJRVYWLKKEQRECZZAYGDDNH9REHNPNWIJUZJIJJSRHASMSGKWYIIPZEVNWOGVEFAZUUUW"

        })
	await mamClient.publish("Test", client.mam, client.iota, false)
	await mamClient.publish("Zweiter Test", client.mam, client.iota, false)

        const r = await mamClient.getMessages(client.channelRoot, 'public')
	console.log("Messages:", r.messages)
	console.log("ROOT: "+client.channelRoot)
	console.log("SEED: "+client.mam.seed)
}

main()
