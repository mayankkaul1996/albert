function options_chooser()
{
	var e = document.getElementById("responsibility_box");
    options_chooser = e.selectedIndex;
	hide_intro_frame();
    setup_toolbar_resposibility_box(options_chooser);
    setup_main_frame();
}

function hide_intro_frame(){
	document.getElementById("intro_frame").style.display = 'none';
}

function setup_main_frame()
{
	document.getElementById("main_frame").style.display = 'block';
}


function setup_toolbar_resposibility_box(selected_index)
{
	document.getElementById("toolbar_butler_logo").style.display = 'inline-block';
	var e =document.getElementById("toolbar_responsibility_box");
	e.style.display = 'inline-block';
	e.options[selected_index].selected=true;
}

function toolbar_options_chooser()
{
	var e = document.getElementById("responsibility_box");
    options_chooser = e.selectedIndex;
}

 
 window.onload = function(e){
  		var ref = $('#li_more_info_label1');        
        
        ref.click(function(){
            $('#confirm_seller_layout').modal();
        });
}



function get_order_confirm_view(object)
{
	var li='<li class="list-group-item remainder">'+
                    '<div class="container-fluid" id="order_confirmation_remainder_block"">'+
                        '<div class="row no_space">'+
                            '<img class="col-md-2 rounded-circle no_space" id="li_icon" src="https://lh3.googleusercontent.com/-XdUIqdMkCWA/AAAAAAAAAAI/AAAAAAAAAAA/4252rscbv5MDJHu9fWGzDpgQ9hs8orw2AIhkKAUMQ____________ARi4vqL7______8B/w80-h80/photo.jpg">'+
                            '<div  class="col-md-8 no_space">'+
                                '<p class="col-md-12" id="li_title">Kindly get this order confirmed.</p>'+
                                '<p  class="col-md-12" id="li_remainder_text">Sir, would like to remind you... that the '+ _order_id+'is placed by '+_buyer_name +'since'+ _days_since_ordered+ 'days & still not confirmed. Kindly take a necesaary action to avoid delay.</p>'+
                                '<p  class="col-md-12 font-italic li_more_info_label" id="li_more_info_label4">Hello Albert here, I can get you little more details about this issue..</p>'+
                            '</div>'
                            '<div class="col-md-3 no_space">'+
                                '<p id="li_date">Order Date<br>'+_order_date+'</p>'+
                            '</div>'+
                        '</div>'+

                        '<div class="row no_space">'+
                            '<div class="col-md-8 no_space">'+
                                '<div class="row no_space" id="common_menu">'+
                                    '<div class="col-md-1 li_icon_action_button rounded">'+
                                        '<i class="material-icons" style="font-size:20px;">feedback</i>'+
                                    '</div>'+
                                    '<div class="col-md-1 li_icon_action_button rounded">'+
                                        '<i class="material-icons" style="font-size:20px;">notifications_active</i>'+
                                    '</div>'+
                                    '<div class="col-md-1 li_icon_action_button rounded">'+
                                        '<i class="material-icons" style="font-size:20px;">alternate_email</i>'+
                                    '</div>'+
                                     '<div class="col-md-1 li_icon_action_button rounded show_actions">'+
                                        '<i class="material-icons" style="font-size:20px;">add_circle</i>'+
                                    '</div>'+
                                '</div>'+
                            '</div>'+
                            '<div class="col-md-4 no_space"> '+
                                '<div class="row no_space li_action_menu">'+
                                    '<p class="col-md-4 li_action_button rounded">Confirm</p>'+
                                    '<p class="col-md-4 li_action_button rounded">Cancel</p>'+
                                    '<p class="col-md-4 li_action_button rounded">Comment</p>'+
                                '</div>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                '</li>';

}