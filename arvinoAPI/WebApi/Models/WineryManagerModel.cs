using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using DATA.EF;
using WebApi.DTO;
using System.Data.Entity;
using DATA.EF;
using WebApi.DTO;
using System.Data.Entity;

namespace WebApi.Models
{
    public class WineryManagerModel
    {
        public static List<RV_AreaCategory> GetAreas(arvinoDbContext db)
        {
            return db.RV_AreaCategory.Select(a => new RV_AreaCategory()
            {
                areaName = a.areaName
            }).ToList();
        }
    }
}