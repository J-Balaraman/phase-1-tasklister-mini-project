const exam = document.querySelector('#new-task-description');
const form = document.querySelector('#create-task-form');

document.addEventListener("DOMContentLoaded", () => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const output = exam.value;
    console.log(output);
  });
});