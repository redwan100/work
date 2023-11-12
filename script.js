function toggleDropdown() {
  var dropdownContent = document.getElementById("checkboxContainer");
  if (dropdownContent.style.display === "block") {
    dropdownContent.style.display = "none";
  } else {
    dropdownContent.style.display = "block";
  }
}


 function toggleSelectAll() {
   var checkboxes = document.querySelectorAll(
     '.checkbox-container input[type="checkbox"]'
   );
   var selectAllCheckbox = document.getElementById("selectAll");

   checkboxes.forEach(function (checkbox) {
     checkbox.checked = selectAllCheckbox.checked;
   });
 }