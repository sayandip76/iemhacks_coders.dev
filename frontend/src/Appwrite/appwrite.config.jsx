import { Client, Storage } from "appwrite";

const client = new Client();

const storage = new Storage(client);

client
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('64d7a5b094af49361c02') 
;
export default storage;

