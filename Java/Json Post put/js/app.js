// const url = "http://localhost:3000/users";
        const cardsContainer = document.getElementById("cards");

        axios(url).then(({ data }) => {
            data.forEach(({ id, age, firstName, lastName, photo }) => {
                cardsContainer.innerHTML += `<div class="card">
                    <p>${firstName}</p>
                    <p>${lastName}</p>
                    <p>${age}</p>
                    <div>
                        <img src="${photo}" alt="">
                    </div>
                    <div>
                        <button class="deleteBtn" id="${id}">del</button>
                        <button class="editBtn" id="${id}">edit</button>
                    </div>
                </div>`;
            });

            const deleteButtons = document.querySelectorAll(".deleteBtn");
            deleteButtons.forEach((btn) => {
                btn.addEventListener("click", (e) => {
                    const isAgree = confirm("brat are you ok?");
                    const id = e.target.id;
                    if (isAgree) {
                        axios.delete(url + '/' + id).then((res) => {
                            if (res.statusText === "OK") {
                                alert("ugurla silindi");
                                location.reload();
                            }
                        });
                    }
                });
            });

            const editButtons = document.querySelectorAll(".editBtn");
            editButtons.forEach((btn) => {
                btn.addEventListener("click", (e) => {
                    const id = e.target.id;
                    console.log(id);
                });
            });
        });

        const firstNameInp = document.getElementById("firstname");
        const lastNameInp = document.getElementById("lastname");
        const photoInp = document.getElementById("photo");
        const ageInp = document.getElementById("age");
        const form = document.getElementById("form");

        form.addEventListener("submit", (e) => {
            e.preventDefault();
            const data = {
                firstName: firstNameInp.value,
                lastName: lastNameInp.value,
                age: ageInp.value,
                photo: photoInp.value
            };
            axios.post(url, data).then((res) => {
                console.log(res);
            });
        });