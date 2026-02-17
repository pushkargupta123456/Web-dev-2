// Select event list
const eventList = document.getElementById("eventList");

// Add Event
function addEvent(e) {
    e.preventDefault();   // stop page reload

    const title = document.getElementById("title").value;
    const date = document.getElementById("date").value;
    const category = document.getElementById("category").value;
    const description = document.getElementById("description").value;

    // Simple validation
    if (title === "" || date === "" || category === "Category") {
        alert("Please fill all required fields!");
        return;
    }

    // Remove empty message
    const emptyMsg = document.querySelector(".empty");
    if (emptyMsg) {
        emptyMsg.remove();
    }

    // Create new event card
    const card = document.createElement("div");
    card.className = "event-card";

    card.innerHTML = `
        <h3>${title}</h3>
        <p><b>Date:</b> ${date}</p>
        <p><b>Category:</b> ${category}</p>
        <p>${description}</p>
        <button onclick="deleteEvent(this)">Delete</button>
    `;

    eventList.append(card);

    // Clear form after adding
    document.querySelector("form").reset();
}

// Delete Event
function deleteEvent(button) {
    const card = button.parentElement;
    card.remove();

    // If no events left
    if (eventList.children.length === 0) {
        eventList.innerHTML =
            `<p class="empty">No events yet. Add your first event!</p>`;
    }
}

// Clear All Events
function clearEvents() {
    eventList.innerHTML =
        `<p class="empty">No events yet. Add your first event!</p>`;
}

// Add Sample Events
function addSample() {

    const card1 = document.createElement("div");
    card1.className = "event-card";
    card1.innerHTML = `
        <h3>Tech Conference 2026</h3>
        <p><b>Date:</b> 2026-03-15</p>
        <p><b>Category:</b> Conference</p>
        <p>Annual technology conference.</p>
        <button onclick="deleteEvent(this)">Delete</button>
    `;

    const card2 = document.createElement("div");
    card2.className = "event-card";
    card2.innerHTML = `
        <h3>Frontend Meetup</h3>
        <p><b>Date:</b> 2026-04-05</p>
        <p><b>Category:</b> Meetup</p>
        <p>Meetup for frontend developers.</p>
        <button onclick="deleteEvent(this)">Delete</button>
    `;

    // Remove empty message
    const emptyMsg = document.querySelector(".empty");
    if (emptyMsg) {
        emptyMsg.remove();
    }

    eventList.appendChild(card1);
    eventList.appendChild(card2);
}

// Keyboard Demo
document.addEventListener("keydown", function (e) {
    document.getElementById("keyOutput").textContent =
        "You Pressed: " + e.key;
});