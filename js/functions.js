function addItem() {
   var newItem = document.createElement("div");
   newItem.innerHTML = document.getElementById("box").value;
   newItem.onclick = removeItem;
   document.getElementById("list").appendChild(newItem);
   saveList();
  }
  function removeItem() {
   document.getElementById("list").removeChild(this);
   saveList();
  }
  function saveList() {
   localStorage.storedList = document.getElementById("list").innerHTML;
  }
  function loadList() {
   document.getElementById("list").innerHTML = localStorage.storedList;
   for(var i = 0; i < list.children.length; i++) {
    list.children[i].onclick = removeItem;
   }
  }
  function addImage() {
      var img = new Image();
      var description = document.createElement("div")
      var userid = document.getElementById("UserID").value;
      var descrp_txt = document.getElementById("Description").value;
      if (userid == ''){
          description.innerHTML = descrp_txt;
        }
      else{
          description.innerHTML = userid + ' says ' + descrp_txt;
        }
      img.src = document.getElementById("imageURL").value;
      img.height = 400

      description.style.float = "right";
      description.style.backgroundColor = "white"
      description.style.height  = "400px"
      description.style.width = "400px"
      description.style.textAlign = "center"
      description.style.border = "solid black"
      img.style.border = "solid black"
      document.getElementById('body').appendChild(img);

      document.getElementById('body').appendChild(description);

    }
