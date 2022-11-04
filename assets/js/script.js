// (function ($) {
// 	// Start of use strict
// 	'use strict';

//   /*
//     --------------------------------------
// 		Promotion / Notification Cookie Bar 
// 		-------------------------------------- 
//   */
//   if(Cookies.get('promotion') != 'true') {   
//     $(".notification-bar").show();         
//    }
//    $(".close-announcement").on('click',function() {
//    $(".notification-bar").slideUp();  
//    Cookies.set('promotion', 'true', { expires: 1});  
//    return false;
//    });

//     /*
//     --------------------------------------
// 		 End Promotion / Notification Cookie Bar 
// 		-------------------------------------- 
//   */

// })(jQuery);


'use strict';


// modal variables

const modal = document.querySelector('[data-modal]');
const modalCloseBtn = document.querySelector('[data-modal-close]');
const modalCloseOverlay = document.querySelector('[data-modal-overlay]');

// modal function 

const modalCloseFunc = function () { modal.classList.add('closed')}

// modal EventListener

modalCloseOverlay.addEventListener('click', modalCloseFunc);
modalCloseBtn.addEventListener('click', modalCloseFunc);

