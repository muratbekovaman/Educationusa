import { authMiddleware } from "@clerk/nextjs";
 
// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your Middleware
export default authMiddleware(
  
  {
  debug: true,
  publicRoutes: ["/", 
  "/events/:id",
  "/api/webhooks/clerk",
  "/api/webhooks/stripe",
  "/api/webhooks/uploadthing"
],
ignoredRoutes: [
"/api/webhooks/clerk",
"/api/webhooks/stripe",
"/api/webhooks/uploadthing"
],

});
 
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};