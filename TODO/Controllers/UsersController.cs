using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

using TODO.Models;


namespace TODO.Controllers
{
    public class UsersController : Controller
    {
        private readonly TodoDBContext _context;

        public UsersController(TodoDBContext context)
        {
            _context = context;
        }

        [HttpGet]
        [Route("api/Users/GetUser/{user.Username}")]
        public User GetUser([FromBody] User user)
        {
            try
            {
                User _user = _context.TodoUser.Find(user.Username);
                if (_user.Password == user.Password)
                    return user;
                else
                    return null;
            }
            catch
            {
                throw;
            }
        }
        
        [HttpGet]
        [Route("api/Users/Authenticate/{userUsername}")]
        public User AuthenticateUser( String userUsername, String userPassword)
        {
            try
            {
                Console.WriteLine("===========================================================");
                Console.WriteLine(userUsername);
                Console.WriteLine(userPassword);
                User _user = _context.TodoUser.Find(userUsername);
                if (_user.Password == userPassword)
                    return _user;
                else
                    return null;
            }
            catch
            {
                throw;
            }
        }


        [HttpPost]
        [Route("api/Users/RegisterUser/{user}")]
        public User RegisterUser([FromBody] User user)
        {
            try
            {
                List<User> usersList = _context.TodoUser
                    .Where(u => u.Username == user.Username).ToList<User>();
                
                Console.WriteLine(usersList);

                if(usersList.Count <= 0)
                {
                    _context.TodoUser.Add(user);
                    _context.SaveChanges();
                    return user;
                }
                return null;
            }
            catch 
            {
                throw;
            }
        }
    }
}
