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

// // another code
    const displayPhones = (phones) => {
        const fieldSet = document.getElementById("phonesDisplay");
        fieldSet.textContent = "";
        const x = phones[0];
// error case
        if (x == undefined) {
            const div = document.createElement('div');
            div.classList.add('col');
            div.classList.add('text-center');
            div.innerHTML = `
            <p class ="text-amber-50 text-3xl">Not found</p>`
            fieldSet.appendChild(div);
        }
        else {
    // showing 20 result and rest result
            phones = phones.slice(0, 20);
            phones.forEach(phone => {
                const div = document.createElement('div');
    div.classList.add('col');
    div.innerHTML = `
        <div class="card rounded">
        <div class="p-5">
        <img src="${phone.image}" class="card-img-top img-fluid h-50" alt="...">
        </div>
        <div class="card-body">
            <h4 class="card-title text-2xl font-semibold">Model: ${phone.phone_name}</h4>
            <h5 class="card-title text-2xl font-semibold"> Brand: ${phone.brand}</h5>
            <button onclick="loadDetails('${phone.slug}')" type="button" class="btn btn-primary btn-sm bg-red-500 font-semibold	rounded">Show Details</button>
        </div>
        </div>
    `
    fieldSet.appendChild(div)
    })
    }
    }

// getting single details button
const loadDetails = (phone) => {
    const url = `https://openapi.programming-hero.com/api/phone/${phone}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayDetails(data.data))
}
// displaying single details
const displayDetails = phone =>{
    console.log(phone);
    let date = phone.releaseDate;
    if(date == ''){
        phone.releaseDate = 'No release date found'
    }
    else{
        date = phone.releaseDate;
    }
//     const {others} =phone?.data?.others
//     if(others == undefined){
//     const div = document.createElement('div');
//     div.innerHTML = `
//     <h5>Bluetooth: ${others.Bluetooth}</h5>
//     GPS: ${others.GPS}
//     NFC: ${others.NFC}
//     Radio: ${others.Radio}
//     USB: ${others.USB}
//     WLAN: ${others.WLAN}
//     `
//     displayDetail.appendChild(div)
// }
    const displayDetail = document.getElementById('singleDetails');
     displayDetail.innerHTML =`
     <div class="card mb-3 w-75 mx-auto" >
  <div class="row g-0">
    <div class="col-sm-5 col-lg-5">
      <img src="${phone.image}" class="img-fluid rounded-start h-100">
    </div>
    <div class="col-sm-7 col-lg-7">
      <div class="card-body" id="others">
        <h3 class="card-title text-3xl font-semibold">Model: ${phone.name}</h3>
        <h5 class="card-title text-2xl font-semibold">Release Date: ${phone.releaseDate}</h5>
        <h5 class="card-title text-2xl font-semibold">Model: ${phone.brand}</h5>
        <h5 class="card-title text-2xl font-semibold">chipset: ${phone.mainFeatures.chipSet}</h5>
        <h5 class="card-title text-2xl font-semibold">Display Size: ${phone.mainFeatures.displaySize} </h5>
        <h5 class="card-title text-2xl font-semibold">Memory: ${phone.mainFeatures.memory}</h5>
        <h5 class="card-title text-2xl font-semibold">Storage: ${phone.mainFeatures.storage}</h5>
      </div>

    </div>
    </div>
    </div>
 `
}

