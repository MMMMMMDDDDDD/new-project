let title_name="Elzero",description_name="Elzero web school",data_time="25/10";
let greet="hello";
let layout=`
    <div>
        <h3>${greet} ${title_name}</h3>
        <p>${description_name}</p>
        <span>${data_time}</span>
    </div>
`
document.write(`${layout.repeat(4)}`);
