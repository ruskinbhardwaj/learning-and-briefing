// The build marks articles stale as of build time. This re-checks against the
// reader's clock so banners appear even if the site hasn't been rebuilt.
document.querySelectorAll("[data-review-by]").forEach(function (el) {
  var reviewBy = new Date(el.getAttribute("data-review-by") + "T23:59:59Z");
  if (!isNaN(reviewBy) && Date.now() > reviewBy.getTime()) el.hidden = false;
});
