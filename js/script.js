var modal = document.querySelectorAll('.modal'),
	modal_map = document.querySelector('.modal-map'),
	modal_feedback = document.querySelector('.modal-feedback'),
	modal_add = document.querySelector('.modal-add'),

	img_map = document.querySelector('.main-contacts__map'),
	btn_feedback = document.querySelector('.main-contacts__red-btn'),
	btn_add = document.querySelectorAll('.hover-product__buy'),
	btn_add_z = document.querySelectorAll('.hover-product__bookmark'),

	btn_add_continue = document.querySelector('.modal-add__btn--continue'),
	btn_close = document.querySelectorAll('.btn-close'),

	cart = document.querySelector('.user-tools__item--cart'),

	form_feedback = modal_feedback.querySelector('.form-feedback'),
	form_feedback_name = modal_feedback.querySelector('[name=modal-feedback__name]'), 
	form_feedback_email = modal_feedback.querySelector('[name=modal-feedback__mail]'),
	form_feedback_text = modal_feedback.querySelector('[name=modal-feedback__tarea]');

var index, str, dstr, num;

if (modal_map != null)
	img_map.addEventListener('click', function(e) {
		e.preventDefault();
		modal_map.classList.add('modal-show');
	});

if (modal_feedback != null) {
	btn_feedback.addEventListener('click', function(e) {
		e.preventDefault();
		modal_feedback.classList.add('modal-show');
	});

	form_feedback.addEventListener('submit', function(e) {
		modal_feedback.classList.remove('modal-error');
		if (!form_feedback_name.value || !form_feedback_email.value || !form_feedback_text.value) {
			e.preventDefault();
			setTimeout(function() {
				modal_feedback.classList.add('modal-error');
			}, 25);
			if (!form_feedback_name.value) {
				form_feedback_name.focus();
				} else { if (!form_feedback_email.value) {
					form_feedback_email.focus();
					} else { if (!form_feedback_text.value) {
						form_feedback_text.focus();
					}
				}
			}
		}
	});
}

if (modal_add != null) {
	for (index = 0; index < btn_add.length; ++index) {
	    btn_add[index].addEventListener('click', function(e) {
			e.preventDefault();
			modal_add.classList.add('modal-show');	
			str = cart.textContent;
			num = Number(str.substring(str.indexOf(":")+1, str.length))+1;
			str = str.substring(0,str.indexOf(":")+1) + " " + String(num);
			cart.textContent = str;
			if (cart.classList.contains('user-tools__item--red') != true)
				cart.classList.add('user-tools__item--red');
		});
	    btn_add[index].addEventListener('focus', function(e) {
	    	this.parentNode.parentNode.classList.add('product--focus');
	    	this.parentNode.classList.add('hover-product--focus');
		});
	    btn_add[index].addEventListener('focusin', function(e) {
	    	this.parentNode.parentNode.classList.add('product--focus');
	    	this.parentNode.classList.add('hover-product--focus');
		});
	    btn_add[index].addEventListener('focusout', function(e) {
	    	this.parentNode.classList.remove('hover-product--focus');
	    	this.parentNode.parentNode.classList.remove('product--focus');
		});
		btn_add_z[index].addEventListener('focus', function(e) {
	    	this.parentNode.parentNode.classList.add('product--focus');
	    	this.parentNode.classList.add('hover-product--focus');
		});
		btn_add_z[index].addEventListener('focusin', function(e) {
	    	this.parentNode.parentNode.classList.add('product--focus');
	    	this.parentNode.classList.add('hover-product--focus');
		});
	    btn_add_z[index].addEventListener('focusout', function(e) {
	    	this.parentNode.classList.remove('hover-product--focus');
	    	this.parentNode.parentNode.classList.remove('product--focus');
		});
	};
}

if (modal_add != null)
	btn_add_continue.addEventListener('click', function(e) {
		e.preventDefault();
		modal_add.classList.remove('modal-show');
	});

if (modal != null)
	for (index = 0; index < btn_close.length; ++index) {
	    btn_close[index].addEventListener('click', function(e) {
			e.preventDefault();
			for (index = 0; index < modal.length; ++index) {
				    this.parentNode.classList.remove('modal-show');
			}			
		});
	};
