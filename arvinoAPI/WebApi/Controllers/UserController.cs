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
    [EnableCors(origins:"*",headers:"*",methods:"*")]
    public class UserController : ApiController
    {

        public static arvinoDbContext db = new arvinoDbContext();

        /// <summary>
        /// http://localhost:54186/api/User/email?email=asaf@gmail.com
        /// </summary>
        /// <param name="email"></param>
        /// <returns></returns>
        [HttpGet]
        [Route("api/User/email")]
        public IHttpActionResult GetEmail(string email)
        {
            try
            {
                return Ok(UserModel.GetUser(email, db));
            }
            catch (Exception ex)
            {
                return Content(HttpStatusCode.BadRequest, ex);
            }
        }

        // POST api/<controller>
        public IHttpActionResult Post([FromBody] UserDTO value)
        {
            try
            {
                RV_User user = new RV_User()
                {
                    email = value.email,
                    code = value.code,
                    typeId = value.typeId
                };
                db.RV_User.Add(user);
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