import { Collection, MongoClient, Document as MongoDocument } from "mongodb";

const mongoConfig = () => {
    const uri = "mongodb+srv://admin:Sp4Clinic1@spa-clinic-crm.35aqqxm.mongodb.net/spa-clinic-crm-db";
    const client = new MongoClient(uri);
    
    return {
        getCollection: async (collectionName: string) => {
            try {
                await client.connect();
                let collection: Collection<MongoDocument> = client.db('spa-clinic-crm-db').collection(collectionName);
                let results = await collection.find()
                console.log(results)
            } catch(ex) {
                console.log(ex)
            } finally {
                client.close();
            }
        }
    }
}

export default mongoConfig;