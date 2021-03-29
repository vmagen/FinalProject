using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using DATA.EF;
using webAPI.DTO;
using System.Data.Entity;

namespace webAPI.Models
{
    public class WineryManagerModel
    {
        public static RV_WineryManager GetWineryManager(string email, ArvinoDbContext db)
        {
            return db.RV_WineryManager.SingleOrDefault(x => x.email == email);
        }
    }
}