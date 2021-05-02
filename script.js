const container=document.querySelector(".container");
const serverUrl="https://api.covid19api.com/live/country/india/status/confirmed/date/2021-04-30";

fetch(serverUrl).then(data => {
    // console.log(data.text());
    return data.text();
}).then(result =>{
    // console.log(result);
    const array=JSON.parse(result);
    console.log(array);

    array.forEach((ele) => {
        const card=document.createElement("div");
        card.classList.add("card");
        card.innerHTML=`<div class="province">State</div><div class="stateName">${ele.Province}</div><div class="confirmed">Confirmed</div><div class="confirmedNumber">${ele.Confirmed}</div><div class="death">Death</div><div class="deathNumber">${ele.Deaths}</div><div class="active">Active</div><div class="activeNumber">${ele.Active}</div>`
        container.appendChild(card);
    });
    
});