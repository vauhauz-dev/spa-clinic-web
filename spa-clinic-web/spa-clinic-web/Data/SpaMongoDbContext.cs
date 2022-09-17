using System;
using MongoDB.Driver;
using System.Security.Authentication;
using spa_clinic_web.models;
using Microsoft.EntityFrameworkCore;
using System.Configuration;

namespace spa_clinic_web.Data
{
    public class SpaMongoDbContext : Microsoft.EntityFrameworkCore.DbContext
    {
        public SpaMongoDbContext(DbContextOptions<SpaMongoDbContext> options, IConfiguration configuration)
            : base(options)
        {
            MongoClientSettings settings = MongoClientSettings.FromUrl(
               new MongoUrl(configuration.GetConnectionString("SpaClinicConnectionString"))
           );
            settings.SslSettings =
                new SslSettings() { EnabledSslProtocols = SslProtocols.Tls12 };
            var mongoClient = new MongoClient(settings);
            var database = mongoClient.GetDatabase("spa-clinic-crm-db");
            CustomerTest = database.GetCollection<CustomerTest>("customers");
        }

        public IMongoCollection<CustomerTest> CustomerTest { get; }
    }
}

