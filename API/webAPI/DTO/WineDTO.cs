﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using DATA.EF;

namespace webAPI.DTO
{
    public class WineDTO
    {
        public int wineId;
        public string wineName;
        public string content;
        public int price;
        public string wineImgPath;
        public string wineLabelPath;
        public int categoryId;
        public int wineryId;
    }
}