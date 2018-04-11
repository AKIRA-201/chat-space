$(function(){
  function buildHTML(message){
  var img = ""
   if (message.image !== null) {img = `<img src="${message.image.url}">`}
    var html = `<div class="message" data-message-id="${message.id}">
                  <div class="upper-message">
                    <div class="upper-message__user-name">
                      ${ message.name }
                    </div>
                    <div class="upper-message__date">
                      ${ message.created_at }
                    </div>
                  </div>
                  <div class="lower-meesage">
                    <p class="lower-message__content">
                    ${ message.content }
                    ${ message.image == null ? "" : '<img src="' + message.image + '">' }
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
      $('.hidden').val('')
      $('.form__submit').attr('disabled',false);
      $('.message_wrapper').animate({scrollTop: $('.message_wrapper')[0].scrollHeight}, 1000);
    })
    .fail(function(){
      alert('error');
    })
  })

  var interval = setInterval(function(){
    var messageID = $('.message:last').attr('message-id');
    $('.message') == null ? messageID = 0 : messageID = $('.message:last').data('message-id')
    if(window.location.pathname.match(/\/groups\/\d+\/messages/)){
    $.ajax({
      url: window.location.href,
      dataType: 'json',
      data: {
        message: { id: messageID }
      },
      type: 'GET',
    })
    .done(function(message) {
      console.log(message);
      var insertHTML = '';
      message.forEach(function(message) {
        insertHTML += buildHTML(message);
        $('.message_wrapper').append(insertHTML);
        $('.message_wrapper').animate({scrollTop: $('.message_wrapper')[0].scrollHeight}, 1000);
      });
    })
    .fail(function(data) {
      alert('自動更新に失敗しました');
    });
  }else{
    clearInterval(interval);
  }},5000);
  });