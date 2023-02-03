import { createClient } from 'redis';
import { readFile } from 'fs/promises';

const json = JSON.parse(
    await readFile(
        new URL('./file.json', import.meta.url)
    )
);

const client = createClient({
    url: 'redis://default:123pass@localhost:5000'
});

client.on('error', err => console.log('Redis Client Error', err));
await client.connect();
await client.set('nuevaClave', JSON.stringify(json));
const value = await client.get('HOLA');

await client.disconnect();