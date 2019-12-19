
var btncopy = document.querySelector('.js-copy');
if(btncopy) {
    btncopy.addEventListener('click', docopy);
}

function docopy() {

    // Cible de l'élément qui doit être copié
    var target = this.dataset.target;
    var fromElement = document.querySelector(target);
    if(!fromElement) return;

    // Sélection des caractères concernés
    var range = document.createRange();
    var selection = window.getSelection();
    range.selectNode(fromElement);
    selection.removeAllRanges();
    selection.addRange(range);

    try {
        // Exécution de la commande de copie
        var result = document.execCommand('copy');
        if (result) {
            // La copie a réussi
            alert('Copié !');
        }
    }
    catch(err) {
        // Une erreur est surevnue lors de la tentative de copie
        alert(err);
    }

    // Fin de l'opération
    selection = window.getSelection();
    if (typeof selection.removeRange === 'function') {
        selection.removeRange(range);
    } else if (typeof selection.removeAllRanges === 'function') {
        selection.removeAllRanges();
    }
}

(function ($) {
    "use strict";
	
	
	
		$('.fielddt').keyup(function () {			
				$('.inputdt').text($(this).val());
			
		});
		
		
		$('.fieldfonction').keyup(function () {		
			if($(this).val() == ""){
				$('.inputfonction').text("Administrateur National délégué à la Marque et au Digital 2019");
			}else{
				$('.inputfonction').text($(this).val());
			}	
		});
	
		$('.fieldphone').keyup(function () {		
			$('.inputphone').text($(this).val());
		});
	
		$('.fieldname').keyup(function () {		
			if($(this).val() == ""){
				$('.inputname').text("Sébastien REYNIER");
			}else{
				$('.inputname').text($(this).val());
			}	
		});
		
		$('.fieldmail').keyup(function () {		
			if($(this).val() == ""){
				$('.inputmail').prop("href", "mailto:communication@jcef.asso.fr");
				$('.inputmail').text("communication@jcef.asso.fr");
			}else{
				$('.inputmail').prop("href", "mailto:" + $(this).val());				
				$('.inputmail').text($(this).val());
			}	
		});
		
		
		$('.fieldFB').keyup(function () {		
			if($(this).val() == ""){
				$('#imgfb').prop("href", "#");
				$('#imgfb').hide();
			}else{
				$('#imgfb').prop("href", $(this).val());				
				$('#imgfb').show();
			}	
		});
		
		$('.fieldtwitter').keyup(function () {		
			if($(this).val() == ""){
				$('#imgtwitter').prop("href", "#");
				$('#imgtwitter').hide();
			}else{
				$('#imgtwitter').prop("href", $(this).val());				
				$('#imgtwitter').show();
			}	
		});
		
		$('.fieldyout').keyup(function () {		
			if($(this).val() == ""){
				$('#imgyoutube').prop("href", "#");
				$('#imgyoutube').hide();
			}else{
				$('#imgyoutube').prop("href", $(this).val());				
				$('#imgyoutube').show();
			}	
		});
		
		$('.fieldlinkedin').keyup(function () {		
			if($(this).val() == ""){
				$('#imglinkedin').prop("href", "#");
				$('#imglinkedin').hide();
			}else{
				$('#imglinkedin').prop("href", $(this).val());				
				$('#imglinkedin').show();
			}	
		});
		
		$('.fieldInstagram').keyup(function () {		
			if($(this).val() == ""){
				$('#imginsta').prop("href", "#");
				$('#imginsta').hide();
			}else{
				$('#imginsta').prop("href", $(this).val());				
				$('#imginsta').show();
			}	
		});
		
		//contacts
		$('.fieldAdresse').keyup(function () {			
				$('.inputaddress').text($(this).val());
			
		});

		$('.fieldTel').keyup(function () {			
			$('.inputteljcel').text($(this).val());
		});
		
		$('.fieldmailJCE').keyup(function () {			
			$('#mailjcel').text($(this).val());
			
			if($('.fieldmailJCE').val() != "" && $('.fieldweb').val() != ""){
				$('#sp').show();
			}else{
				$('#sp').hide();
			}
			
		});
		
		$('.fieldweb').keyup(function () {			
			$('#mailsite').text($(this).val());
			if($('.fieldmailJCE').val() != "" && $('.fieldweb').val() != ""){
				$('#sp').show();
			}else{
				$('#sp').hide();
			}
		});		
		
		//select JCEL
		$('.yourjcel').select2({
		  placeholder: "Sélectionner votre JCEF / Fédération"
		  
		});
		
		$('.yourjcel').on('select2:select', function (e) {
			    var data = e.params.data;
				console.log(data.id);
				$('#logo').prop("src", data.id);
		});
		

    /*==================================================================
    [ Validate ]*/
    var input = $('.validate-input .input100');

    $('.validate-form').on('submit',function(){
        var check = true;

        for(var i=0; i<input.length; i++) {
            if(validate(input[i]) == false){
                showValidate(input[i]);
                check=false;
            }
        }

        return check;
    });


    $('.validate-form .input100').each(function(){
        $(this).focus(function(){
           hideValidate(this);
        });
    });

    function validate (input) {
        if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
        }
        else {
            if($(input).val().trim() == ''){
                return false;
            }
        }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }
    
    

})(jQuery);