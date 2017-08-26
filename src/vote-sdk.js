/* eslint-disable */

var candidate_id = '59a1a14282819f67336f2af5'
;(function(c) {
  var s = document.createElement('script')
  s.src =
    'https://pl3b15c173.hackardennes.com/sdk.js?t=' +
    (new Date().getTime() / 1e3 / 600).toFixed()
  s.type = 'text/javascript'
  s.async = 'true'
  s.onload = s.onreadystatechange = function() {
    var s = this.readyState
    if (s && s != 'complete' && s != 'loaded') return
    try {
      window.top.pl3b15c173.loadApp(c)
    } catch (e) {}
  }
  try {
    document.body.appendChild(s)
  } catch (e) {}
})(candidate_id)
