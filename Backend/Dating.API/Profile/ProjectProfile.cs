using AutoMapper;
using Model.DTO;
using Model.Enitities;

namespace Dating.API.Profiles
{
    public class ProjectProfile : Profile
    {
        public ProjectProfile()
        {
            CreateMap<ApplicationUser, DisplayFindUserDTO>().ReverseMap();
        }
    }
}
