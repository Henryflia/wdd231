const visit_key = "delifruit_subscribes"

export function subcribeForm() {
    const form = document.querySelector(".wf1");
    if (!form) return;

    form.addEventListener("submit", () => {
        const visits = Number(localStorage.getItem(visit_key) || 0) + 1;
        localStorage.setItem(visit_key, visits);
    })
}


export function reviewPage() {
    const review = document.querySelector("#review-data");
    if (!review) return;
    const params = new URLSearchParams(window.location.search);

    const fname = params.get("fname");
    const lname = params.get("lname");
    const email = params.get("email");
    const phone = params.get("phone");
    const address = params.get("address");
    const city = params.get("city");
    const plan = params.get("plan");
    const delivery = params.get("delivery");
    const restrictions = params.get("restrictions");
    const visits = localStorage.getItem(visit_key) || 1;

    review.innerHTML = `
    <p><strong>Name: </strong> ${fname} ${lname}</p>
    <p><strong>Email: </strong> ${email}</p>
    <p><strong>Phone: </strong> ${phone}</p>
    <p><strong>Address: </strong> ${address}, ${city}</p>
    <p><strong>Plan: </strong> ${plan}</p>
    <p><strong>Delivery Date: </strong> ${delivery}</p>
    ${restrictions ? `<p><strong>Allergies/Restrictions:</strong> ${restrictions}</p>` : ""}
    <p><strong>Times Subscribed: </strong> ${visits}</p>   
    `
}