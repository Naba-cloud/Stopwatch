var a;
var hour,sec,min;
hour=0;
  sec=0;
  min=0;
function hello()
{
  
  
  // var a;
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

  document.getElementById('btn').disabled=true;

}

function stp()
  {
    
    clearTimeout(a);
    document.getElementById('btn').disabled=false;

  }
  function reset()

  {
    min=0;
    sec=0;
    hour=0;
    
    

    document.getElementById('display').textContent="0"+hour+ " "+ "0"+min+ " "+"0"+sec;
    stp();
    document.getElementById('btn').disabled=false;
   
   
  

  }
