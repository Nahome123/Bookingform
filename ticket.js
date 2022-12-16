window.onload = () => {
    const p = document.getElementById("my");
    
    fetch("/api/data").then((response) => {
        response.json().then((data) => {
            
            for (object of data.objects) {
                
                const myp = document.createElement("p");
                myp.innerHTML = ` From: ${object.from} => To:==> ${object.to} -- Departure-Date: ${object.depdate} -- DepartureTime: ${object.deptime}  -- Full-Name: ${object.fullname} -- Phone-Number: ${object.phonenum}`;
                p.appendChild(myp);

            }
            
        });
    });
    
}