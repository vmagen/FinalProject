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
    
    public partial class RV_Service
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public RV_Service()
        {
            this.RV_ServiceImage = new HashSet<RV_ServiceImage>();
        }
    
        public int serviceId { get; set; }
        public string serviceName { get; set; }
        public string serviceCategory { get; set; }
        public string content { get; set; }
        public int price { get; set; }
        public Nullable<int> wineryId { get; set; }
    
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<RV_ServiceImage> RV_ServiceImage { get; set; }
        public virtual RV_Winery RV_Winery { get; set; }
    }
}