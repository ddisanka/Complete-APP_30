    
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ANC_API.Model
{
    public class StudentContext : IdentityDbContext
    {
        public StudentContext(DbContextOptions options):base(options)
        {

        }
        public DbSet<Student> tblstudents { get; set; }
        public DbSet<Course> tblcourses {get;set;}
        public DbSet<Enrollment> tblenrollment {get;set;}
        public DbSet<ApplicationUser> ApplicationUsers { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<Enrollment>().HasKey(sc => new { sc.ID, sc.CrseCode });
        }
    }
}
