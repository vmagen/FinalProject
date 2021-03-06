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


namespace WebApi.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class WineryManagerController : ApiController
    {
        public static arvinoDbContext db = new arvinoDbContext();


        /// <summary>
        /// http://localhost:54186/api/WineryManager
        /// להוסיף קישוררררררררררררררררררררר
        /// </summary>
        /// <param name="value"></param>
        /// <returns></returns>

        // POST api/<controller>
        public IHttpActionResult Post([FromBody] WineryManagerDTO value)
        {
            try
            {
                RV_WineryManager wineryManager = new RV_WineryManager()
                {
                    firstName = value.firstName,
                    lastName = value.lastName,
                    phone = value.phone,
                    email = value.email
                };
                db.RV_WineryManager.Add(wineryManager);
                db.SaveChanges();
                return Ok();
            }
            catch (Exception ex)
            {
                return Content(HttpStatusCode.BadRequest, ex);
            }
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