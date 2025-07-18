document.querySelector(".sub").addEventListener("click", function () {
    document.querySelector("form").requestSubmit();
});

document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault(); // prevent page reload

    // Get input values
    const firstName = document.getElementById("input1").value.trim();
    const lastName = document.getElementById("input2").value.trim();
    const email = document.getElementById("input3").value.trim();
    const phone = document.getElementById("input4").value.trim();
    const imgUrl = document.getElementById("input5").value.trim();

    // Create a new card element
    const card = document.createElement("div");
    card.className = "profile";
    card.innerHTML = `
        <figure><img src="${imgUrl}" alt="Profile Image" /></figure>
        <h2>${firstName} ${lastName}</h2>
        <ul>
            <li>Email: ${email}</li>
            <li>Phone: ${phone}</li>
        </ul>
    `;

    // Add card to container
    document.querySelector(".profileContainer").appendChild(card);

    // Optional: Clear form
    e.target.reset();
});
