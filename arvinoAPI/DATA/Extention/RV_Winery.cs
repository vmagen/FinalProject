using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DATA.EF
{
    [MetadataType(typeof(RV_WineryMetaData))]
    public partial class RV_Winery
    {

    }
    public class RV_WineryMetaData
    {
        [MinLength(2, ErrorMessage = "יש להזין שם תקין ליקב")]
        public string wineryName;

        [RegularExpression(@"^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$", ErrorMessage = "אימייל שהוזן אינו תקין")]
        public string wineryEmail;

        [RegularExpression(@"\(?\d{3}\)?-? *\d{3}-? *-?\d{4}", ErrorMessage = "מספר טלפון שהוזן אינו תקין")]
        public string phone;

        [Required(AllowEmptyStrings = false, ErrorMessage ="חובה לבחור אזור בו נמצ היקב")]
        public Nullable<int> areaId;
    }
}
