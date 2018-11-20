const formDetails = {
  user: {
    username: "",
    email: "",
    password: "",
    rePassword: "",
    language: ""
  },
  errors: {
    fullnameEr: "",
    usernameEr: "",
    emailEr: "",
    passwordEr: "",
    rePasswordEr: "",
    languageEr: ""
  },
  isValid: true
};

const stateUpdator = (data, element) => {
  const { user } = formDetails;

  // identify which form element is sending in the data
  user[element] = data;

  return user;
};

const validator = () => {
  const { user, errors } = formDetails;
  let isValid = true;
  const emailRegex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/g;

  // empty errors
  errors.usernameEr = "";
  errors.emailEr = "";
  errors.passwordEr = "";
  errors.rePasswordEr = "";
  errors.languageEr = "";

  if (!user.username) {
    isValid = false;
    errors.usernameEr = "Username is empty";
  } else if (!user.username.match(/^[\w_]{4,8}$/g)) {
    // username must be within 4 - 8 characters
    isValid = false;
    errors.usernameEr = "Username must be within 4 - 8 characters";
  }

  if (!user.email) {
    isValid = false;
    errors.emailEr = "Email is empty";
  } else if (!user.email.match(emailRegex)) {
    isValid = false;
    errors.emailEr = "Invalid email format";
  }

  if (!user.password) {
    isValid = false;
    errors.passwordEr = "Password is empty";
  } else if (!user.password.match(/^[\w_]{5,}$/g)) {
    isValid = false;
    errors.passwordEr =
      "Password must not lower than 5 and cannot contain special characters";
  }

  if (!user.rePassword) {
    isValid = false;
    errors.rePasswordEr = "Confirm password is empty";
  } else if (user.rePassword !== user.password) {
    isValid = false;
    errors.rePasswordEr = "Password does not match";
  }

  if (!user.language) {
    isValid = false;
    errors.languageEr = "Language is empty";
  } else if (!user.language.match(/^[a-zA-Z_ ]+$/g)) {
    isValid = false;
    errors.languageEr = "Language cannot contain numbers";
  }

  return isValid
};

// handleSubmit fn
const handleSubmit = (e) => {
  e.preventDefault()
  if (validator()) {
    console.log('form data recieved')
    window.location.href = `../../public/dashboard.html`;

    /* const { username, email, password, language } = formDetails.user
    const endpoint = 'http://localhost:3000/user/signup'
    let data = {
      username,
      email,
      password,
      language
    }

    fetch(endpoint, {
			method: "POST",
			body: data,
			headers: new Headers({
				// "content-type": "multipart/form-data"
			})
		})
			.then(res => res.json())
			.then(resp => console.log(resp))
			.catch(err => console.log("an error occurred", err));

    // clear the fields
    resetForm();
  } else {
    console.log("Invalid form");
  } */
  }
};

const resetForm = () => {
  const form = [...document.querySelector("form")]; // Convert htmlCollection to an array

  form.forEach(el => {
    if (el.nodeName.toLowerCase() === "input") {
      el.value = "";
    }
  });
};

// Get data from form elements
document.querySelector("form").addEventListener("input", e => {
  if (e.target.nodeName === "INPUT") {
    let data = e.target.value;
    const element = e.target.name;

    stateUpdator(data, element);
  }
});

document.getElementById("reg_form").addEventListener("submit", e => {
  e.preventDefault();
  handleSubmit();
});