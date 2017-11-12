using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace meme_news_mvc.Models
{
    public class Meme
    {

        public int Id { get; set; }
        public string ImageLocation { get; set; }
        public string Htmltext { get; set; }

    }
}