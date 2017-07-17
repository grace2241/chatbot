  var username = "";

            function send_message(message){
                var prevMessage = $('#container').html();
                var chatBot = "<span class='bot'>Yinka: </span><br>"
                 var userMessageMa = "<div class='grass'>"+ chatBot + message  +"</div>";
               $('#container').html();

            if (prevMessage.length>3){
               prevMessage = prevMessage + "<br>";

              }
               $("#container").html(prevMessage + "<span class='curent'>" + userMessageMa + "</span>");

                $(".grass").delay(100).fadeIn();
            }

        function get_username(){
         send_message("Hello, what is your name?");

        }
            function artificial(message){
                if(username.length<3){
                    username = message;
                     send_message("Nice to meet you " + username + " , how are you doing?");
                }
                if(message.indexOf("how are you?")>=0){
                    send_message("Thanks,i'm good");
                }else if(message.indexOf("time")>=0){
                     var date= new Date();
                     var h = date.getHours();
                     var m = date.getMinutes();
                    send_message("the time is " + h + ":" + m);
                }
               else if(message.indexOf("What do you do?")>=0){
                    send_message("I chat with people");
                }
               else if(message.indexOf("Can i know more of you?")>=0){
                    send_message("I was created on 22nd of june,2017 by Grace Olayinka, a programmer in the making.");
                }
                else if(message.indexOf("alright, chat you later")>=0){
                    send_message("bye,nice being friends with you...winks");
                }

            }

        $(document).ready(function(){
            get_username();

            $("#textbox").keypress(function(event){
                if(event.which == 13){
                    if($("#enter").prop("checked")){
                         $("#but").click();
                         event.preventDefault();
                    }

                }
            });
            $("#enter").hide();
            var count = 0;

           $("#but").click(function(){
               count++;
               var username = "<span class='username'>you: </span><br>";

                var $con_height = $("#container").outerHeight();
                alert($con_height);
               var userMessage = $('#textbox').val();
               var userMessageHtml = "<div class='user'>"+username + userMessage+"</div>";
               $('#textbox').val("");

             var prevMessage = $('#container').html();
               if (prevMessage.length > 3){
                   prevMessage = prevMessage + "<br>"
               };
               $("#container").html(prevMessage + userMessageHtml);

               $("#container").scrollTop($con_height);
              artificial(userMessage);
           });
            });
