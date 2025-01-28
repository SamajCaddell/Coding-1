< !DOCTYPE html >
    <html>
        <head>
            <title>Loops</title>
        </head>
        <body>
            <input type="text" id="userInput" />
            <button onclick="runLoop()">Submit</button>
            <script>
                function runLoop() {
        var input = document.getElementById("userInput").value;
                console.log(input)

        // your loop function should go here.
      }
            </script>
        </body>
    </html>


// your loop function should go here

//create a count down timer based on the number in the input
//variable.

//we want the input to repeat the code, untill it is no longer
//true

while (input >= 0) {
    console.log('countdown')
    console.log(input)
    input -= 1
}