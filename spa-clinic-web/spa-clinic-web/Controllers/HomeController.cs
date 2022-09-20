using Microsoft.AspNetCore.Mvc;
//using spa_clinic_web.Models;
//using spa_clinic_web.mongodb;
using System.Diagnostics;

namespace spa_clinic_web.Controllers
{
    public class HomeController : Controller
    {
        //private readonly CustomersService _customersService;

        [HttpGet]
        public IActionResult Index()
        {
            return View();
        }
    }
}