$(function(){
  function buildHTML(message){
    var image_url = "";
     if (image_url.length !== 0) {

    }
    var html = `<div class="message">
                  <div class="upper-message">
                    <div class="upper-message__user-name">
                    <p>${ message.name }</p>
                    </div>
                    <div class="upper-message__date">
                    <p>${ message.created_at }</p>
                    </div>
                  </div>
                  <div class="lower-meesage">
                    <p class="lower-message__content">
                    <p>${ message.content}</p>
                    <img src = ${message.image}>
                    </p>
                  </div>
              </div>`
    return html;
  }

  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.message_wrapper').append(html);
      $('.form__message').val('');
      $('.form__submit').prop('disabled', false);
      $('.message_wrapper').animate({scrollTop: $('.message_wrapper')[0].scrollHeight}, 1000);
    })
    .fail(function(){
      alert('error');
    })
  })
})