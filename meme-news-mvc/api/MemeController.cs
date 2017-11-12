using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using meme_news_mvc.Models;

namespace meme_news_mvc.Controllers
{
    public class MemeController : ApiController
    {

        private readonly ApplicationDbContext _context;

        public MemeController()
        {
            _context = new ApplicationDbContext();
        }


        // GET: api/Meme
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/Meme/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Meme
        //look into sending op
        public IHttpActionResult Post([FromBody] Meme meme)
        {
            _context.Memes.Add(meme);
            _context.SaveChanges();

            return Ok();
        }

        // PUT: api/Meme/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Meme/5
        public void Delete(int id)
        {
        }
    }
}
