{\rtf1\ansi\ansicpg950\cocoartf2761
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 // \uc0\u27599 \u27425 \u25171 \u38283  App \u26178 \u65292 \u24375 \u21046 \u21435 \u38642 \u31471 \u27298 \u26597 \u26377 \u27794 \u26377 \u26032 \u27284 \u26696 \
self.addEventListener('install', (e) => \{\
  self.skipWaiting();\
\});\
\
self.addEventListener('activate', (e) => \{\
  e.waitUntil(clients.claim());\
\});\
\
// \uc0\u19981 \u20351 \u29992 \u24555 \u21462 \u65292 \u19968 \u24459 \u30452 \u25509 \u25235 \u21462 \u26368 \u26032 \u30340 \u38642 \u31471 \u32178 \u38913 \u36039 \u26009 \
self.addEventListener('fetch', (e) => \{\
  e.respondWith(fetch(e.request));\
\});\
}