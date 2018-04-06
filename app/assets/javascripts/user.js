$(function(){
  function buildHTML(message){
    var html = `<div class="chat-group-user clearfix">
                  <p class="chat-group-user__name">ユーザー名</p>
                  <a class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="ユーザーのid" data-user-name="ユーザー名">追加</a>
                </div>`
    return html;
  }

  $(function() {
    $('.chat-group-form__input').on('keyup', function(){
      var input = $(this).val();
      console.log(input);
      $.ajax({
        type: 'GET',
        url: '/users/search',
        data: { keyword: input },
        dataType:'json'
      })
      .done(function(users){
        $('.chat-group-form__input').empty
        if (users.length!== 0) {
          users.forEach(function(user){
            appendUser(user);
          });
        }
        .fail(function(){
          appendNOuser('一致するユーザーはいません');
        })
      })
    });
  });
});