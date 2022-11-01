import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import firebase from './lib/firebase';

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    const cookie = request.cookies.get('bearer')

    if (!firebase.getAuth().currentUser) {
        console.log('No bearer cookie found.', firebase.getAuth().currentUser)
        return NextResponse.redirect(new URL('/login', request.url))
    }
}

export const config = {
    matcher: [
      /*
       * Match all request paths except for the ones starting with:
       * - api (API routes)
       * - static (static files)
       * - favicon.ico (favicon file)
       */
      '/((?!api|static|_next|favicon.ico|vercel.svg|login).*)'
    ],
  }
  