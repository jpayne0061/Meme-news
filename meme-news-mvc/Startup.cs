using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(meme_news_mvc.Startup))]
namespace meme_news_mvc
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
