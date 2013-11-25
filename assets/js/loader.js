  var cSpeed=10;
  var cWidth=128;
  var cHeight=128;
  var cTotalFrames=32;
  var cFrameWidth=128;
  var cImageSrc='/images/loader.gif';

  var cImageTimeout=false;
  var cIndex=0;
  var cXpos=0;
  var cPreloaderTimeout=false;
  var SECONDS_BETWEEN_FRAMES=0;

  function startAnimation(){

    document.getElementById('loading').style.backgroundImage='url('+cImageSrc+')';
    document.getElementById('loading').style.width=cWidth+'px';
    document.getElementById('loading').style.height=cHeight+'px';

    //FPS = Math.round(100/(maxSpeed+2-speed));
    FPS = Math.round(100/cSpeed);
    SECONDS_BETWEEN_FRAMES = 1 / FPS;

    cPreloaderTimeout=setTimeout('continueAnimation()', SECONDS_BETWEEN_FRAMES/1000);

  }

  function continueAnimation(){

    cXpos += cFrameWidth;
    //increase the index so we know which frame of our animation we are currently on
    cIndex += 1;

    //if our cIndex is higher than our total number of frames, we're at the end and should restart
    if (cIndex >= cTotalFrames) {
      cXpos =0;
      cIndex=0;
    }

    if(document.getElementById('loading'))
      document.getElementById('loading').style.backgroundPosition=(-cXpos)+'px 0';

    cPreloaderTimeout=setTimeout('continueAnimation()', SECONDS_BETWEEN_FRAMES*1000);
  }

  function stopAnimation(){//stops animation
    clearTimeout(cPreloaderTimeout);
    cPreloaderTimeout=false;
  }

  function imageLoader(s, fun)//Pre-loads the sprites image
  {
    clearTimeout(cImageTimeout);
    cImageTimeout=0;
    genImage = new Image();
    genImage.onload=function (){cImageTimeout=setTimeout(fun, 0)};
    genImage.onerror=new Function('alert(\'Could not load the image\')');
    genImage.src=s;
  }

  //The following code starts the animation
  new imageLoader(cImageSrc, 'startAnimation()');
