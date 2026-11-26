// No downloadable binaries or store listings have been approved.
export const releaseCatalog=Object.freeze([
 Object.freeze({id:'ios',name:'iPhone / iPad',channel:'Apple App Store',status:'planned',url:null}),
 Object.freeze({id:'android',name:'Android',channel:'Google Play',status:'planned',url:null}),
 Object.freeze({id:'desktop',name:'Desktop',channel:'Future desktop releases',status:'planned',url:null})
]);
export function approvedDownload(r){
 if(r.status!=='published'||typeof r.url!=='string')return null;
 try{const u=new URL(r.url);if(u.protocol!=='https:'||u.username||u.password||u.port)return null;
 if(r.id==='ios'&&u.hostname==='apps.apple.com'&&/\/id\d+(?:\/|$)/.test(u.pathname))return u.href;
 if(r.id==='android'&&u.hostname==='play.google.com'&&u.pathname==='/store/apps/details'&&u.searchParams.get('id'))return u.href;
 return null;}catch{return null;}
}
