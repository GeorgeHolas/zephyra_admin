import { clerkMiddleware } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

const publicRoutes = ['/sign-in', '/api/trpc'];

export default clerkMiddleware((auth, request) => {
  const { pathname } = new URL(request.url);
  
  if (!publicRoutes.some(route => pathname.startsWith(route))) {
    const { userId } = auth();
    if (!userId) {
      const signInUrl = new URL('/sign-in', request.url);
      signInUrl.searchParams.set('redirect_url', request.url);
      return NextResponse.redirect(signInUrl);
    }
  }
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
