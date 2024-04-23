function getCurrentTime() {
  const dateTime = new Date();
  const hours = dateTime.getHours().toString().padStart(2, '0');
  const minutes = dateTime.getMinutes().toString().padStart(2, '0');
  const ampm = hours >= 12 ? 'PM' : 'AM';
  const formattedHours = hours % 12 || 12;
  return formattedHours + ':' + minutes + ' ' + ampm;
}

document.addEventListener("DOMContentLoaded", function() {
  const timeDisplay = document.getElementById("time-container");
  timeDisplay.innerHTML = getCurrentTime();
  
  // Update time every second
  setInterval(function() {
      timeDisplay.innerHTML = getCurrentTime();
  }, 1000);
});

