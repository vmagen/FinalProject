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
using System.ComponentModel.DataAnnotations;
using System.Data.Entity.Validation;

namespace WebApi.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class WineryManagerController : ApiController
    {
        public static ArvinoDbContext db = new ArvinoDbContext();


        /// <summary>
        /// http://localhost:54186/api/WineryManager
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
                    email = value.email,
                    firstName = value.firstName,
                    lastName = value.lastName,
                    phone = Convert.ToString(value.phone),
                    registrationDate = DateTime.Now 
                };
                db.RV_WineryManager.Add(wineryManager);
                db.SaveChanges();
                return Ok();
            }
            catch (DbEntityValidationException ex)
            {
                string error = "";
                foreach (DbEntityValidationResult vr in ex.EntityValidationErrors)
                {
                    foreach (DbValidationError er in vr.ValidationErrors)
                    {
                        error += er.ErrorMessage + "\n";
                    }
                }
                return Content(HttpStatusCode.BadRequest, error);
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