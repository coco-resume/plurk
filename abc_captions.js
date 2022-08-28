javascript:
var url = location.href;
url = url.replace('iview.abc.net.au', 'api.iview.abc.net.au/v2');
fetch(url).then(res => res.json()).then(res_json =>
res_json['_embedded']['playlist'].forEach((value, key) => {
if(res_json['_embedded']['playlist'][key]['captions'])
{ window.open(res_json['_embedded']['playlist'][key]['captions']['src-vtt']) }
})).catch(err => alert("CC Unavailable."));


