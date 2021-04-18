
function validateFn()

{

valid= true;


const email = document.getElementById('email');
const password = document.getElementById('pass');



let regExpWeak1 = /[a-zA-Z]/;
let regExpMedium2 = /\d+/;
let regExpStrong3 = /.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/;



// ########################################## Email ###########################################################


    if(email.value.trim() === '') {
     valid = false;
      setErrorFor(email, 'Email cannot be blank');
    } else if (!isEmail(email.value.trim())) {
      setErrorFor(email, 'Not a valid email');
      valid = false;

    } 
    else {
      setSuccessFor(email," ");
    }



// ########################################## Main Pass ###########################################################

    if(password.value.trim() === '') {
            setErrorFor(password, 'Password cannot be blank');
            valid = false;
    }
     else if(password.value.trim().length >= 10 && password.value.match(regExpWeak1) && password.value.match(regExpMedium2) && password.value.match(regExpStrong3)){
        setSuccessFor(password," ");
    }
    else{
            setErrorFor(password," Password not valid ");
            valid = false;
    }


// #####################################################################################################

    return valid;
}


// ###################################### Fn for error mssg ###############################################################



    
    function setErrorFor(input, message) {
      const formControl = input.parentElement;
      const small = formControl.querySelector('small');
      formControl.className = 'form-check error';
      small.innerText = message;
    }
    
    function setSuccessFor(input,message) {
      const formControl = input.parentElement;
      
      const small = formControl.querySelector('small');
      formControl.className = 'form-check success';
    
      small.innerText = message;
      // iconControl.className = 'icon ok';
      
    }
// #################################### Fn Email #################################################################

    function isEmail(email) {
      return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    }
    

// ########################################### Pass show display fn #####################################################################

    function myfn()
    {
    const x = document.getElementById('pass');
    const y = document.getElementById('hide1');
    const z = document.getElementById('hide2');
 
   if(x.type == "password"){
     x.type ="text";
     y.style.display ="block";
     z.style.display ="none";
   }else {
    x.type ="password";
    y.style.display ="none";
    z.style.display ="block";
   }
 }
  
