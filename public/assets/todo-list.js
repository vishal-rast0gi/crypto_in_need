$(document).ready(function(){

    $('.req').click(function(){
        // console.log(this.id);
        var id = this.id;
        var url = "http://localhost:3000/Dashboard/Buy";
        $.post(url, {id: id} ,function (data, status) {
            // data = JSON.parse(data);
            console.log(data + 'should be success');
            // console.log(data.doc.price);
            window.location.href = "http://localhost:3000/Dashboard/Buy?id=" + data['_id'];
        });
        // return false;
        /*$.ajax({
            type: 'POST',
            url: url,
            data: {
              id: id
            },
            success: function(data){
                //do something with the data via front-end framework
                //rsalert('sdsds');
                window.location.href = "http://localhost:3000/Dashboard/Buy";//location.reload();
            }
        });*/
        // $.get(url,{id:id});
    });
  $('#form').click( function(){
console.log(11);
      var name = $('#name');
      var payment = $('#payment');
      var price = $('#price');
      var range = $('#range');
      var todo = {name: name.val(), payment: payment.val(), price: price.val(),range: range.val()};
      $.ajax({
        type: 'POST',
        url: '/Dashboard/createAdv',
        data: todo,
        success: function(data){
          //do something with the data via front-end framework
            window.location.href = "http://localhost:3000/Dashboard/";//location.reload();
        }
      });

      return false;

  });



  $('li').on('click', function(){
      var item = $(this).text().replace(/ /g, "-");
      $.ajax({
        type: 'DELETE',
        url: '/todo/' + item,
        success: function(data){
          //do something with the data via front-end framework
          location.reload();
        }
      });
  });

});
