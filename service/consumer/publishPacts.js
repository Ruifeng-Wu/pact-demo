const pact = require('@pact-foundation/pact-node');
const path = require('path');

pact.publishPacts({
    pactUrls: [path.join(process.cwd(), 'pacts')], // 契约路径
    pactBroker: 'http://localhost:8088', // pact broker 服务地址
    consumerVersion: '1.0.0'
});

console.log('done');
