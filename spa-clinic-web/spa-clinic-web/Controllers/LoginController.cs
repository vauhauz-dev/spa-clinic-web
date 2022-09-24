using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity.UI.V4.Pages.Account.Internal;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.Cosmos.Linq;
using Microsoft.EntityFrameworkCore;
using MongoDB.Driver;
using spa_clinic_web.Data;
using spa_clinic_web.Models.ViewModels;

namespace spa_clinic_web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private readonly SpaMongoDbContext _context;

        public LoginController(SpaMongoDbContext context)
        {
            _context = context;
        }

        [HttpPost]
        public async Task<LoginResponse> Post([FromBody] LoginRequest loginRequest)
        {
            var user = (await _context.User
                .Find(_ => _.UserName.Equals(loginRequest.UserName) 
                    && _.Password.Equals(loginRequest.Password))
                .ToListAsync()).FirstOrDefault();
            var loginResponse = new LoginResponse();
            if (user == null)
            {
                loginResponse.code = 400;
                loginResponse.success = false;
                loginResponse.message = "Login Fail";
            }
            else
            {
                loginResponse.code = 200;
                loginResponse.success = true;
                loginResponse.message = "Login Success";
                loginResponse.userRol = user.userRol;
            }    
            return loginResponse;
        }
    }
}
