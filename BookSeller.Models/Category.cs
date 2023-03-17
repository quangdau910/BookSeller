using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace BookSeller.Models
{
    public class Category
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }

        [DisplayName("Display Order")]
        [Range(2, 99999, ErrorMessage = "Display Order must at least 2 int!")]
        public int DisplayOrder { get; set; }
        public DateTime CreatedDateTime { get; set; } = DateTime.Now;


    }
}
