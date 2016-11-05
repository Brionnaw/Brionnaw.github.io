var toggleMenu = function(){
  var dropdown = document.getElementById("dropdown")
  var dropdownContent = document.getElementById("dropdownContent")
  if (dropdown.style.display == "block")
  dropdown.style.display = "none";
  } else {
    dropdown.style.display = "none";
    if(dropdownContent.style.display == "block")
    dropdownContent.style.display = "none";
  }else {
    dropdownContent.style.display = "none";
  }
}
