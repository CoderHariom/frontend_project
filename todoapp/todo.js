let store_data=[
    {
        name:'sonu',
        dateValue:'06/06/2024'
    }
];
displayItm();

function addFunction(){
    let getInput=document.querySelector('#todo_input');
    let getDate=document.querySelector('#todo_date');
    let input_value=getInput.value;
    let date_value=getDate.value;
    //console.log(date_value)
    //document.querySelector('#display_itm').innerText=input_value;
    store_data.push({name:input_value,dateValue:date_value});
    //console.log(store_data);
    getInput.value='';
    getDate.value='';
   displayItm();
}

function displayItm(){
    let displayElm=document.querySelector('#display_itm');
    let newHtml='';
    for(let i=0;i<store_data.length;i++){
        // let name=store_data[i].name;
        // let dateValue=store_data[i].dateValue;
        let{name,dateValue}=store_data[i]
        newHtml += `
        
        <span>${name}</span>
        <span>${dateValue}</span>
        <button class='btn-delete' onClick="store_data.splice(${i},1);displayItm()
        ">Delete</button>
        
        ` ;

    }
    displayElm.innerHTML=newHtml;


}