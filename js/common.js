(function () {

  let swiper = new Swiper('.main-slider__col', {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  });
})(), function () {

  let swiper = new Swiper('.top-products__col', {
    slidesPerView: "auto",
    spaceBetween: 19,
    // centeredSlides: true,
    navigation: {
      nextEl: '.top-products__next',
      prevEl: '.top-products__prev'
    }
  });
}(), function () {

  let swiper = new Swiper('.category__col', {
    slidesPerView: "auto",
    spaceBetween: 30,
    navigation: {
      nextEl: '.category__btn-next',
      prevEl: '.category__btn-prev'
    }

    // breakpoints: {
    //   320: {
    //     spaceBetween: 15
    //   },
    //   768: {
    //     spaceBetween: 30
    //   },
    // },
  });
}(), function () {

  let swiper = new Swiper('.top-products__sale', {
    slidesPerView: "auto",
    spaceBetween: 19,
    navigation: {
      nextEl: '.top-products__sale-next',
      prevEl: '.top-products__sale-prev'
    }
  });
}(), function () {

  let swiper = new Swiper('.block-board__slide', {
    slidesPerView: "auto",
    spaceBetween: 30,
    // centeredSlides: true,
    navigation: {
      nextEl: '.block-board__next',
      prevEl: '.block-board__prev'
    },

    breakpoints: {
      320: {
        spaceBetween: 20
      },
      768: {
        spaceBetween: 30
      }
    }
  });
}(), function () {

  const menuButton = document.querySelector('.nav__cat');
  const mobileOpen = document.querySelector('.main-nav__list');
  const modal = document.querySelector('.nav-m__wrap');

  menuButton.onclick = function () {
    menuButton.classList.toggle('active');
    mobileOpen.classList.toggle('main-nav__list-open');
    modal.classList.toggle('nav-m__wrap_modal');
  };
}(), function () {

  const humburgerButton = document.querySelector('#button');
  const humburgerButtonOpen = document.querySelector('.nav-button');
  const sidebar = document.querySelector('.mob-sidebar');
  const closed = document.querySelector('#closed');

  humburgerButton.addEventListener('click', toggleModal);
  closed.addEventListener('click', toggleModal);
  humburgerButtonOpen.addEventListener('click', toggleModal);

  function toggleModal() {
    sidebar.classList.toggle('opened');
  }
}();

//Mobile footer * footer-elements.js
// $(function() {
//   if (window.matchMedia("(max-width: 767px)").matches) {
//     $(".site-footer").on("click", "f-info__title", function() {
//       var $this = $(this),
//         $allHeaders = $("f-info__title"),
//         $thisBody = $this.next("f-info__list");

//       if (!$thisBody.is(":visible")) {
//         $allHeaders.removeClass("active");

//         $(".site-footer")
//           .find("f-info__list")
//           .slideUp();

//         $thisBody.slideDown();
//         $this.addClass("active");
//       } else {
//         $this.removeClass("active");
//         $thisBody.slideUp();
//       }
//     });
//   }

//Scroll to top
//   (function() {
//     $(".site-footer__item_scroll-top").click(function() {
//       $("html, body").animate({ scrollTop: 0 }, "fast");
//     });
//   })();
// });


// $(function() {

//   $(".cat-menu").on("click", function(e) {
// 		e.preventDefault();
// 		var $this = $(this);
// 		$this.closest(".nav__cat").toggleClass("active");
// 		$("body").toggleClass("is-overlayed");

// 		$(document).bind("click.wrapper", function(e) {
// 			if ($(e.target).closest($this).length == 0) {
// 				$("body").removeClass("is-overlayed");
// 				$(".nav__cat").removeClass("active");
// 				$(document).unbind("click.wrapper");
// 			}
// 		});
// 	});

