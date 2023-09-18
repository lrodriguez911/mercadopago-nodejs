const checkout = document.getElementById("checkout")

checkout.addEventListener("click", async () => {
    const response = await fetch("/create-orcer", {
        method: "POST",
    })
    const data = await response.json()
    window.location.href = data.init_point

})