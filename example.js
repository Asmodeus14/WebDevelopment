function myDisplayer(some) {
    document.querySelector(".container").innerHTML = some;
  }
  
  let myPromise = new Promise(function(myResolve, myReject) {
    let x = "hello";
  
  // The producing code (this may take some time)
  try {
    x=x/0;
    
  } catch
   {
    myReject("errror")
  }
  });
  
  myPromise.then(
    function(value) {myDisplayer(value);},
    function(error) {myDisplayer(error);}
  );
  
  