using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;
using System.Text.Json.Serialization;

namespace spa_clinic_web.Models
{
    public class Customer
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? Id { get; set; }
        public string fullName { get; set; } = null!;
        public DateTime birthDay { get; set; }
        public DateTime createAt { get; set; }
    }
}
