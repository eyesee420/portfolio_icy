$(document).ready(function() {
   
    function destroyCarousel() {
        if ($('.project-container-1').hasClass('slick-initialized')) {
            $('.project-container-1').slick('unslick');
        }
    }

    function applySlider() {
        $('.project-container-1').slick({
            dots: true,
            infinite: false,
            speed: 300,
            autoplay: true,
            autoplaySpeed: 5000,
            infinite: true,
            speed:500,
            slidesToShow: 4,
            slidesToScroll: 4,
            adaptiveHeight: true,
            responsive: [
              {
                breakpoint: 1150 ,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  infinite: true,
                  dots: true
                }
              },
              {
                breakpoint: 1000,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  adaptiveHeight: true,
                }
              },
              {
                breakpoint: 800,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  adaptiveHeight: true,
                  dots: false
                }
              }
              // You can unslick at a given breakpoint now by adding:
              // settings: "unslick"
              // instead of a settings object
            ]
          });
 }


 $.ajax({
  url: '/assets/projects.json',
  dataType: 'json',
  success: function(response) {
      // Handle the response data here
      console.log(response);
      var project = response.data;
      destroyCarousel(); // destroy slick slider first
      $('.project-container-1').html(
          project.map((data) => {
              // Disable the "Preview" button if data.preview is missing or empty
              const previewButton = data.preview ? `<a class="link_button" target="_blank" href="${data.preview}">Preview</a>` : '<span class="disabled_button">Preview</span>';
              return `<div class="display-project">
                  <div class="project-image">
                      <img src="${data.image}" alt="">
                  </div>
                  <div class="project-info">
                      <p>${data.project_name}</p>
                      <p class="description">${data.description}</p>
                  </div>
                  <div class="button_divs">
                      <div class="button_div">
                          ${previewButton}
                      </div>
                      <div class="button_div">
                          <a class="link_button" target="_blank" href="${data.link}">Download</a>
                      </div>
                  </div>
              </div>`;
          })
      );
      applySlider(); // apply slick slider again
  },
  error: function(xhr, textStatus, errorThrown) {
      // Handle any errors here
      console.log('Error fetching JSON file');
  }
});

$(document).ready(function() {
  $(".menu-icon").click(function() {
      $(".nav-center").toggleClass("active");
  });
  $(".button").click(function() {
    // Get form input values
    var name = $("#fname").val();
    var email = $("#email").val();
    var message = $("#message").val();
    
    // Construct the mailto link
    var mailtoLink = `mailto:${email}` +
                     "?subject=Contact%20Form%20Submission" +
                     "&body=Name:%20" + encodeURIComponent(name) +
                     "%0AEmail:%20" + encodeURIComponent(email) +
                     "%0AMessage:%20" + encodeURIComponent(message);
    
    // Open the email client
    window.location.href = mailtoLink;
});


  
});

  
});