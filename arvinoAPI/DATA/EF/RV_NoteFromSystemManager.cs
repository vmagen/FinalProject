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
    
    public partial class RV_NoteFromSystemManager
    {
        public int noteId { get; set; }
        public string content { get; set; }
        public Nullable<System.DateTime> noteDate { get; set; }
        public Nullable<System.DateTime> sentTime { get; set; }
        public string noteStatus { get; set; }
        public string systemManagerEmail { get; set; }
        public string targetEmail { get; set; }
    
        public virtual RV_User RV_User { get; set; }
        public virtual RV_WineryManager RV_WineryManager { get; set; }
    }
}
