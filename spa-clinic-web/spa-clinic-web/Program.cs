using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using spa_clinic_web.Data;
//using spa_clinic_web.Models;
//using spa_clinic_web.Models.Settings;
//using spa_clinic_web.mongodb;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
//builder.Services.Configure<SpaClinicDbSettings>(
//    builder.Configuration.GetSection("SpaClinicDatabase"));

//builder.Services.AddSingleton<CustomersService>();

var connectionString = builder.Configuration.GetConnectionString("SpaClinicConnectionString");
builder.Services.AddDbContext<SpaMongoDbContext>(options =>
    options.UseCosmos(connectionString, "spa-clinic-crm-db"));


builder.Services.AddControllersWithViews();
builder.Services.AddRazorPages();

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

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");
app.MapRazorPages();
app.Run();
