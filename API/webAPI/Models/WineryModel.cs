using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using DATA.EF;
using webAPI.DTO;
using System.Data.Entity;

namespace webAPI.Models
{
    public class WineryModel
    {
        public static List<RV_Winery> GetWinery(ArvinoDbContext db)
        {
            return db.RV_Winery.Select(e => new RV_Winery()
            {
                wineryId = e.wineryId,
                wineryName = e.wineryName,
                wineryAddress = e.wineryAddress,
                wineryEmail = e.wineryEmail,
                phone = e.phone,
                statusType = e.statusType,
                IconImgPath = e.IconImgPath,
                areaId = e.areaId ??0,
                wineryManagerEmail = e.wineryManagerEmail
            }).ToList();
        }

    }
}