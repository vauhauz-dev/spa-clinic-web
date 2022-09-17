using System;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace spa_clinic_web.Models.BaseModels
{
    public class BaseModel
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? Id { get; set; }
    }
}

