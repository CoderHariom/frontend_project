let store_data = [{
    name: 'Monu',
    date: '13/07/2024'
}]

displayItem();

function addBtn() {
    let input_value = document.querySelector('#demo-input');
    let date_value = document.querySelector('#demo-date');
    //console.log(date_value.value)
    //let display=document.querySelector('#display-item');
    //display.innerText=input_value.value;
    //display.innerText=date_value.value;
    store_data.push({
        name: input_value.value,
        date: date_value.value
    })
    displayItem();
    input_value.value="";
    date_value.value="";

}

function displayItem(){
    let innerHtml="";
    let display=document.querySelector('#display-item');
    for(let i=0;i<store_data.length;i++){
        let {name,date}=store_data[i];
        innerHtml +=`  
        <span>${name}</span>
        <span>${date}</span>
        <button id="delete-btn" onClick="store_data.splice(${i},1);displayItem()" >Delete</button>
        
        `
        


    }
    display.innerHTML=innerHtml;

}

