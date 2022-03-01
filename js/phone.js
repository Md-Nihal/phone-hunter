// calling search button & loading API
const searchPhone = () => {
    //  Getting input feid text
    const searchFeild = document.getElementById('search-feild');
    const searchText = searchFeild.value;
    searchFeild.value = '';
    
    // Loading result API
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
    fetch (url)
    .then(res => res.json())
    .then(data => displayPhones(data.data))
}

searchPhone();

// Displaying Phones in UI
const displayPhones = phones =>{
const displayFeild = document.getElementById('phonesDisplay')
displayFeild.textContent = '';
const x = phones.name;
if ( x == undefined) {
        const div = document.createElement('div');
        div.innerHTML = `
        <p >Not found</p>`
        displayFeild.appendChild(div);
    }
else{
        phones.forEach(phone =>{ 
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
            <div class="card rounded">
            <div class="p-5">
            <img src="${phone.image}" class="card-img-top img-fluid h-50" alt="...">
            </div>
            <div class="card-body">
                <h3 class="card-title">Model: ${phone.phone_name}</h3>
                <h5 class="card-title"> Brand: ${phone.brand}</h5>
                <button onclick="loadDetails('${phone.slug}')" type="button" class="btn btn-primary btn-sm">Show Details</button>
            </div>
            </div>
        `
        displayFeild.appendChild(div)
        })
}
}
const loadDetails = (phone) => {
    const url = `https://openapi.programming-hero.com/api/phone/${phone}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayDetails(data.data))
}
const displayDetails = phone =>{
    console.log(phone);
    let date = phone.releaseDate;
    if(date == ''){
        phone.releaseDate = 'No release date found'
    }
    else{
        date = phone.releaseDate;
    }
    const displayDetail = document.getElementById('singleDetails');
     displayDetail.innerHTML =`
     <div class="card mb-3 w-75 mx-auto" >
  <div class="row g-0">
    <div class="col-5 ">
      <img src="${phone.image}" class="img-fluid rounded-start h-100">
    </div>
    <div class="col-7">
      <div class="card-body">
        <h3 class="card-title">Model: ${phone.name}</h3>
        <h5 class="card-title">Release Date: ${phone.releaseDate}</h5>
        <h5 class="card-title">Model: ${phone.brand}</h5>
        <h5 class="card-title">chipset: ${phone.mainFeatures.chipSet}</h5>
        <h5 class="card-title">Display Size: ${phone.mainFeatures.displaySize} </h5>
        <h5 class="card-title">Memory: ${phone.mainFeatures.memory}</h5>
        <h5 class="card-title">Memory: ${phone.mainFeatures.storage}</h5>
      </div>
    </div>
  </div>
</div>
     `
}