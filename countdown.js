jQuery(function($){
var launch = new Date(2021,2,22,17,30,0);
var Days = $('#Days');
var Hours = $('#Hours');
var Minutes = $('#Minutes');
var Secondes = $('#Secondes');
setDate();

function setDate(){
    var now = new Date();
    var s = (launch.getTime() - now.getTime())/1000;
    var d = Math.floor(s/86400);
    Days.html('<h3>'+d+'</h3>');
    s -= d*86400;
    var h = Math.floor(s/3600);
    Hours.html('<h3>'+h+'</h3>');
    s -= h*3600;
    var m = Math.floor(s/60);
    Minutes.html('<h3>'+m+'</h3>');
    s -= m*60;
    var s = Math.floor(s);
    Secondes.html('<h3>'+s+'</h3>');
    setTimeout(setDate,1000);
   }

});