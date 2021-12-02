import 'reflect-metadata';

import { runServer } from './app';

async function main() {
    //start server
    const app = await runServer();
    //set port
    const PORT = process.env.PORT || 3000;

    app.listen(PORT);
    console.log(`Server running on port ${PORT}`);
}

main();