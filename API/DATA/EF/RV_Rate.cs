//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace DATA.EF
{
    using System;
    using System.Collections.Generic;
    
    public partial class RV_Rate
    {
        public int rateId { get; set; }
        public Nullable<System.DateTime> rateDate { get; set; }
        public Nullable<System.DateTime> rateTime { get; set; }
        public int wineId { get; set; }
        public int score { get; set; }
        public string ratedByUserEmail { get; set; }
    
        public virtual RV_Wine RV_Wine { get; set; }
    }
}
