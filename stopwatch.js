// setInterval(function(){console.log('hello')},1000);
var hour=0;
var sec=0;
var min=0;
var a;
function hello()
{
a=window.setInterval(function()
{
    sec++;
    // console.log(sec);
    if(sec/60==1)
    {
      sec=0;
      min++;
 //     console.log(min);
      if(min/60==1)
      {
         min=0;
         hour++;
      }
     // console.log(hour);
    }
    document.getElementById('display').textContent=hour +" "+min+ " "+sec;
   
    
},1000)
}

function stp()
  {
    clearTimeout(a);


  }
  function reset()

  {
    document.getElementById('display').textContent="00 :" + "00 :" + "00";
  }

 