using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DATA.Extention
{
    [MetadataType(typeof(RV_WineryManagerMetaData))]
    public partial class RV_WineryManager
    {
    }

    public class RV_WineryManagerMetaData
    {
        [RegularExpression(@"^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$", ErrorMessage = "אימייל שהוזן אינו תקין")]
        public string email;

        [MinLength(2, ErrorMessage = "יש להזין שם פרטי תקין")]
        public string firstName;

        [MinLength(2, ErrorMessage = "יש להזין שם משפחה תקין")]
        public string lastName;

        [RegularExpression(@"\(?\d{3}\)?-? *\d{3}-? *-?\d{4}", ErrorMessage = "מספר נייד שהוזן אינו תקין")]
        public string phone;
    }
}
