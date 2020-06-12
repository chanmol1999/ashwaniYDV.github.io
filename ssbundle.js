const loadSDKScript = () => {
    (function(w,t,c,p,s,e){p=new Promise(function(r){w[c]={client:function(){if(!s){
    s=document.createElement(t);s.src='https://js.cobrowse.io/CobrowseIO.js';s.async=1;
    e=document.getElementsByTagName(t)[0];e.parentNode.insertBefore(s,e);s.onload=function()
    {r(w[c]);};}return p;}};});})(window,'script','CobrowseIO');

    CobrowseIO.license = "GDlHlzhpzAVO9g";

    CobrowseIO.client().then(function(){
        CobrowseIO.start();
    });
}

const onStartScreenSharing = () => {
    CobrowseIO.client().then(function(){
        CobrowseIO.start();
        CobrowseIO.customData = {
            guest_id
        }
    });
}

const onFinishScreenSharing = () => {
    if (CobrowseIO.currentSession) CobrowseIO.currentSession.end();
    CobrowseIO.client().then(function(){
        CobrowseIO.stop();
    });
}

const setMetaData = (guest_id) => {
    CobrowseIO.customData = {
        guest_id
    }
}

const endSession = () => {
    if (CobrowseIO.currentSession) CobrowseIO.currentSession.end();
}
