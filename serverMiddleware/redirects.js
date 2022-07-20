module.exports = function (req, res, next) {
  const host = req.headers.host;
  const url = req.url;
  const env = "https://api.goldtowncompany.com";
  const forceDomain = "http://gt.org.ua";

  if (env === "production" && host !== "www.gt.org.ua") {
    res.writeHead(301, { Location: forceDomain + url });
    return res.end();
  }

  return next();
};
