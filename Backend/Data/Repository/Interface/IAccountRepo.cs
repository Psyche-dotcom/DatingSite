using Model.DTO;
using Model.Enitities;
using System.ComponentModel.DataAnnotations;

namespace Data.Repository.Interface
{
    public interface IAccountRepo
    {
        Task<ApplicationUser> SignUpAsync(ApplicationUser user, string Password);
        Task<bool> CheckAccountPassword(ApplicationUser user, string password);
        Task<bool> CheckEmailConfirmed(ApplicationUser user);
        Task<bool> AddRoleAsync(ApplicationUser user, string Role);
        Task<string> ForgotPassword(ApplicationUser user);
        Task<bool> ConfirmEmail(string token, ApplicationUser user);
        Task<ResetPassword> ResetPassword(ApplicationUser user, ResetPassword resetPassword);
        Task<bool> RoleExist(string Role);
        Task<ApplicationUser> FindUserByEmailAsync(string email);
        Task<ApplicationUser> FindUserByIdAsync(string id);
        Task<bool> UpdateUserInfo(string email, UpdateUserDto user);
        Task<PaginatedUser> GetAllUser(int pageNumber, int perPageSize);
        Task<bool> DeleteUserByEmail(ApplicationUser user);
    }
}
