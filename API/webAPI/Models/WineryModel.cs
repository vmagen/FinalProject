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
        public static List<WineryDTO> GetWinery(ArvinoDbContext db)
        {
            return db.RV_Winery.Select(e => new WineryDTO()
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

        public static List<RV_Winery> GetWineryByArea(ArvinoDbContext db, int areaId)
        {
            return db.RV_Winery.Where(e => e.areaId == areaId).ToList();
        }
    }
}