using System;
namespace spa_clinic_web.Models.Settings
{
    public class SpaClinicDbSettings
    {
        public string ConnectionString { get; set; } = null!;

        public string DatabaseName { get; set; } = null!;

        public string CustomersCollectionName { get; set; } = null!;

        public SpaClinicDbSettings()
        {
        }
    }
}

