const form = document.getElementById('form');
const username = document.getElementById('username');
const lastname = document.getElementById('lastname');
const email = document.getElementById('email');
const mobileno = document.getElementById('mobileno');
const password1 = document.getElementById('password1');
const password2 = document.getElementById('password2');

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
	// trim to remove the whitespaces
	const usernameValue = username.value.trim();
  const lastnameValue = lastname.value.trim();
	const emailValue = email.value.trim();
	const mobilenoValue = mobileno.value.trim();
	const password1Value = password1.value.trim();
	const password2Value = password2.value.trim();
	
	if(usernameValue === '') {
		setErrorFor(username, 'Firstrname cannot be blank');
	} else {
		setSuccessFor(username);
	}

    if(lastnameValue === '') {
		setErrorFor(lastname, 'Lastname cannot be blank');
	} else {
		setSuccessFor(lastname);
	}
	
	if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
	}

	if(mobilenoValue === '') {
		setErrorFor(mobileno, 'Number cannot be blank');
	} 
	
	else {
		setSuccessFor(mobileno);
	}

	
	
	if(password1Value === '') {
		setErrorFor(password1, 'Password cannot be blank');
		showBtn.style.display = "none";
	} else {
		setSuccessFor(password1);
	}
	
	if(password2Value === '') {
		setErrorFor(password2, 'Password2 cannot be blank');
	} else if(password1Value !== password2Value) {
		setErrorFor(password2, 'Passwords does not match');
	} else{
		setSuccessFor(password2);
	}
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-check error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-check success';
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function isMobileno(mobileno){
	return /^([0-9]{3})(.-)([0-9]{3})(.-)([0-9]{})$/.test(mobileno); 
}



// ################################################################################################################

const indicator = document.querySelector(".indicator");
      const s = document.getElementById("password1")
      const weak = document.querySelector(".weak");
      const medium = document.querySelector(".medium");
      const strong = document.querySelector(".strong");
      const text = document.querySelector(".text");
      const showBtn = document.querySelector(".showBtn");
      let regExpWeak = /[a-z]/;
      let regExpMedium = /\d+/;
      let regExpStrong = /.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/;
      function trigger(){
        if(s.value != ""){
          indicator.style.display = "block";
          indicator.style.display = "flex";
          if(s.value.length <= 7 && (s.value.match(regExpWeak) || s.value.match(regExpMedium) || s.value.match(regExpStrong)))no=1;
          if(s.value.length >= 8 && ((s.value.match(regExpWeak) && s.value.match(regExpMedium)) || (s.value.match(regExpMedium) && s.value.match(regExpStrong)) || (s.value.match(regExpWeak) && s.value.match(regExpStrong))))no=2;
          if(s.value.length >= 10 && s.value.match(regExpWeak) && s.value.match(regExpMedium) && s.value.match(regExpStrong))no=3;
          if(no==1){
            weak.classList.add("active");
            text.style.display = "block";
            text.textContent = "Your password is too week";
            text.classList.add("weak");
          }
          if(no==2){
            medium.classList.add("active");
            text.textContent = "Your password is medium";
            text.classList.add("medium");
          }else{
            medium.classList.remove("active");
            text.classList.remove("medium");
          }
          if(no==3){
            weak.classList.add("active");
            medium.classList.add("active");
            strong.classList.add("active");
            text.textContent = "Your password is strong";
            text.classList.add("strong");
          }else{
            strong.classList.remove("active");
            text.classList.remove("strong");
          }
          showBtn.style.display = "block";
          showBtn.onclick = function(){
            if(s.type == "password"){
              s.type = "text";
              showBtn.textContent = "HIDE";
              showBtn.style.color = "#23ad5c";
            }else{
              s.type = "password";
              showBtn.textContent = "SHOW";
              showBtn.style.color = "#000";
            }
          }
        }else{
          indicator.style.display = "none";
          text.style.display = "none";
          showBtn.style.display = "none";
        }
      }