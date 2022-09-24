using System.ComponentModel.DataAnnotations;

namespace spa_clinic_web.Models.AccountViewModels
{
    public class ForgotPasswordViewModel
    {
        [Required]
        [EmailAddress]
        public string Email { get; set; }
    }
}
