using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace spa_clinic_web.Controllers
{
    [Authorize]
    public class SecuredController : Controller
    {
        // GET: SecuredController
        public ActionResult Index()
        {
            return View();
        }
    }
}
