window.onload = () => {
    // create a couple of elements in an otherwise empty HTML page
    const heading = document.createElement("h1");
    const headingText = document.createTextNode("Big Head!");
    heading.appendChild(headingText);
    document.body.appendChild(heading);
  };