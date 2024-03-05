
  function search() {
    var selectedValue = document.getElementById("projectSelect").value;
    if(selectedValue !== "") {
      window.location.href = "../MyEachProjects/"+ selectedValue + ".html";
    } else {
      alert("Please select a project.");
    }
  }
