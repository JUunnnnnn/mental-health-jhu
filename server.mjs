import http from 'node:http';
import { readFile } from 'node:fs/promises';
const files = {'/':'index.html','/app.js':'app.js','/style.css':'style.css','/hopkins-theme.css':'hopkins-theme.css','/fonts/hopkins-slab-regular.otf':'fonts/hopkins-slab-regular.otf','/fonts/hopkins-slab-semibold.otf':'fonts/hopkins-slab-semibold.otf','/fonts/hopkins-slab-bold.otf':'fonts/hopkins-slab-bold.otf','/model.js':'model.js'};
const types = {html:'text/html',js:'text/javascript',css:'text/css',otf:'font/otf'};
http.createServer(async (req,res) => {
  const file = files[new URL(req.url,'http://localhost').pathname];
  if (!file) { res.writeHead(404); return res.end('Not found'); }
  try {
    const body = await readFile(new URL(`./web/${file}`,import.meta.url));
    res.writeHead(200,{'Content-Type':`${types[file.split('.').pop()]}; charset=utf-8`,'Cache-Control':'no-store','X-Content-Type-Options':'nosniff','Content-Security-Policy':"default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self' data:; connect-src 'self'; object-src 'none'; base-uri 'none'; frame-ancestors 'none'"}); res.end(body);
  } catch { res.writeHead(500); res.end('Unable to load app'); }
}).listen(3000,'127.0.0.1',()=>console.log('Bluejay is ready at http://localhost:3000'));
