using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using TODO.Models;

namespace TODO.Models
{
    public partial class TodoDBContext : DbContext
    {

        public TodoDBContext(DbContextOptions<TodoDBContext> options)
            : base(options)
        {
        }

        public virtual DbSet<TodoItem> TodoItem { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<TodoItem>(entity =>
            {
                entity.Property(e => e.Id).ValueGeneratedOnAdd();//ValueGeneratedNever();

                //entity.Property(e => e.UserID);

                entity.Property(e => e.Complete).HasColumnName("Complete");

                entity.Property(e => e.Title)
                    .IsRequired()
                    .HasColumnName("Title");
            });
            
            /*modelBuilder.Entity<Users>(entity =>
            {
                entity.Property(e => e.UserID).ValueGeneratedOnAdd();

                entity.Property(e => e.Username).IsRequired().HasColumnName("Username");

                entity.Property(e => e.Password).IsRequired().HasColumnName("Password");

                entity.Property(e => e.Email).HasColumnName("Email");


            });*/
            
            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);

        //public virtual DbSet<Users> Users { get; set; }
    }
}
