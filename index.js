 const btnEl = document.querySelector("#btn")
 const containerEl = document.querySelector(".container")
 const animePic = document.querySelector("#anime-pic")
 const animeName = document.querySelector("#anime-name")
 const apiURL = "https://api.catboys.com/img"

 btnEl.addEventListener("click",
 async()=>{
        try {
            btnEl.disabled = true
            btnEl.innerText = "Loading...."
            animeName.innerText = "Loading...."
            animePic.src = "./img/spinner.svg"
            const response = await fetch(apiURL)
            const data = await response.json()
            containerEl.style.display = "block"            
            animePic.src = data.url
            animeName.innerText = data.artist
            btnEl.disabled = false
            btnEl.innerText = "get anime"
        } catch (error) {
            animeName.innerText = "An Error happened,please try again"
            btnEl.disabled = false
            btnEl.innerText = "Error"
        }
 })