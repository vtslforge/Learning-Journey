// Handles routes that were not matched by any application router.
exports.notFound = (req, res) => {
  res.status(404).render("pageNot");
}
