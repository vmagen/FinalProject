using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using DATA.EF;

namespace webAPI.DTO
{
    public class WineryDTO
    {
        public int wineryId;
        public string wineryName;
        public string wineryAddress;
        public string wineryEmail;
        public string phone;
        public string statusType;
        public string IconImgPath;
        public int areaId;
        public string wineryManagerEmail;
    }
}