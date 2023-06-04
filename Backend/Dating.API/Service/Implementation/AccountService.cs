using Data.Repository.Interface;
using Dating.API.Service.Interface;
using Model.DTO;

namespace Dating.API.Service.Implementation
{
    public class AccountService : IAccountService
    {
        private readonly IAccountRepo _accountRepo;
        private readonly ILogger<AccountService> _logger;

        public AccountService(IAccountRepo accountRepo, ILogger<AccountService> logger)
        {
            _accountRepo = accountRepo;
            _logger = logger;
        }
        public async Task<ResponseDto<string>> RegisterUser(SignUp signUp, string Role)
        {
            var response = new ResponseDto<string>();
            try
            {
                var checkUserExist = _accountRepo.FindUserByEmailAsync(signUp.Email);
                if (checkUserExist != null)
                {
                    response.ErrorMessages = new List<string>() { "User with the email already exist"};
                    response.StatusCode = 400;
                    response.DisplayMessage = "Error";
                    return response;
                }
                var checkRole = await _accountRepo.RoleExist(Role);
                if(checkRole == false)
                {
                    response.ErrorMessages = new List<string>() { "Role is not available" };
                    response.StatusCode = StatusCodes.Status404NotFound;
                    response.DisplayMessage = "Error";
                    return response;
                }
                //var createUser = await _accountRepo.SignUpAsync()
                return response;
            }
            catch (Exception ex)
            {
                response.ErrorMessages = new List<string>() { "Error in resgistering the user" };
                response.StatusCode = 500;
                response.DisplayMessage = "Error";
                return response;

            }
        }

    }
}
