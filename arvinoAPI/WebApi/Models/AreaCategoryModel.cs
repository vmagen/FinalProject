using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using DATA.EF;
using WebApi.DTO;
using System.Data.Entity;

namespace WebApi.Models
{
    public class AreaCategoryModel
    {
        public static List<AreaCategoryDTO> GetAreaCategories(arvinoDbContext db)
        {
            return db.RV_AreaCategory.Select(a => new AreaCategoryDTO()
            {
                areaId = a.areaId,
                areaName = a.areaName
            }).ToList();
        }
    }
}