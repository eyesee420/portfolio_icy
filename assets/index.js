
    const titleChars = $('.tittle-name').text().split('');
    $('.tittle-name').text('');

    let charIndex = 0;
    let timer;

    function addChar() {
    $('.tittle-name').text((i, text) => text + titleChars[charIndex]);
    charIndex++;

    if (charIndex < titleChars.length) {
        timer = setTimeout(addChar, 100); // adjust the delay time as desired
    }
    }

    function resetTypewriter() {
    $('.tittle-name').text('');
    clearTimeout(timer);
    charIndex = 0;
    addChar();
    }
    addChar();

    $('.tittle-name').click(resetTypewriter);


  


    const $list = $(".nav");

    function activeLink() {
      $list.removeClass("active-nav");
      $(this).addClass("active-nav");
    }
    
    $list.on("click", activeLink);
    
    
      $('.settings-container').click(function() {

        $(".modal-content").fadeIn(1500).addClass('modal-active');
        $(".modal").fadeIn(1000).addClass('modal-active');
  
      });
    
      $('.close').click(function() {
        $(".modal-content").fadeOut(1500).removeClass('modal-active');
        $(".modal").fadeOut(1000).removeClass('modal-active');

      });

      $(window).click(function(event) {
        if ($(event.target).hasClass('modal-active')) {
          $(".modal-content").fadeOut(1500).removeClass('modal-active');
          $(".modal").fadeOut(1000).removeClass('modal-active');
        }
      });
      

  $(document).ready(function() {
    $('#modal_form').on('submit', function(e) {
        e.preventDefault(); // prevent default form submit behavior
        var formData = {}; // create empty object to store form data
        $('[type="text"]').each(function() {
            if ($(this).attr('name')) { // check if input field has a name attribute
                formData[$(this).attr('name')] = $(this).val(); // add input value to object
            }
        });
        var jsonData = {};
        jsonData["myForm"] = formData; // create object with specified name and add form data
        console.log(jsonData); // output JSON data to console
    });
});

$.getJSON('/assets/me.json', function(data) {
  console.log(data); // output JSON data to console
});



