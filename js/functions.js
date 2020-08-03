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
      description.innerHTML = document.getElementById("Description").value;
      img.src = document.getElementById("imageURL").value;
      img.height = 400
      description.style.float = "right";
      description.style.backgroundColor = "lightyellow"
      description.style.height  = "400px"
      description.style.width = "400px"
      description.style.textAlign = "center"
      document.getElementById('body').appendChild(img);
      document.getElementById('body').appendChild(description)
    }
