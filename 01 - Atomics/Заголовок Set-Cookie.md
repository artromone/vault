#prog #prog/network /header #prog #prog/network  #prog #prog/network /cookie

```http
HTTP/1.0 200 OK
Content-type: text/html
Set-Cookie: JSESSIONID=94F71DB44BDC3C9C41E0931845DA89DD; Path=/; HttpOnly
```

Обычно куки запоминаются браузером и посылаются в HTTP-заголовке `Cookie` с каждым новым запросом к одному и тому же серверу

Так сервер понимает, что это сессия

```http
GET /sample_page.html HTTP/1.1
Host: www.example.org
Cookie: JSESSIONID=94F71DB44BDC3C9C41E0931845DA89DD
```
