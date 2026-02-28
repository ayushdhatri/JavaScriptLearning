// function along with lexical scope is called closure.
function x(){
    var i = 1;
    setTimeout(function(){
        console.log(i);
    },4000);
    console.log("Hello Ayush");
}

x();

function y(){
    for(var i = 1;i<=5;i++){
        function close(x){
          setTimeout(function(){
         console.log(x);   
        }, x * 1000);

        }
        close(i);
       
    }
    console.log("Hello Ayush");
}
y();
