module.exports = function (req, res, next) {
  const host = req.headers.host;
  const url = req.url;
  const env = "https://api.goldtowncompany.com";
  const forceDomain = "http://gt.org.ua";

  if (host == "www.gt.org.ua" || host == "https://goldtowncompany.com") {
    //   res.writeHead(301, { Location: forceDomain + url });
    redirect(req, forceDomain + req.href);
    // return res.end();
  }

  // if (req.headers.host == "www.old-site.net") {
  //   redirect(req, "http://newsite.com" + req.href);
  //   return;
  // }

  //   return next();
};
