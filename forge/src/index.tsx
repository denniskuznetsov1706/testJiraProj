import Resolver from '@forge/resolver';
import { getAllProjects } from './my_API';

const resolver = new Resolver();

resolver.define('getText', (req) => {
    console.log(req);

    return 'Hello, world!';
});


resolver.define('getAllProjects', async () => {
    const res = await getAllProjects()
    return res
  })


export const handler = resolver.getDefinitions();

