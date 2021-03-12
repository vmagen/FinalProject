using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DATA.EF
{
    [MetadataType(typeof(RV_UserMetaData))]
    public partial class RV_User
    {
    }

    public class RV_UserMetaData
    {
        [RegularExpression(@"^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$", ErrorMessage = "אימייל שהוזן אינו תקין")]
        public string email;

        [MinLength(8 , ErrorMessage = "סיסמא חייבת להכיל לפחות 8 תווים")]
        public string code;
    }
}
