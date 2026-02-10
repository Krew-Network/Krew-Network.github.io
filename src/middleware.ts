export const onRequest = ({ url }, next) => {
  if (url.pathname.startsWith("/.well-known/matrix")) {
    return Response.redirect(
      `https://matrix.thekrew.network${url.pathname}${url.search}`,
      302
    );
  }
  return next();
};
