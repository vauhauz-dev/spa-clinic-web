using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;

namespace spa_clinic_web.models
{
    public class User
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? Id { get; set; }

        [BsonElement("userName")]
        public string? UserName { get; set; }
        
        [BsonElement("password")]
        public string? Password { get; set; }

        [BsonElement("createdAt")]
        public DateTime CreateAt { get; set; }
        [BsonElement("userRol")]
        public string? userRol { get; set; }
    }
}
