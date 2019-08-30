
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ANC_API.Model
{
    public class Enrollment
    {
        [Key]
        public int EnrollmentID {get; set;}
        public int ID { get; set; }
        public int CrseCode { get; set; }

        public Student Student {get;set;}
        public Course Course {get; set;}

    }
}
