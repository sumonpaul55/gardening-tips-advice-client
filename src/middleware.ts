import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getCurrenUser } from "./services/authService.ts";

type role = keyof typeof roleBaseRoutes;

const Authroutes = ["/login", "/registration"];
const ProtectedRoute = ["/profile"];

const roleBaseRoutes = {
  // using regex for all profile related path can be accessable for user
  USER: [/^\/user/],
  // using regex for all profile related path can be accessable for admin
  ADMIN: [/^\/admin/],
};
// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  //   get user from decoded token
  const user = await getCurrenUser();
  //   if user not exist go login otherwise not

  if (!user) {
    if (Authroutes.includes(pathname)) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(new URL(`/login?redirect=${pathname}`, request.url));
    }
  }
  // default protected route

  if (ProtectedRoute.includes(pathname)) {
    if (!user) {
      return NextResponse.redirect(new URL(`/login?redirect=${pathname}`, request.url));
    } else {
      return NextResponse.next();
    }
  }

  if (user?.role && roleBaseRoutes[user?.role as role]) {
    const route = roleBaseRoutes[user?.role as role];
    if (route.some((route) => pathname.match(route))) {
      return NextResponse.next();
    }
  }
  return NextResponse.redirect(new URL("/", request.url));
}
// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/admin", "/admin/:page*", "/user", "/login", "/profile", "/registration", "/user/:page*"],
};
