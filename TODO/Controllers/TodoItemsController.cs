using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

using TODO.Models;


namespace TODO.Controllers
{
    public class TodoItemsController : Controller 
    {
        private readonly TodoDBContext _context;

        public TodoItemsController(TodoDBContext context)
        {
            _context = context;
        }
        
        [HttpGet]
        [Route("api/TodoItems/GetAllTodoItems")]
        public IEnumerable<TodoItem> GetAllTodoItems()
        {
            try
            {
                return _context.TodoItem.ToList();
            }
            catch
            {
                throw;
            }
        }

        // GET: api/TodoItems/5
        [HttpGet]
        [Route("api/TodoItems/GetTodoItem/{id}")]
        public TodoItem GetTodoItem(int id)
        {
            try
            {
                TodoItem todo = _context.TodoItem.Find(id);
                return todo;
            }
            catch
            {
                throw;
            }
        }

        // PUT: api/TodoItems/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPut]
        [Route("api/TodoItems/PutTodoItem/{id}")]
        public int PutTodoItem([FromBody] TodoItem todoItem)
        {
            try
            {
                _context.Entry(todoItem).State = EntityState.Modified;
                _context.SaveChanges();

                return 1;
            }
            catch
            {
                throw;
            }

        }

        // POST: api/TodoItems
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPost]
        [Route("api/TodoItems/PostTodoItem")]
        public TodoItem PostTodoItem([FromBody] TodoItem todoItem)
        {
            try
            {
                _context.TodoItem.Add(todoItem);
                _context.SaveChanges();
                return todoItem;
            }
            catch
            {
                throw;
            }
        }

        // DELETE: api/TodoItems/5
        [HttpDelete]
        [Route("api/TodoItems/DeleteTodoItem/{id}")]
        public int DeleteTodoItem(int id)
        {
            try
            {
                TodoItem todo = _context.TodoItem.Find(id);
                _context.TodoItem.Remove(todo);
                _context.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }

    }
}
