(function(numChildren, partnerName, geoLocation, jobTitle) {
  const message = `You will be a ${jobTitle} in ${geoLocation}, and married to ${partnerName} with ${numChildren} kids.`;
  
  // Create a new paragraph element
  const p = document.createElement('p');
  p.textContent = message;

  // Append the paragraph to the body (or any other container)
  document.body.appendChild(p);

})(3, "Ayoub", "Mohammedia", "Web Developer");
