using Data.Repository.Implementation;
using Data.Repository.Interface;
using Dating.API.Profiles;
using Dating.API.Service.Implementation;
using Dating.API.Service.Interface;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using System.Text;

namespace Dating.API.Extension
{
    public static class RegisteredServices
    {
        public static void ConfigureServices(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddScoped<IAccountRepo, AccountRepo>();
            services.AddScoped<IAccountService, AccountService>();
            services.AddScoped<IGenerateJwt, GenerateJwt>();
            services.AddScoped<ICloudinaryService, CloudinaryService>();
            services.AddAutoMapper(typeof(ProjectProfile));
        }
    }
}
