import NodeCache from 'node-cache';

const publicKeysCache = new NodeCache({ stdTTL: 0, errorOnMissing: false });
publicKeysCache.set(123,123);
console.log(publicKeysCache.get('123'));

