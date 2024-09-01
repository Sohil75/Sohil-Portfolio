var tablinks = document.getElementsByClassName("tabLinks");
      var tabcontents = document.getElementsByClassName("tabContents");
      function openTab(tabname) {
        for (tablink of tablinks) {
          tablink.classList.remove("active-link");
        }
        for (tabcontent of tabcontents) {
          tabcontent.classList.remove("activeTab");
        }
        event.currentTarget.classList.add("active-link");
        document.getElementById(tabname).classList.add("activeTab");
    }

    var sideMenu = document.getElementById("sideMenu");

    function openMenu() {
      sideMenu.style.right = "0";
    }
    function closeMenu() {
      sideMenu.style.right = "-200px";
    }


    const scriptURL =
        "https://script.google.com/macros/s/AKfycbxXN5b5HeQbnd_51QzyXMy047seXi_FhswJ2IjMPcYJh6iuavTDa_HWCAeSJMK9CnK7/exec";
      const form = document.forms["submit-to-google-sheet"];
      const msg = document.getElementById("msg");
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        fetch(scriptURL, { method: "POST", body: new FormData(form) })
          .then((response) => {
            msg.innerHTML = "Message Sent successfully";
            setTimeout(function () {
              msg.innerHTML = "";
            }, 5000);
            form.reset();
          })
          .catch((error) => console.error("Error!", error.message));
      });