function addQuestion() {
  const questionList = document.getElementById("questionList");
  const input = document.createElement("input");
  input.type = "text";
  input.placeholder = "質問を入力";
  questionList.appendChild(input);
}
