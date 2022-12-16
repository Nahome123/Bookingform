window.onload = () => {
    
    const form = document.getElementById("form1");
    const but = document.getElementById("submitted");
    document. getElementById("mybutton"). onclick = function () { location. href = "ticket.html" };
  
    form.onsubmit = (event) => {
        event.preventDefault();
        const obj = { name: form.elements["name"].value, type: form.elements["type"].value, depdate: form.elements["depdate"].value,deptime: form.elements["deptime"].value,fullname: form.elements["fullname"].value,phonenum: form.elements["phonenum"].value,email: form.elements["email"].value}

        fetch("/api/data",
            {
                method: "POST",
                body: JSON.stringify(obj),
                headers: {
                    'Content-Type': 'application/json'
                }

            }
        );

        but.innerHTML = "Data Submitted";
    };


    
}
