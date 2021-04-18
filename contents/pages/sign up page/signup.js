
function validateFn()

{

valid= true;

const firstname = document.getElementById('fname');
const lastname = document.getElementById('lname');
const email = document.getElementById('email');
const mobile = document.getElementById('mob');
const password = document.getElementById('pass');
const password2 = document.getElementById('pass2');


let regExpWeak1 = /[a-zA-Z]/;
let regExpMedium2 = /\d+/;
let regExpStrong3 = /.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/;
let regExpMobile = /^(\d{3})(\.|-)?(\d{3})(\.|-)?(\d{4})$/;

// ####################################### First name ##############################################################

    if( firstname.value.trim() === '') {
       
        setErrorFor(firstname, 'Firstrname cannot be blank');
          valid = false;
    }else {
      setSuccessFor(firstname,'');
    
    }

// ######################################## Last name #############################################################


    if(lastname.value.trim() === '') {
      
            valid = false;
            setErrorFor(lastname, 'Lastname cannot be blank');
    }else {
      setSuccessFor(lastname," ");
    }

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


// ###################################### Mobile ###############################################################
    
    if(mobile.value.trim() === '') {
      
        valid = false;
        setErrorFor(mobile, 'Mobile no: cannot be blank');
} else if (mobile.value.trim().match(regExpMobile)) {
        setSuccessFor(mobile, '');
  } 
    else {
            setErrorFor(mobile,"Invalid number");
            valid = false;
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
            setErrorFor(password," ");
            valid = false;
    }

// ######################################## Retype pass #############################################################

    if(password2.value.trim() === '') {
		setErrorFor(password2, 'Password cannot be blank');
        valid = false;
	} else if(password.value !== password2.value) {
		setErrorFor(password2, 'Passwords does not match');
        valid = false;
	} else{
		setSuccessFor(password2,"");
       
    }
// #####################################################################################################

    return valid;
}


// ###################################### Fn for pass strength check ###############################################################

function trigger()

{
const indicator = document.querySelector(".indicator");
const s = document.getElementById("pass")
const weak = document.querySelector(".weak");
const medium = document.querySelector(".medium");
const strong = document.querySelector(".strong");
const text = document.querySelector(".text");
let regExpWeak = /[a-z]/;
let regExpMedium = /\d+/;
let regExpStrong = /.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/;

    if(s.value != ""){
    indicator.style.display = "block";
    indicator.style.display = "flex";
    if(s.value.length <= 7 && (s.value.match(regExpWeak) || s.value.match(regExpMedium) || s.value.match(regExpStrong)))no=1;
    if(s.value.length >= 8 && ((s.value.match(regExpWeak) && s.value.match(regExpMedium)) || (s.value.match(regExpMedium) && s.value.match(regExpStrong)) || (s.value.match(regExpWeak) && s.value.match(regExpStrong))))no=2;
    if(s.value.length >= 10 && s.value.match(regExpWeak) && s.value.match(regExpMedium) && s.value.match(regExpStrong))no=3;
    if(no==1){
      weak.classList.add("active");
      text.style.display = "block";
      text.textContent = "Too Week!!! Your Password cannot be accepted";
      text.classList.add("weak");
    }
    if(no==2){
      medium.classList.add("active");
      text.textContent = "Medium!!! Try including numbers and special charecters";
      text.classList.add("medium");
    }else{
      medium.classList.remove("active");
      text.classList.remove("medium");
    }
    if(no==3){
      weak.classList.add("active");
      medium.classList.add("active");
      strong.classList.add("active");
      text.textContent = "Strong!!! Good to go";
      text.classList.add("strong");
    }else{
      strong.classList.remove("active");
      text.classList.remove("strong");
    }

        
  }else{
    indicator.style.display = "none";
    text.style.display = "none";
  }

}

    
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
      
    }
// ###################################### Email check fn ###############################################################

    function isEmail(email) {
      return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    }
    

// ####################################### Pass show display fn #########################################################################
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

  
