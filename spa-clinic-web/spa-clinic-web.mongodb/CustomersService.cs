using System;
using MongoDB.Driver;
using spa_clinic_web.Models;
using spa_clinic_web.Models.Settings;
using Microsoft.Extensions.Options;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace spa_clinic_web.mongodb
{
    public class CustomersService
    {
        private readonly IMongoCollection<Customer> _customerCollection;

        public CustomersService(IOptions<SpaClinicDbSettings> bookStoreDatabaseSettings)
        {
            var mongoClient = new MongoClient(
                bookStoreDatabaseSettings.Value.ConnectionString);

            var mongoDatabase = mongoClient.GetDatabase(
                bookStoreDatabaseSettings.Value.DatabaseName);

            _customerCollection = mongoDatabase.GetCollection<Customer>(
                bookStoreDatabaseSettings.Value.CustomersCollectionName);
        }

        public async Task<List<Customer>> GetAsync() =>
        await _customerCollection.Find(_ => true).ToListAsync();

        public async Task<Customer?> GetAsync(string id) =>
            await _customerCollection.Find(x => x.Id == id).FirstOrDefaultAsync();

        public async Task CreateAsync(Customer newBook) =>
            await _customerCollection.InsertOneAsync(newBook);
    }
}

