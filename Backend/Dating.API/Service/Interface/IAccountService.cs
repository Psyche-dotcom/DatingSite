using Model.DTO;

namespace Dating.API.Service.Interface
{
    public interface IAccountService
    {
        Task<ResponseDto<string>> RegisterUser(SignUp signUp, string Role);
    }
}
