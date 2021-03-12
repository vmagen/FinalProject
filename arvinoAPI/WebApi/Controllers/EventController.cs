using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using DATA.EF;
using WebApi.Models;
using WebApi.DTO;
using System.Web.Http.Cors;
using System.Threading.Tasks;
using System.IO;
using System.Web;

namespace WebApi.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class EventController : ApiController
    {
        public static ArvinoDbContext db = new ArvinoDbContext();


        /// <summary>
        /// get winery events
        /// http://localhost:54186/api/Event?wineryId=1
        /// </summary>
        /// <returns></returns>
        public IHttpActionResult Get(int wineryId)
        {
            try
            {
                return Ok(EventModel.GetEventsByWinery(wineryId, db));
            }
            catch (Exception ex)
            {
                return Content(HttpStatusCode.BadRequest, ex);
            }
        }

        // POST api/<controller>
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<controller>/5
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<controller>/5
        public void Delete(int id)
        {
        }
    }
}