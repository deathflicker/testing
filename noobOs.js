var elem = document.documentElement;
var load = document.getElementById('load');
var boot = document.getElementById('boot');
var getStarted = document.getElementById('getStarted');
var deskTop = document.getElementById('deskTop');
var browserWindow = document.getElementById('browserWindow');
var browserUrl = document.getElementById('browserUrl');
var browserDisplay = document.getElementById('browserDisplay');
var fileWindow = document.getElementById('fileWindow');
var wallUrl = document.getElementById('wallUrl');
var wallPreview = document.getElementById('wallPreview');
var wallDiv = document.getElementById('wallDiv');
var sysShowBtn = document.getElementById('sysShowBtn');
var sysDiv = document.getElementById('sysDiv');







let counter = 0;
function loading(){
    counter+=1;
    if(counter<=40){
        load.style.width=counter.toString()+'%';
        var Timer2 = setTimeout(loading, 0);
        //var Timer2 = setTimeout(loading, Math.floor(Math.random()*500)+100);
    }
    else{
        clearInterval(Timer2);
        boot.style.display = 'none';
    }
}

function goToLoading(){
    getStarted.style.display='none';
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.webkitRequestFullscreen) { /* Safari */
        elem.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) { /* IE11 */
        elem.msRequestFullscreen();
    }

    loading();
}


function openWindow(which){
    if(which=='browser'){
        browserWindow.style.display = 'block';
        browserWindow.style.zIndex=5;
        fileWindow.style.zIndex = 1;
        browserUrl.focus();
    }
    else if(which=='computer'){
        fileWindow.style.display = 'block';
        fileWindow.style.zIndex=5;
        browserWindow.style.zIndex = 1;
        sysShowBtn.click();
    }
    else if(which=='clBrowser'){
        browserWindow.style.display = 'none';
        browserWindow.style.marginTop='5%';
        browserWindow.style.marginLeft='10%';
        browserWindow.style.width='50%';
        browserWindow.style.height='80%';
        browserWindow.style.zIndex = 1;
        browserDisplay.src="";
        browserUrl.value="";
    }
    else if(which=='maxBrowser'){
        browserWindow.style.marginTop='0%';
        browserWindow.style.marginLeft='0%';
        browserWindow.style.width='100%';
        browserWindow.style.height='100%';
    }
    else if(which=='maxFile'){
        fileWindow.style.marginTop='0%';
        fileWindow.style.marginLeft='0%';
        fileWindow.style.width='100%';
        fileWindow.style.height='100%';
    }
    else if(which=='clFile'){
        fileWindow.style.display = 'none';
        fileWindow.style.marginTop='5%';
        fileWindow.style.marginLeft='10%';
        fileWindow.style.width='50%';
        fileWindow.style.height='80%';
        fileWindow.style.zIndex = 1;
        sysShowBtn.click();
    }
}


function searchBar(event){
    if(event.keyCode==13){
        if(browserUrl.value.includes('https://') || browserUrl.value.includes('http://')){
            browserDisplay.src=browserUrl.value;
        }
        else{
            if(browserUrl.value.includes('.')){
                browserDisplay.src = 'https://'+browserUrl.value;
                browserUrl.value = 'https://'+browserUrl.value;            
            }
            else{
                browserDisplay.src = 'https://www.bing.com/search?q='+browserUrl.value.replace(' ', '%20');
            }
        }
    }
}


function setWall(img){
    if(img=='new'){
        if(wallUrl.value!="" && wallUrl.value!=" "){
            deskTop.style.backgroundImage="url("+wallUrl.value+")";
        }
    }
    else{
        deskTop.style.backgroundImage="url(wallpaper1.png)";
        wallPreview.src= "wallpaper1.png";
        wallUrl.value = '';
    }
}

function previewWall(){
    if(wallUrl.value!="" && wallUrl.value!=" "){
        wallPreview.src = wallUrl.value;        
    }
    else{
        wallPreview.src = 'wallpaper1.png'
    }
}


function showFile(which){
    if(which=='showSys'){
        wallDiv.style.display = 'none';
        sysDiv.style.display = 'flex';
    }
    else if(which=='showWall'){
        wallDiv.style.display = 'flex';
    }
    else if(which=='showBright'){
        alert('hi');
    }
}


sysShowBtn.click();