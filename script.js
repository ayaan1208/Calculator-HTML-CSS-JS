let data = ""
let buttons = document.querySelectorAll('.button')
Array.from(buttons).forEach((button)=>{
  button.addEventListener('click',(f)=>{
    if (f.target.innerHTML == '=') {
      data = eval(data);
      document.querySelector('input').value = data
    }
    else if (f.target.innerHTML == 'C') {
      data= ""
      document.querySelector('input').value = data;
    }
    else{
      console.log(f.target)
      data = data + f.target.innerHTML;
      document.querySelector('input').value = data
    }
  })
})



  
  
