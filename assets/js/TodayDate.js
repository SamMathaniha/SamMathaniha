 // Get the current date
 var currentDate = new Date();
    
 // Format the date
 var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
 var formattedDate = currentDate.toLocaleDateString('en-US', options);
 
 // Update the content of the 'todayDate' span
 document.getElementById('todayDate').textContent = "Today date: " + formattedDate;