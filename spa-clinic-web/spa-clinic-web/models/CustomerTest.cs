using System;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace spa_clinic_web.models
{
    public class CustomerTest
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? Id { get; set; }

        [BsonElement("fullName")]
        public string FullName { get; set; }

        [BsonElement("birthDay")]
        public DateTime BirthDay { get; set; }

        [BsonElement("createdAt")]
        public DateTime CreatedAt { get; set; }
    }
}

