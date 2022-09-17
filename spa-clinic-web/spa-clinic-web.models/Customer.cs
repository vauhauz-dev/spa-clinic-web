using System;
using MongoDB.Bson.Serialization.Attributes;
using spa_clinic_web.Models.BaseModels;

namespace spa_clinic_web.Models
{
    public class Customer : BaseModel
    {
        [BsonElement("fullName")]
        public string FullName { get; set; }

        [BsonElement("birthDay")]
        public DateTime BirthDay { get; set; }

        [BsonElement("createdAt")]
        public DateTime CreatedAt { get; set; }

        public Customer()
        {
        }

    }
}

