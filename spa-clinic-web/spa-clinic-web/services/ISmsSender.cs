namespace spa_clinic_web.services
{
    public interface ISmsSender
    {
        Task SendSmsAsync(string number, string message);
    }
}
