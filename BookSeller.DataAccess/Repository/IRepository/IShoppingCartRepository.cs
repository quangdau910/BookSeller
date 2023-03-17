﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using BookSeller.Models;

namespace BookSeller.DataAccess.Repository.IRepository
{
    public interface IShoppingCartRepository : IRepository<ShoppingCart>
    {
        int IncrementCount (ShoppingCart shoppingCart, int count);
        int DecrementCount (ShoppingCart shoppingCart, int count);

    }
}