const Messages = require="/berichten.json"  
  
  // Storing HTML code block in a variable
var codeBlock = '<div class="content">' +
    '<fieldset id="Message">' +
    '<fieldset id="Messagecontext">' +
    '<legend>' + Messages[0].Sender + '</legend>' +
    '<label class="Message">' + Messages[0].Message + '</label>' +
    '</fieldset>' +
    '<fieldset id="Response">' +
    '<legend id="Response">Shitman</legend>' +
    '<label id="Response">' + Messages[0].Response + '</label>' +
    '</fieldset>' +
    '</fieldset>' +
'</div>';

// Inserting the code block to wrapper element
document.getElementById("wrapper").innerHTML = codeBlock

                            