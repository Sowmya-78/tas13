const tasks = {
  task1: { title: "Project 1", path: "works/task1/index.html" },
  task2: { title: "Project 2", path: "works/task2/index.html" },
  task3: { title: "Project 3", path: "works/task3/index.html" },
};

function createMenu() {
  const menu = document.createElement("nav");
  const menuList = document.createElement("ul");

  Object.entries(tasks).forEach(([key, task]) => {
      const menuItem = document.createElement("li");
      const link = document.createElement("a");

      link.textContent = task.title;
      link.href = "#";
      link.addEventListener("click", (e) => {
          e.preventDefault();
          showTask(task.path);
      });

      menuItem.appendChild(link);
      menuList.appendChild(menuItem);
  });

  menu.appendChild(menuList);
  document.body.prepend(menu);
}

function showTask(path) {
  let frame = document.querySelector("iframe");

  if (!frame) {
      frame = document.createElement("iframe");
      document.body.appendChild(frame);
  }

  frame.src = path;
}

window.addEventListener("DOMContentLoaded", createMenu);