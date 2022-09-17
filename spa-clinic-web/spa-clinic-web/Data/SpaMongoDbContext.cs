using System;
using MongoDB.Driver;
using System.Security.Authentication;
using spa_clinic_web.Models;

namespace spa_clinic_web.Data
{
    public class SpaMongoDbContext : Microsoft.EntityFrameworkCore.DbContext
    {
        public SpaMongoDbContext(IConfiguration configuration)
        {
            // Connect to the Mongo database and obtain reference to Book collection
            MongoClientSettings settings = MongoClientSettings.FromUrl(
                new MongoUrl(configuration.GetConnectionString("SpaClinicConnectionString"))
            );
            settings.SslSettings =
                new SslSettings() { EnabledSslProtocols = SslProtocols.Tls12 };
            var mongoClient = new MongoClient(settings);
            var database = mongoClient.GetDatabase("BookstoreDb");
            Customers = database.GetCollection<Customer>("Customer");
        }

        // Readonly IMongoCollection, our equivalent to DbSet
        public IMongoCollection<Customer> Customers { get; }
    }
}

