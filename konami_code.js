const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  let index = 0;

  document.body.addEventListener('keydown', function(e) {
    const key = parseInt(e.which || e.detail);

    if (code[index] === key) {
      index++;

      if (index === code.length) {
        alert('Hurray!');

        index = 0;
      }
    } else {
      index = 0;
    }
  });
}

init();


// You'll want to attach an event listener to document.body and check for 'keydown' events. If the user enters this special code, pressing all ten of the keys in the correct order, alert() a congratulatory message. However, if they press a key out of sequence or a key that isn't part of the Konami code, don't alert() anything and simply keep listening for all ten keydowns in the correct order.

// When you're testing the code out in the browser, be sure to call init() to attach the event listener and set everything up!