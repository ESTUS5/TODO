
using System.ComponentModel.DataAnnotations;

namespace TODO.Models
{
    public partial class TodoItem
    {
        public int Id { get; set; }
        public int IdUser { get; set; }
        public string Title { get; set; }
        public bool Complete { get; set; }
    }
}
