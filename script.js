async function random_background() {

    for (let i = 0; i <5000; i++) {
           
    
    let no;
    no = Math.random() <= 0.5 ? "1" : "0";

    console.log(no)
    document.querySelector('.container').insertAdjacentText('afterbegin', no + " \n"+"\n")
   
        
    }
    

}
// setTimeout(() => {
//     random_background()
// }, 10);

const list=[
    "Intializing...",
    "getting id and passord...",
    "Hacking done...",
    "welcome to anothers pc..."
]


