/*custon javascript  goes here */

// - Immediately invoked function Expression

(function()
{

    function Start()
    {
        console.log("App Started...");

        let paragraphOneContent = "This is my first paragraph"

        let paragraphOne = document.getElementById("paragraphOne");
        paragraphOne.textContent = paragraphOneContent;
    }

    window.addEventListener("load", Start);
})();