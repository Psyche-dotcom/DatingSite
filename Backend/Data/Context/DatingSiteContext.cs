using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Model.Enitities;

namespace Data.Context
{
    public class DatingSiteContext : IdentityDbContext<ApplicationUser>
    {
        public DbSet<Timers> Timers { get; set; }
        public DbSet<Payments> Payments { get; set; }
        public DatingSiteContext(DbContextOptions options) : base(options) {}
        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
        }
    }
}
