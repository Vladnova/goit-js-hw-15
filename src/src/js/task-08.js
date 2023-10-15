const form = document.querySelector(".login-form");

form.addEventListener("submit", handlerForm);
console.dir(form)

function handlerForm(e) {
  e.preventDefault();
  const { email, password } = e.currentTarget;

  if (!email.value || !password.value.trim()) {
    alert("Всі поля на формі мають бути заповнені");
    return;
  }

  const formData = {
    email: email.value,
    password: password.value.trim(),
  };
  console.log(formData);
  e.target.reset();
}
