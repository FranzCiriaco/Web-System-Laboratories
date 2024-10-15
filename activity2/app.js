
document.addEventListener("DOMContentLoaded", function () {
    const playerInput = document.getElementById("Player");
    const teamsInput = document.getElementById("Teams");
    const addBtn = document.getElementById("addBtn");
    const searchInput = document.querySelector('input[type="text"][placeholder="Search here..."]');
    const list = document.querySelector("ul");

    function createListItem(playerName, playerTeams) {
        const li = document.createElement("li");
        
        const div = document.createElement("div");
        div.classList.add("Baller-info");
        
        const span = document.createElement("span");
        span.textContent = playerName;
        
        const small = document.createElement("small");
        small.textContent = playerTeams;

        div.appendChild(span);
        div.appendChild(small);
        
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.classList.add("delete");

        deleteBtn.addEventListener("click", function () {
            li.remove();
        });

        li.appendChild(div);
        li.appendChild(deleteBtn);

        return li;
    }

    addBtn.addEventListener("click", function () {
        const playerName = playerInput.value.trim();
        const playerTeams = teamsInput.value.trim();

        if (playerName !== "" && playerTeams !== "") {
            const listItem = createListItem(playerName, playerTeams);
            list.appendChild(listItem);

            playerInput.value = "";
            teamsInput.value = "";
        }
    });

    searchInput.addEventListener("input", function () {
        const filter = searchInput.value.toLowerCase();
        const listItems = list.querySelectorAll("li");

        listItems.forEach(function (item) {
            const playerName = item.querySelector("span").textContent.toLowerCase();
            if (playerName.includes(filter)) {
                item.style.display = "";
            } else {
                item.style.display = "none";
            }
        });
    });

    const deleteButtons = document.querySelectorAll(".delete");
    deleteButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            button.parentElement.remove();
        });
    });
});
