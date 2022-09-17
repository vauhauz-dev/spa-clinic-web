using Microsoft.Extensions.Options;
using MongoDB.Driver;
using spa_clinic_web.Models.MongoService;

namespace spa_clinic_web.Data
{
    public class MongoDBService
    {
/*        private readonly IMongoCollection<Playlist> _playlistCollection;
*/
        public MongoDBService(IOptions<MongoDBSettings> mongoDBSettings)
        {
            MongoClient client = new MongoClient(mongoDBSettings.Value.ConnectionURI);
            IMongoDatabase database = client.GetDatabase(mongoDBSettings.Value.DatabaseName);
/*            _playlistCollection = database.GetCollection<Playlist>(mongoDBSettings.Value.CollectionName);
*/        }

/*        public async Task<List<Playlist>> GetAsync() { }
        public async Task CreateAsync(Playlist playlist) { }*/
        public async Task AddToPlaylistAsync(string id, string movieId) { }
        public async Task DeleteAsync(string id) { }

    }
}
