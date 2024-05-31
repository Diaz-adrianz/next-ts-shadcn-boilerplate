import { Setting } from '@/config';
import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const locale = request.cookies.get('lang')?.value || Setting.defaultLanguage;

  const response = NextResponse.next();
  response.headers.set('x-lang', locale);

  return response;
}
