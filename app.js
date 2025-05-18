document.addEventListener("DOMContentLoaded", () => {
  const generateBtn = document.querySelector("#generateBtn");
  const form = document.querySelector("#form");
  const formData = new FormData(form);
  const length = 15; //password length

  // All Password Characters
  const upperCase = "ABCDEFGHIJLKMNONPQRSTUVWXYZ";
  const lowerCase = "abcdefghijklmnopqrstuvwxyz";
  const digits = "0123456789";
  const symbols = "~@!#$%^&*()_+{}-+=<>[]/|";
  const allChars = upperCase + lowerCase + digits + symbols;

  const generatePassword = () => {
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password +=
      lowerCase[Math.floor(Math.floor(Math.random() * lowerCase.length))];
    password += digits[Math.floor(Math.floor(Math.random() * digits.length))];
    password += symbols[Math.floor(Math.floor(Math.random() * symbols.length))];

    while (length > password.length) {
      password += allChars[Math.floor(Math.random() * allChars.length)];
    }

    let passwordValue = formData.get("password");
    passwordValue = password;

    // Display Password on Input field
    const passwordInput = form.querySelector("#password");
    passwordInput.value = passwordValue;
  };

  //   Attach click event to generateBtn
  generateBtn.addEventListener("click", (e) => {
    e.preventDefault();
    generatePassword();
  });

  const copyIcon = form.querySelector("#copy");

  copyIcon.addEventListener("click", async () => {
    try {
      const passwordInput = form.querySelector("#password");
      const textToCopy = passwordInput.value;

      await navigator.clipboard.writeText(textToCopy);
      copyIcon.classList.replace("bx-copy", "bx-check-circle");

      // Revert back to copyIcon after 3 seconds
      setTimeout(() => {
        copyIcon.classList.replace("bx-check-circle", "bx-copy");
      }, 3000);
    } catch (error) {
      console.error("Failed to copy: ", error);
    }
  });
});
