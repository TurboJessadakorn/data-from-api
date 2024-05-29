import { fetchUsers } from './api';
import { transformData } from './transform';

const main = async () => {
    const users = await fetchUsers();
    const transformedData = transformData(users);
    console.log(JSON.stringify(transformedData, null, 2));
};

main().catch(console.error);