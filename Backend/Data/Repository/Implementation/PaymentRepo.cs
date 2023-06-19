using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Data.Context;
using Data.Repository.Interface;
using Microsoft.EntityFrameworkCore;
using Model.Enitities;
using PayPalCheckoutSdk.Orders;

namespace Data.Repository.Implementation
{
    public class PaymentRepo : IPaymentRepo
    {
        DatingSiteContext _context;

        public PaymentRepo(DatingSiteContext context)
        {
            _context = context;
        }

        public async Task<Payments> AddPayments(Order order)
        {
            try
            {
                var data = new Payments()
                {
                    Id = Guid.NewGuid().ToString(),
                    ReferenceNumber = order.Id,
                    Amount = order.PurchaseUnits.First(x => x.AmountWithBreakdown != null).AmountWithBreakdown.Value,
                    //Description = "Payment",
                    IsActive = true,
                    PaymentTime = DateTime.Now,
                    PaymentType = "payment-type",
                    UserId = Guid.NewGuid().ToString() + "null user",
                };

                await _context.Payments.AddAsync(data);
                return await _context.SaveChangesAsync() > 0 ? data : null;
            }
            catch(Exception ex)
            {
                return new Payments()
                {
                    Description = ex.Message,
                };
            }
        }
        public async Task<bool> IsPaymentActive(string orderId)
        {
             var data =  await _context.Payments.FirstOrDefaultAsync(x => x.ReferenceNumber == orderId);
            if (data == null) return false;
            return data.IsActive;
        }
        public async Task<bool> DeactivatePayment(string orderId)
        {
            var data = await _context.Payments.FirstOrDefaultAsync(x => x.ReferenceNumber == orderId);
            data.IsActive = false;
            _context.Payments.Update(data);
            return await _context.SaveChangesAsync() > 0;
        }

        public async Task<Payments> GetPaymentById(string OrderId)
        {
            return await _context.Payments.FirstOrDefaultAsync(x => x.ReferenceNumber == OrderId);
        }
    }
}
