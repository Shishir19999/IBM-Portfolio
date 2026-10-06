function addRecommendation() {
  let recommendation = document.getElementById("new_recommendation");
  if (recommendation.value != null && recommendation.value.trim() != "") {
    showPopup(true);
    var element = document.createElement("div");
    element.setAttribute("class","recommendation");
    // Build with textContent so user text is never interpreted as HTML.
    var open = document.createElement("span");
    open.textContent = "“";
    var close = document.createElement("span");
    close.textContent = "”";
    element.appendChild(open);
    element.appendChild(document.createTextNode(recommendation.value));
    element.appendChild(close);
    document.getElementById("all_recommendations").appendChild(element); 
    
    recommendation.value = "";
  }
}

function showPopup(bool) {
  if (bool) {
    document.getElementById('popup').style.visibility = 'visible'
  } else {
    document.getElementById('popup').style.visibility = 'hidden'
  }
}
