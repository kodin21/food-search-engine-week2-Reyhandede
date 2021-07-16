let user=document.querySelector("#user");
//Kullanıcı bilgisi
fetch("https://jsonplaceholder.typicode.com/users/1").then(
    response=>response.json()
    ).then(responseJson=>{
     console.log(user.innerHTML=`<p style="opacity:0.5; margin:0px;">Merhaba </p> <strong> ${responseJson.name}</p>`)
    
    })

    //Yemek listesi
    fetch("https://jsonplaceholder.typicode.com/todos")
    .then((res) => res.json())
    .catch((err)=>console.log(err))
    .then((foodList) => foodCreate(foodList));


    //Yemek listesinden çekilen bilgilerin kart görünümüne yansıtılması

    function foodCreate(foodList)
    {

      let card=document.querySelector("#card");
      
        foodList.forEach(element => {
          
          let cardDiv=document.createElement("li");
          let cardLi=document.createElement("a");
          cardDiv.appendChild(cardLi)
          card.appendChild(cardDiv)

          cardLi.innerHTML=` <i onclick="Favorite(this)" class="fa fa-thumbs-up" style="float:left ;color:#222;"></i> <strong>${element.title}</strong>  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

         <br>

          `;





        
      
       
        
      });
      


    }
     


//Favori butonu
    
    function Favorite(x) {
      x.classList.toggle("fa-thumbs-down");
    }

   