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
phones.forEach(phone =>{
    console.log(phone)
const div = document.createElement('div');
div.classList.add('col');
div.innerHTML = `
    <div class="card">
      <img src="${phone.image}" class="card-img-top img-fluid" alt="...">
      <div class="card-body">
        <h3 class="card-title">Model: ${phone.phone_name}</h3>
        <h5 class="card-title"> Brand: ${phone.brand}</h5>
        <button type="button" class="btn btn-primary btn-sm">Show Details</button>
      </div>
    </div>
`
displayFeild.appendChild(div)
})
}