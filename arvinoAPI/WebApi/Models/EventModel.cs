using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using DATA.EF;
using WebApi.DTO;
using System.Data.Entity;

namespace WebApi.Models
{
    public class EventModel
    {
        public static List<EventDTO> GetEventsByWinery(int wineryId, ArvinoDbContext db)
        {
            return db.RV_Event.Where(i => i.wineryId == wineryId).Select(e => new EventDTO()
            {
                eventId = e.eventId,
                eventName = e.eventName,
                content = e.content,
                price = e.price,
                participantsAmount = e.participantsAmount,
                eventDate = e.eventDate,
                startTime = e.startTime,
                eventImgPath = e.eventImgPath,
                categoryId = e.categoryId ?? 0,
                wineryId = e.wineryId ?? 0,
                ticketsPurchased = e.ticketsPurchased ?? 0
            }).ToList();
        }
    }
}