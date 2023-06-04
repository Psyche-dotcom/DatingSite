using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Model.Enitities
{
    public class Payments
    {
        public string Id { get; set; }
        public string Amount { get; set; }
        public string ReferenceNumber { get; set; }
        public string PaymentType { get; set; }
        public string UserId { get; set; }

        public ApplicationUser User { get; set; }
    }
}
