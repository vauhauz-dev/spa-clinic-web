using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using spa_clinic_web.Data;
using spa_clinic_web.Models.AccountViewModels;
using spa_clinic_web.services;

var builder = WebApplication.CreateBuilder(args);


var connectionString = builder.Configuration.GetConnectionString("SpaClinicConnectionString");
builder.Services.AddDbContext<SpaMongoDbContext>(options =>
    options.UseCosmos(connectionString, "spa-clinic-crm-db"));


builder.Services.AddDefaultIdentity<IdentityUser>(options => options.SignIn.RequireConfirmedAccount = true)
    .AddEntityFrameworkStores<SpaMongoDbContext>();
builder.Services.AddRazorPages();


builder.Services.Configure<IdentityOptions>(options =>
{
    // Password settings.
    options.Password.RequireDigit = true;
    options.Password.RequireLowercase = true;
    options.Password.RequireNonAlphanumeric = true;
    options.Password.RequireUppercase = true;
    options.Password.RequiredLength = 6;
    options.Password.RequiredUniqueChars = 1;

    // Lockout settings.
    options.Lockout.DefaultLockoutTimeSpan = TimeSpan.FromMinutes(5);
    options.Lockout.MaxFailedAccessAttempts = 5;
    options.Lockout.AllowedForNewUsers = true;

    // User settings.
    options.User.AllowedUserNameCharacters =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-._@+";
    options.User.RequireUniqueEmail = false;
});

builder.Services.ConfigureApplicationCookie(options =>
{
    // Cookie settings
    options.Cookie.HttpOnly = true;
    options.ExpireTimeSpan = TimeSpan.FromMinutes(5);

    options.LoginPath = "/Identity/Account/Login";
    options.AccessDeniedPath = "/Identity/Account/AccessDenied";
    options.SlidingExpiration = true;
});

builder.Services.AddControllersWithViews();
builder.Services.AddRazorPages();

builder.Services.AddIdentityCore<ApplicationUser>()
    .AddRoles<IdentityRole>()
    .AddEntityFrameworkStores<SpaMongoDbContext>()
    .AddSignInManager()
    .AddDefaultTokenProviders();

builder.Services.AddTransient<IEmailSender, AuthMessageSender>();
builder.Services.AddTransient<ISmsSender, AuthMessageSender>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseMigrationsEndPoint();
}
else
{
    app.UseExceptionHandler("/Home/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}




app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

app.UseAuthentication();
app.UseAuthorization();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");
app.MapRazorPages();
app.Run();
