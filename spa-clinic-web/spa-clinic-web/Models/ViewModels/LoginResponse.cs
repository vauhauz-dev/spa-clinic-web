namespace spa_clinic_web.Models.ViewModels
{
    public class LoginResponse
    {
        public string message { get; set; }
        public int code { get; set; }   
        public bool success { get; set; }
        public string? userRol { get; internal set; }
    }
}
