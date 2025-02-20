import inquirer from "inquirer";

inquirer
  .prompt([
    {
      type: "checkbox",
      name: "selectedItems",
      message: "Select your favorite programming languages:",
      choices: ["JavaScript", "TypeScript", "Python", "C++", "Java"]
    }
  ])
  .then((answers) => {
    console.log("Selected Languages:", answers.selectedItems);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
