﻿//------------------------------------------------------------------------------
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
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;
    
    public partial class arvinoDbContext : DbContext
    {
        public arvinoDbContext()
            : base("name=arvinoDbContext")
        {
            this.Configuration.LazyLoadingEnabled = false;
        }
    
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            throw new UnintentionalCodeFirstException();
        }
    
        public virtual DbSet<RV_Answers> RV_Answers { get; set; }
        public virtual DbSet<RV_AppUser> RV_AppUser { get; set; }
        public virtual DbSet<RV_AreaCategory> RV_AreaCategory { get; set; }
        public virtual DbSet<RV_ChatRoom> RV_ChatRoom { get; set; }
        public virtual DbSet<RV_Comment> RV_Comment { get; set; }
        public virtual DbSet<RV_Competition> RV_Competition { get; set; }
        public virtual DbSet<RV_Event> RV_Event { get; set; }
        public virtual DbSet<RV_EventCategory> RV_EventCategory { get; set; }
        public virtual DbSet<RV_Group> RV_Group { get; set; }
        public virtual DbSet<RV_KeyWords> RV_KeyWords { get; set; }
        public virtual DbSet<RV_Message> RV_Message { get; set; }
        public virtual DbSet<RV_MessageInGroup> RV_MessageInGroup { get; set; }
        public virtual DbSet<RV_NoteFromSystemManager> RV_NoteFromSystemManager { get; set; }
        public virtual DbSet<RV_Question> RV_Question { get; set; }
        public virtual DbSet<RV_Rate> RV_Rate { get; set; }
        public virtual DbSet<RV_Service> RV_Service { get; set; }
        public virtual DbSet<RV_ServiceImage> RV_ServiceImage { get; set; }
        public virtual DbSet<RV_SignedUpToEvent> RV_SignedUpToEvent { get; set; }
        public virtual DbSet<RV_User> RV_User { get; set; }
        public virtual DbSet<RV_UserScore> RV_UserScore { get; set; }
        public virtual DbSet<RV_UserType> RV_UserType { get; set; }
        public virtual DbSet<RV_UserWatchType> RV_UserWatchType { get; set; }
        public virtual DbSet<RV_Wine> RV_Wine { get; set; }
        public virtual DbSet<RV_WineCategory> RV_WineCategory { get; set; }
        public virtual DbSet<RV_Winery> RV_Winery { get; set; }
        public virtual DbSet<RV_WineryImage> RV_WineryImage { get; set; }
        public virtual DbSet<RV_WineryManager> RV_WineryManager { get; set; }
    }
}
