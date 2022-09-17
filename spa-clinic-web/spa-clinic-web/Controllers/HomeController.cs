using Microsoft.AspNetCore.Mvc;
using spa_clinic_web.Models;
using spa_clinic_web.mongodb;
using System.Diagnostics;

namespace spa_clinic_web.Controllers
{
    public class HomeController : Controller
    {
        private readonly CustomersService _customersService;

        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [HttpGet]
        public async Task<string> Get()
        {
            Customer cust = new Customer();
            cust.FullName = "Pedro Pica Piedra";
            await _customersService.CreateAsync(cust);
            return "OK";
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}