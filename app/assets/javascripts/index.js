$(function(){
  function buildHTML(message) {
   var insertImage = message.image == null ? "" : `<img src=${message.image.url} class="img">`;
    var html = `<div class="message" id="target" data-message-id="${message.id}">
                  <div class="upper-message">
                    <div class="upper-message__user-name">
                      ${message.user_name}
                    </div>
                    <div class="upper-message__date">
                      ${message.created_at}
                    </div>
                    <div class=".lower-meesage">
                      ${message.content}
                    </div>
                    ${insertImage}
                  </div>
                </div>`
    $('.message-wrapper').append(html);
  }
  setInterval(update, 5000);

  function update(){
    var messageID = $('.message') == null ? "" : $('.message:last').data('message-id');
    $.ajax({
      url: location.href.json,
      type: 'GET',
      dataType: 'json',
      data: { id: messageID }
    })
    .done(function(data) {
      data.messages.forEach(function(message) {
        buildHTML(message)
        $('.message-wrapper').animate({scrollTop:$('#target')[0].scrollheight});
      });
    })
    .fail(function(data) {
      alert('自動更新に失敗しました');
    })
  }
  // $('#new_message').on('submit', function(e){
  //   e.preventDefault();
  //   var formData = new FormData(this);
  //   var url =$().attr('action');
  //   $ajax({
  //     url: url,
  //     type: 'POST'
  //     data: formData,
  //     dataType: 'json',
  //     processData: false,
  //     contentType: false
  //   })
  //   .done(function(data){
  //     buildHTML(data);
  //     $('.lower-meesage').val('')
  //     $('.form__message').val('')
  //     $('%p.lower-message__content').animate({scrollTop:$('#target')[0].scrollHeight});
  //   })
  //   .fail(function(){
  //     alert('error');
  //     })
  //   return false;
  //   });
  });