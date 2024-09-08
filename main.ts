#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

let todos: string[] = [];
let condition = true;

console.log(chalk.cyan(`\n \t\t <<<==========================>>>`));

console.log(
  chalk.cyan(
    `<<<===========>>> ${chalk.green(
      "Welcome to Ayaz Ahmed To-Do-App Project. "
    )} <<<=============>>> ${"\n \t\t <<<==========================>>>"}`
  )
);

let main = async () => {
  while (condition === true) {
    let operators = await inquirer.prompt([
      {
        name: "operation",
        type: "list",
        message: "Select a operation what you want to do:",
        choices: [
          "Add Task",
          "View Task",
          "Delete Task",
          "Update Task",
          "Exit",
        ],
      },
    ]);
    if (operators.operation === "Add Task") {
      await addTask();
    } else if (operators.operation === "View Task") {
      await viewList();
    } else if (operators.operation === "Delete Task") {
      await DeleteTask();
    } else if (operators.operation === "Update Task") {
      await updateTask();
    } else if (operators.operation === "Exit") {
      await Exit();
    }
  }
};

let addTask = async () => {
  let firstTask = await inquirer.prompt([
    {
      name: "Add",
      type: "input",
      message: "Add Whatever You Want To Add",
    },
  ]);
  todos.push(firstTask.Add);
  console.log(chalk.yellowBright(`t\t Your Task Has Been Successfuly Added\n`));
};
let viewList = async () => {
  console.log(
    chalk.cyan(`n\ \t\t **************** Todo List ******************`)
  );
  todos.forEach((task, index) => {
    console.log(`${index + 1}: ${task}`);
  });
};
let DeleteTask = async () => {
  let thirdTask = await inquirer.prompt([
    {
      name: "delete",
      type: "list",
      message: "Select a Task To Delete:",
      choices: todos.map((item) => item),
    },
  ]);
  let newTodo = todos.filter((val) => val !== thirdTask.delete);
  todos = [...newTodo];
  console.log(chalk.red(`\n \t\t\t\t ${thirdTask.delete}`));
  console.log(`\t\t\ Your Task Has Been Delete Successfully\n`);
};

let updateTask = async () => {
  await viewList();
  let fourthTask = await inquirer.prompt([
    {
      name: "Upadate",
      type: "number",
      message: "Enter a index NO What you want to Update:",
    },
    {
      name: "add",
      type: "input",
      message: "Enter Your Add Task",
    },
  ]);
  todos[fourthTask.Upadate - 1] = fourthTask.add;
  console.log(
    chalk.yellowBright(
      ` n\ \t\t Your Task ${fourthTask.Upadate} Updated Successfully.`
    )
  );
  console.log(
    chalk.cyan(`\t [for view list please check a : view list Shukriya]\n`)
  );
  todos;
};

let Exit = () => {
  condition = false;
  console.log(
    chalk.green(
      "Thanks Duaon me yad rakhna Allah Hafiz. \n Engineer Ayaz Ahmed Laghari."
    )
  );
};

main();