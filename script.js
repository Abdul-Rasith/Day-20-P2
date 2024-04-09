//Promise Task-2 customer_satellites
// Display in id, countryname, launch_data

let res = fetch("https://isro.vercel.app/api/customer_satellites",{
method:"GET"
})
.then((data)=>data.json())
.then((data1)=>{
  // using forEach method
  data1.customer_satellites.forEach((val)=>{

    // using dom create div
    let container = document.createElement("div")
    container.className = "container"

    let row = document.createElement("div")
    row.className ="row"

    let col = document.createElement("div")
    col.className = "col-sm-6 "
    col.innerHTML +=`<div class="card text-white bg-primary mb-3 d-flex justify-content-center"" style="max-width: 18rem;">
    <div class="card-header">Customer Id: ${val.id}</div>
    <div class="card-body">
      <p class="card-text">Country: ${val.country}</p>
      <p class="card-text">Launch_date: ${val.launch_date}</p>
    </div>
  </div>`
      row.append(col)
      container.append(row)
      document.body.append(container)
  })

})
.catch((err)=>console.log(err))