// }())
// $('.phone__input').mask('(99) 999-99-99');
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1vbi5qcyJdLCJuYW1lcyI6WyJzd2lwZXIiLCJTd2lwZXIiLCJzcGFjZUJldHdlZW4iLCJjZW50ZXJlZFNsaWRlcyIsImF1dG9wbGF5IiwiZGVsYXkiLCJkaXNhYmxlT25JbnRlcmFjdGlvbiIsInBhZ2luYXRpb24iLCJlbCIsImNsaWNrYWJsZSIsInNsaWRlc1BlclZpZXciLCJuYXZpZ2F0aW9uIiwibmV4dEVsIiwicHJldkVsIiwiYnJlYWtwb2ludHMiLCJtZW51QnV0dG9uIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwibW9iaWxlT3BlbiIsIm1vZGFsIiwib25jbGljayIsImNsYXNzTGlzdCIsInRvZ2dsZSIsImh1bWJ1cmdlckJ1dHRvbiIsImh1bWJ1cmdlckJ1dHRvbk9wZW4iLCJzaWRlYmFyIiwiY2xvc2VkIiwiYWRkRXZlbnRMaXN0ZW5lciIsInRvZ2dsZU1vZGFsIl0sIm1hcHBpbmdzIjoiQUFBQyxhQUFZOztBQUVYLE1BQUlBLFNBQVMsSUFBSUMsTUFBSixDQUFXLG1CQUFYLEVBQWdDO0FBQzNDQyxrQkFBYyxFQUQ2QjtBQUUzQ0Msb0JBQWdCLElBRjJCO0FBRzNDQyxjQUFVO0FBQ1JDLGFBQU8sSUFEQztBQUVSQyw0QkFBc0I7QUFGZCxLQUhpQztBQU8zQ0MsZ0JBQVk7QUFDVkMsVUFBSSxvQkFETTtBQUVWQyxpQkFBVztBQUZEO0FBUCtCLEdBQWhDLENBQWI7QUFhRCxDQWZBLEdBQUQsRUFpQkcsWUFBWTs7QUFFWCxNQUFJVCxTQUFTLElBQUlDLE1BQUosQ0FBVyxvQkFBWCxFQUFpQztBQUM1Q1MsbUJBQWUsTUFENkI7QUFFNUNSLGtCQUFjLEVBRjhCO0FBRzVDO0FBQ0FTLGdCQUFZO0FBQ1ZDLGNBQVEscUJBREU7QUFFVkMsY0FBUTtBQUZFO0FBSmdDLEdBQWpDLENBQWI7QUFVRCxDQVpBLEVBakJILEVBK0JHLFlBQVk7O0FBRVgsTUFBSWIsU0FBUyxJQUFJQyxNQUFKLENBQVcsZ0JBQVgsRUFBNkI7QUFDeENTLG1CQUFlLE1BRHlCO0FBRXhDUixrQkFBYyxFQUYwQjtBQUd4Q1MsZ0JBQVk7QUFDVkMsY0FBUSxxQkFERTtBQUVWQyxjQUFRO0FBRkU7O0FBS1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWZ3QyxHQUE3QixDQUFiO0FBa0JELENBcEJBLEVBL0JILEVBcURHLFlBQVk7O0FBRVgsTUFBSWIsU0FBUyxJQUFJQyxNQUFKLENBQVcscUJBQVgsRUFBa0M7QUFDN0NTLG1CQUFlLE1BRDhCO0FBRTdDUixrQkFBYyxFQUYrQjtBQUc3Q1MsZ0JBQVk7QUFDVkMsY0FBUSwwQkFERTtBQUVWQyxjQUFRO0FBRkU7QUFIaUMsR0FBbEMsQ0FBYjtBQVNELENBWEEsRUFyREgsRUFrRUcsWUFBWTs7QUFFWCxNQUFJYixTQUFTLElBQUlDLE1BQUosQ0FBVyxxQkFBWCxFQUFrQztBQUM3Q1MsbUJBQWUsTUFEOEI7QUFFN0NSLGtCQUFjLEVBRitCO0FBRzdDO0FBQ0FTLGdCQUFZO0FBQ1ZDLGNBQVEsb0JBREU7QUFFVkMsY0FBUTtBQUZFLEtBSmlDOztBQVM3Q0MsaUJBQWE7QUFDWCxXQUFLO0FBQ0haLHNCQUFjO0FBRFgsT0FETTtBQUlYLFdBQUs7QUFDSEEsc0JBQWM7QUFEWDtBQUpNO0FBVGdDLEdBQWxDLENBQWI7QUFtQkQsQ0FyQkEsRUFsRUgsRUF5RkcsWUFBWTs7QUFFWCxRQUFNYSxhQUFhQyxTQUFTQyxhQUFULENBQXVCLFdBQXZCLENBQW5CO0FBQ0EsUUFBTUMsYUFBYUYsU0FBU0MsYUFBVCxDQUF1QixpQkFBdkIsQ0FBbkI7QUFDQSxRQUFNRSxRQUFRSCxTQUFTQyxhQUFULENBQXVCLGNBQXZCLENBQWQ7O0FBRUFGLGFBQVdLLE9BQVgsR0FBcUIsWUFBWTtBQUMvQkwsZUFBV00sU0FBWCxDQUFxQkMsTUFBckIsQ0FBNEIsUUFBNUI7QUFDQUosZUFBV0csU0FBWCxDQUFxQkMsTUFBckIsQ0FBNEIscUJBQTVCO0FBQ0FILFVBQU1FLFNBQU4sQ0FBZ0JDLE1BQWhCLENBQXVCLG1CQUF2QjtBQUNELEdBSkQ7QUFNRCxDQVpBLEVBekZILEVBdUdHLFlBQVk7O0FBRVgsUUFBTUMsa0JBQWtCUCxTQUFTQyxhQUFULENBQXVCLFNBQXZCLENBQXhCO0FBQ0EsUUFBTU8sc0JBQXNCUixTQUFTQyxhQUFULENBQXVCLGFBQXZCLENBQTVCO0FBQ0EsUUFBTVEsVUFBVVQsU0FBU0MsYUFBVCxDQUF1QixjQUF2QixDQUFoQjtBQUNBLFFBQU1TLFNBQVNWLFNBQVNDLGFBQVQsQ0FBdUIsU0FBdkIsQ0FBZjs7QUFFQU0sa0JBQWdCSSxnQkFBaEIsQ0FBaUMsT0FBakMsRUFBMENDLFdBQTFDO0FBQ0FGLFNBQU9DLGdCQUFQLENBQXdCLE9BQXhCLEVBQWlDQyxXQUFqQztBQUNBSixzQkFBb0JHLGdCQUFwQixDQUFxQyxPQUFyQyxFQUE4Q0MsV0FBOUM7O0FBRUEsV0FBU0EsV0FBVCxHQUF1QjtBQUNyQkgsWUFBUUosU0FBUixDQUFrQkMsTUFBbEIsQ0FBeUIsUUFBekI7QUFDRDtBQUVGLENBZkEsRUF2R0g7O0FBd0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBIiwiZmlsZSI6ImNvbW1vbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiAoKSB7XG5cbiAgbGV0IHN3aXBlciA9IG5ldyBTd2lwZXIoJy5tYWluLXNsaWRlcl9fY29sJywge1xuICAgIHNwYWNlQmV0d2VlbjogMzAsXG4gICAgY2VudGVyZWRTbGlkZXM6IHRydWUsXG4gICAgYXV0b3BsYXk6IHtcbiAgICAgIGRlbGF5OiA1MDAwLFxuICAgICAgZGlzYWJsZU9uSW50ZXJhY3Rpb246IGZhbHNlLFxuICAgIH0sXG4gICAgcGFnaW5hdGlvbjoge1xuICAgICAgZWw6ICcuc3dpcGVyLXBhZ2luYXRpb24nLFxuICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgIH0sXG4gIH0pO1xuXG59KCkpXG4gICxcbiAgKGZ1bmN0aW9uICgpIHtcblxuICAgIGxldCBzd2lwZXIgPSBuZXcgU3dpcGVyKCcudG9wLXByb2R1Y3RzX19jb2wnLCB7XG4gICAgICBzbGlkZXNQZXJWaWV3OiBcImF1dG9cIixcbiAgICAgIHNwYWNlQmV0d2VlbjogMTksXG4gICAgICAvLyBjZW50ZXJlZFNsaWRlczogdHJ1ZSxcbiAgICAgIG5hdmlnYXRpb246IHtcbiAgICAgICAgbmV4dEVsOiAnLnRvcC1wcm9kdWN0c19fbmV4dCcsXG4gICAgICAgIHByZXZFbDogJy50b3AtcHJvZHVjdHNfX3ByZXYnLFxuICAgICAgfSxcbiAgICB9KTtcblxuICB9KCkpXG4gICxcbiAgKGZ1bmN0aW9uICgpIHtcblxuICAgIGxldCBzd2lwZXIgPSBuZXcgU3dpcGVyKCcuY2F0ZWdvcnlfX2NvbCcsIHtcbiAgICAgIHNsaWRlc1BlclZpZXc6IFwiYXV0b1wiLFxuICAgICAgc3BhY2VCZXR3ZWVuOiAzMCxcbiAgICAgIG5hdmlnYXRpb246IHtcbiAgICAgICAgbmV4dEVsOiAnLmNhdGVnb3J5X19idG4tbmV4dCcsXG4gICAgICAgIHByZXZFbDogJy5jYXRlZ29yeV9fYnRuLXByZXYnLFxuICAgICAgfSxcblxuICAgICAgLy8gYnJlYWtwb2ludHM6IHtcbiAgICAgIC8vICAgMzIwOiB7XG4gICAgICAvLyAgICAgc3BhY2VCZXR3ZWVuOiAxNVxuICAgICAgLy8gICB9LFxuICAgICAgLy8gICA3Njg6IHtcbiAgICAgIC8vICAgICBzcGFjZUJldHdlZW46IDMwXG4gICAgICAvLyAgIH0sXG4gICAgICAvLyB9LFxuICAgIH0pO1xuXG4gIH0oKSlcbiAgLFxuICAoZnVuY3Rpb24gKCkge1xuXG4gICAgbGV0IHN3aXBlciA9IG5ldyBTd2lwZXIoJy50b3AtcHJvZHVjdHNfX3NhbGUnLCB7XG4gICAgICBzbGlkZXNQZXJWaWV3OiBcImF1dG9cIixcbiAgICAgIHNwYWNlQmV0d2VlbjogMTksXG4gICAgICBuYXZpZ2F0aW9uOiB7XG4gICAgICAgIG5leHRFbDogJy50b3AtcHJvZHVjdHNfX3NhbGUtbmV4dCcsXG4gICAgICAgIHByZXZFbDogJy50b3AtcHJvZHVjdHNfX3NhbGUtcHJldicsXG4gICAgICB9LFxuICAgIH0pO1xuXG4gIH0oKSlcbiAgLFxuICAoZnVuY3Rpb24gKCkge1xuXG4gICAgbGV0IHN3aXBlciA9IG5ldyBTd2lwZXIoJy5ibG9jay1ib2FyZF9fc2xpZGUnLCB7XG4gICAgICBzbGlkZXNQZXJWaWV3OiBcImF1dG9cIixcbiAgICAgIHNwYWNlQmV0d2VlbjogMzAsXG4gICAgICAvLyBjZW50ZXJlZFNsaWRlczogdHJ1ZSxcbiAgICAgIG5hdmlnYXRpb246IHtcbiAgICAgICAgbmV4dEVsOiAnLmJsb2NrLWJvYXJkX19uZXh0JyxcbiAgICAgICAgcHJldkVsOiAnLmJsb2NrLWJvYXJkX19wcmV2JyxcbiAgICAgIH0sXG5cbiAgICAgIGJyZWFrcG9pbnRzOiB7XG4gICAgICAgIDMyMDoge1xuICAgICAgICAgIHNwYWNlQmV0d2VlbjogMjBcbiAgICAgICAgfSxcbiAgICAgICAgNzY4OiB7XG4gICAgICAgICAgc3BhY2VCZXR3ZWVuOiAzMFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KTtcblxuICB9KCkpXG4gICxcbiAgKGZ1bmN0aW9uICgpIHtcblxuICAgIGNvbnN0IG1lbnVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2X19jYXQnKTtcbiAgICBjb25zdCBtb2JpbGVPcGVuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tbmF2X19saXN0Jyk7XG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2LW1fX3dyYXAnKTtcblxuICAgIG1lbnVCdXR0b24ub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIG1lbnVCdXR0b24uY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG4gICAgICBtb2JpbGVPcGVuLmNsYXNzTGlzdC50b2dnbGUoJ21haW4tbmF2X19saXN0LW9wZW4nKTtcbiAgICAgIG1vZGFsLmNsYXNzTGlzdC50b2dnbGUoJ25hdi1tX193cmFwX21vZGFsJyk7XG4gICAgfVxuXG4gIH0oKSlcbiAgLFxuICAoZnVuY3Rpb24gKCkge1xuXG4gICAgY29uc3QgaHVtYnVyZ2VyQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J1dHRvbicpO1xuICAgIGNvbnN0IGh1bWJ1cmdlckJ1dHRvbk9wZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2LWJ1dHRvbicpO1xuICAgIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9iLXNpZGViYXInKTtcbiAgICBjb25zdCBjbG9zZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2xvc2VkJyk7XG5cbiAgICBodW1idXJnZXJCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGVNb2RhbCk7XG4gICAgY2xvc2VkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlTW9kYWwpO1xuICAgIGh1bWJ1cmdlckJ1dHRvbk9wZW4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGVNb2RhbCk7XG5cbiAgICBmdW5jdGlvbiB0b2dnbGVNb2RhbCgpIHtcbiAgICAgIHNpZGViYXIuY2xhc3NMaXN0LnRvZ2dsZSgnb3BlbmVkJyk7XG4gICAgfVxuXG4gIH0oKSlcblxuLy9Nb2JpbGUgZm9vdGVyICogZm9vdGVyLWVsZW1lbnRzLmpzXG4vLyAkKGZ1bmN0aW9uKCkge1xuLy8gICBpZiAod2luZG93Lm1hdGNoTWVkaWEoXCIobWF4LXdpZHRoOiA3NjdweClcIikubWF0Y2hlcykge1xuLy8gICAgICQoXCIuc2l0ZS1mb290ZXJcIikub24oXCJjbGlja1wiLCBcImYtaW5mb19fdGl0bGVcIiwgZnVuY3Rpb24oKSB7XG4vLyAgICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpLFxuLy8gICAgICAgICAkYWxsSGVhZGVycyA9ICQoXCJmLWluZm9fX3RpdGxlXCIpLFxuLy8gICAgICAgICAkdGhpc0JvZHkgPSAkdGhpcy5uZXh0KFwiZi1pbmZvX19saXN0XCIpO1xuXG4vLyAgICAgICBpZiAoISR0aGlzQm9keS5pcyhcIjp2aXNpYmxlXCIpKSB7XG4vLyAgICAgICAgICRhbGxIZWFkZXJzLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xuXG4vLyAgICAgICAgICQoXCIuc2l0ZS1mb290ZXJcIilcbi8vICAgICAgICAgICAuZmluZChcImYtaW5mb19fbGlzdFwiKVxuLy8gICAgICAgICAgIC5zbGlkZVVwKCk7XG5cbi8vICAgICAgICAgJHRoaXNCb2R5LnNsaWRlRG93bigpO1xuLy8gICAgICAgICAkdGhpcy5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcbi8vICAgICAgIH0gZWxzZSB7XG4vLyAgICAgICAgICR0aGlzLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xuLy8gICAgICAgICAkdGhpc0JvZHkuc2xpZGVVcCgpO1xuLy8gICAgICAgfVxuLy8gICAgIH0pO1xuLy8gICB9XG5cbiAgLy9TY3JvbGwgdG8gdG9wXG4vLyAgIChmdW5jdGlvbigpIHtcbi8vICAgICAkKFwiLnNpdGUtZm9vdGVyX19pdGVtX3Njcm9sbC10b3BcIikuY2xpY2soZnVuY3Rpb24oKSB7XG4vLyAgICAgICAkKFwiaHRtbCwgYm9keVwiKS5hbmltYXRlKHsgc2Nyb2xsVG9wOiAwIH0sIFwiZmFzdFwiKTtcbi8vICAgICB9KTtcbi8vICAgfSkoKTtcbi8vIH0pO1xuXG5cbi8vICQoZnVuY3Rpb24oKSB7XG5cbi8vICAgJChcIi5jYXQtbWVudVwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHtcbi8vIFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG4vLyBcdFx0dmFyICR0aGlzID0gJCh0aGlzKTtcbi8vIFx0XHQkdGhpcy5jbG9zZXN0KFwiLm5hdl9fY2F0XCIpLnRvZ2dsZUNsYXNzKFwiYWN0aXZlXCIpO1xuLy8gXHRcdCQoXCJib2R5XCIpLnRvZ2dsZUNsYXNzKFwiaXMtb3ZlcmxheWVkXCIpO1xuXG4vLyBcdFx0JChkb2N1bWVudCkuYmluZChcImNsaWNrLndyYXBwZXJcIiwgZnVuY3Rpb24oZSkge1xuLy8gXHRcdFx0aWYgKCQoZS50YXJnZXQpLmNsb3Nlc3QoJHRoaXMpLmxlbmd0aCA9PSAwKSB7XG4vLyBcdFx0XHRcdCQoXCJib2R5XCIpLnJlbW92ZUNsYXNzKFwiaXMtb3ZlcmxheWVkXCIpO1xuLy8gXHRcdFx0XHQkKFwiLm5hdl9fY2F0XCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xuLy8gXHRcdFx0XHQkKGRvY3VtZW50KS51bmJpbmQoXCJjbGljay53cmFwcGVyXCIpO1xuLy8gXHRcdFx0fVxuLy8gXHRcdH0pO1xuLy8gXHR9KTtcblxuLy8gfSgpKVxuLy8gJCgnLnBob25lX19pbnB1dCcpLm1hc2soJyg5OSkgOTk5LTk5LTk5Jyk7XG4iXX0=
