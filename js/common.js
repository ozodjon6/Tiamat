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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1vbi5qcyJdLCJuYW1lcyI6WyJzd2lwZXIiLCJTd2lwZXIiLCJzcGFjZUJldHdlZW4iLCJjZW50ZXJlZFNsaWRlcyIsImF1dG9wbGF5IiwiZGVsYXkiLCJkaXNhYmxlT25JbnRlcmFjdGlvbiIsInBhZ2luYXRpb24iLCJlbCIsImNsaWNrYWJsZSIsInNsaWRlc1BlclZpZXciLCJuYXZpZ2F0aW9uIiwibmV4dEVsIiwicHJldkVsIiwiYnJlYWtwb2ludHMiLCJtZW51QnV0dG9uIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwibW9iaWxlT3BlbiIsIm1vZGFsIiwib25jbGljayIsImNsYXNzTGlzdCIsInRvZ2dsZSJdLCJtYXBwaW5ncyI6IkFBQUMsYUFBWTs7QUFFWCxNQUFJQSxTQUFTLElBQUlDLE1BQUosQ0FBVyxtQkFBWCxFQUFnQztBQUMzQ0Msa0JBQWMsRUFENkI7QUFFM0NDLG9CQUFnQixJQUYyQjtBQUczQ0MsY0FBVTtBQUNSQyxhQUFPLElBREM7QUFFUkMsNEJBQXNCO0FBRmQsS0FIaUM7QUFPM0NDLGdCQUFZO0FBQ1ZDLFVBQUksb0JBRE07QUFFVkMsaUJBQVc7QUFGRDtBQVArQixHQUFoQyxDQUFiO0FBYUQsQ0FmQSxHQUFELEVBaUJHLFlBQVk7O0FBRVgsTUFBSVQsU0FBUyxJQUFJQyxNQUFKLENBQVcsb0JBQVgsRUFBaUM7QUFDNUNTLG1CQUFjLE1BRDhCO0FBRTVDUixrQkFBYyxFQUY4QjtBQUc1QztBQUNBUyxnQkFBWTtBQUNWQyxjQUFRLHFCQURFO0FBRVZDLGNBQVE7QUFGRTtBQUpnQyxHQUFqQyxDQUFiO0FBVUQsQ0FaQSxFQWpCSCxFQStCRyxZQUFZOztBQUVYLE1BQUliLFNBQVMsSUFBSUMsTUFBSixDQUFXLGdCQUFYLEVBQTZCO0FBQ3hDUyxtQkFBYyxNQUQwQjtBQUV4Q1Isa0JBQWMsRUFGMEI7QUFHeENTLGdCQUFZO0FBQ1ZDLGNBQVEscUJBREU7QUFFVkMsY0FBUTtBQUZFO0FBSDRCLEdBQTdCLENBQWI7QUFTRCxDQVhBLEVBL0JILEVBNENHLFlBQVk7O0FBRVgsTUFBSWIsU0FBUyxJQUFJQyxNQUFKLENBQVcscUJBQVgsRUFBa0M7QUFDN0NTLG1CQUFjLE1BRCtCO0FBRTdDUixrQkFBYyxFQUYrQjtBQUc3Q1MsZ0JBQVk7QUFDVkMsY0FBUSwwQkFERTtBQUVWQyxjQUFRO0FBRkU7QUFIaUMsR0FBbEMsQ0FBYjtBQVNELENBWEEsRUE1Q0gsRUF5REcsWUFBWTs7QUFFWCxNQUFJYixTQUFTLElBQUlDLE1BQUosQ0FBVyxxQkFBWCxFQUFrQztBQUM3Q1MsbUJBQWMsTUFEK0I7QUFFN0NSLGtCQUFjLEVBRitCO0FBRzdDO0FBQ0FTLGdCQUFZO0FBQ1ZDLGNBQVEsb0JBREU7QUFFVkMsY0FBUTtBQUZFLEtBSmlDOztBQVM3Q0MsaUJBQWE7QUFDWCxXQUFLO0FBQ0haLHNCQUFjO0FBRFgsT0FETTtBQUlYLFdBQUs7QUFDSEEsc0JBQWM7QUFEWDtBQUpNO0FBVGdDLEdBQWxDLENBQWI7QUFtQkQsQ0FyQkEsRUF6REgsRUFnRkcsWUFBWTs7QUFFWCxRQUFNYSxhQUFhQyxTQUFTQyxhQUFULENBQXVCLFdBQXZCLENBQW5CO0FBQ0EsUUFBTUMsYUFBYUYsU0FBU0MsYUFBVCxDQUF1QixpQkFBdkIsQ0FBbkI7QUFDQSxRQUFNRSxRQUFhSCxTQUFTQyxhQUFULENBQXVCLGNBQXZCLENBQW5COztBQUVBRixhQUFXSyxPQUFYLEdBQXFCLFlBQVk7QUFDL0JMLGVBQVdNLFNBQVgsQ0FBcUJDLE1BQXJCLENBQTRCLFFBQTVCO0FBQ0FKLGVBQVdHLFNBQVgsQ0FBcUJDLE1BQXJCLENBQTRCLHFCQUE1QjtBQUNBSCxVQUFNRSxTQUFOLENBQWdCQyxNQUFoQixDQUF1QixtQkFBdkI7QUFDRCxHQUpEO0FBTUQsQ0FaQSxFQWhGSDs7QUE4RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EiLCJmaWxlIjoiY29tbW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uICgpIHtcblxuICBsZXQgc3dpcGVyID0gbmV3IFN3aXBlcignLm1haW4tc2xpZGVyX19jb2wnLCB7XG4gICAgc3BhY2VCZXR3ZWVuOiAzMCxcbiAgICBjZW50ZXJlZFNsaWRlczogdHJ1ZSxcbiAgICBhdXRvcGxheToge1xuICAgICAgZGVsYXk6IDUwMDAsXG4gICAgICBkaXNhYmxlT25JbnRlcmFjdGlvbjogZmFsc2UsXG4gICAgfSxcbiAgICBwYWdpbmF0aW9uOiB7XG4gICAgICBlbDogJy5zd2lwZXItcGFnaW5hdGlvbicsXG4gICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgfSxcbiAgfSk7XG5cbn0oKSlcbiAgLFxuICAoZnVuY3Rpb24gKCkge1xuXG4gICAgbGV0IHN3aXBlciA9IG5ldyBTd2lwZXIoJy50b3AtcHJvZHVjdHNfX2NvbCcsIHtcbiAgICAgIHNsaWRlc1BlclZpZXc6XCJhdXRvXCIsXG4gICAgICBzcGFjZUJldHdlZW46IDE5LFxuICAgICAgLy8gY2VudGVyZWRTbGlkZXM6IHRydWUsXG4gICAgICBuYXZpZ2F0aW9uOiB7XG4gICAgICAgIG5leHRFbDogJy50b3AtcHJvZHVjdHNfX25leHQnLFxuICAgICAgICBwcmV2RWw6ICcudG9wLXByb2R1Y3RzX19wcmV2JyxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgfSgpKVxuICAsXG4gIChmdW5jdGlvbiAoKSB7XG5cbiAgICBsZXQgc3dpcGVyID0gbmV3IFN3aXBlcignLmNhdGVnb3J5X19jb2wnLCB7XG4gICAgICBzbGlkZXNQZXJWaWV3OlwiYXV0b1wiLFxuICAgICAgc3BhY2VCZXR3ZWVuOiAzMCxcbiAgICAgIG5hdmlnYXRpb246IHtcbiAgICAgICAgbmV4dEVsOiAnLmNhdGVnb3J5X19idG4tbmV4dCcsXG4gICAgICAgIHByZXZFbDogJy5jYXRlZ29yeV9fYnRuLXByZXYnLFxuICAgICAgfSxcbiAgICB9KTtcblxuICB9KCkpXG4gICxcbiAgKGZ1bmN0aW9uICgpIHtcblxuICAgIGxldCBzd2lwZXIgPSBuZXcgU3dpcGVyKCcudG9wLXByb2R1Y3RzX19zYWxlJywge1xuICAgICAgc2xpZGVzUGVyVmlldzpcImF1dG9cIixcbiAgICAgIHNwYWNlQmV0d2VlbjogMTksXG4gICAgICBuYXZpZ2F0aW9uOiB7XG4gICAgICAgIG5leHRFbDogJy50b3AtcHJvZHVjdHNfX3NhbGUtbmV4dCcsXG4gICAgICAgIHByZXZFbDogJy50b3AtcHJvZHVjdHNfX3NhbGUtcHJldicsXG4gICAgICB9LFxuICAgIH0pO1xuXG4gIH0oKSlcbiAgLFxuICAoZnVuY3Rpb24gKCkge1xuXG4gICAgbGV0IHN3aXBlciA9IG5ldyBTd2lwZXIoJy5ibG9jay1ib2FyZF9fc2xpZGUnLCB7XG4gICAgICBzbGlkZXNQZXJWaWV3OlwiYXV0b1wiLFxuICAgICAgc3BhY2VCZXR3ZWVuOiAzMCxcbiAgICAgIC8vIGNlbnRlcmVkU2xpZGVzOiB0cnVlLFxuICAgICAgbmF2aWdhdGlvbjoge1xuICAgICAgICBuZXh0RWw6ICcuYmxvY2stYm9hcmRfX25leHQnLFxuICAgICAgICBwcmV2RWw6ICcuYmxvY2stYm9hcmRfX3ByZXYnLFxuICAgICAgfSxcblxuICAgICAgYnJlYWtwb2ludHM6IHtcbiAgICAgICAgMzIwOiB7XG4gICAgICAgICAgc3BhY2VCZXR3ZWVuOiAyMFxuICAgICAgICB9LFxuICAgICAgICA3Njg6IHtcbiAgICAgICAgICBzcGFjZUJldHdlZW46IDMwXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pO1xuXG4gIH0oKSlcbiAgLFxuICAoZnVuY3Rpb24gKCkge1xuXG4gICAgY29uc3QgbWVudUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZfX2NhdCcpO1xuICAgIGNvbnN0IG1vYmlsZU9wZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1uYXZfX2xpc3QnKTtcbiAgICBjb25zdCBtb2RhbCAgICAgID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdi1tX193cmFwJyk7XG5cbiAgICBtZW51QnV0dG9uLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBtZW51QnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xuICAgICAgbW9iaWxlT3Blbi5jbGFzc0xpc3QudG9nZ2xlKCdtYWluLW5hdl9fbGlzdC1vcGVuJyk7XG4gICAgICBtb2RhbC5jbGFzc0xpc3QudG9nZ2xlKCduYXYtbV9fd3JhcF9tb2RhbCcpO1xuICAgIH1cblxuICB9KCkpXG5cbi8vTW9iaWxlIGZvb3RlciAqIGZvb3Rlci1lbGVtZW50cy5qc1xuLy8gJChmdW5jdGlvbigpIHtcbi8vICAgaWYgKHdpbmRvdy5tYXRjaE1lZGlhKFwiKG1heC13aWR0aDogNzY3cHgpXCIpLm1hdGNoZXMpIHtcbi8vICAgICAkKFwiLnNpdGUtZm9vdGVyXCIpLm9uKFwiY2xpY2tcIiwgXCJmLWluZm9fX3RpdGxlXCIsIGZ1bmN0aW9uKCkge1xuLy8gICAgICAgdmFyICR0aGlzID0gJCh0aGlzKSxcbi8vICAgICAgICAgJGFsbEhlYWRlcnMgPSAkKFwiZi1pbmZvX190aXRsZVwiKSxcbi8vICAgICAgICAgJHRoaXNCb2R5ID0gJHRoaXMubmV4dChcImYtaW5mb19fbGlzdFwiKTtcblxuLy8gICAgICAgaWYgKCEkdGhpc0JvZHkuaXMoXCI6dmlzaWJsZVwiKSkge1xuLy8gICAgICAgICAkYWxsSGVhZGVycy5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcblxuLy8gICAgICAgICAkKFwiLnNpdGUtZm9vdGVyXCIpXG4vLyAgICAgICAgICAgLmZpbmQoXCJmLWluZm9fX2xpc3RcIilcbi8vICAgICAgICAgICAuc2xpZGVVcCgpO1xuXG4vLyAgICAgICAgICR0aGlzQm9keS5zbGlkZURvd24oKTtcbi8vICAgICAgICAgJHRoaXMuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XG4vLyAgICAgICB9IGVsc2Uge1xuLy8gICAgICAgICAkdGhpcy5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcbi8vICAgICAgICAgJHRoaXNCb2R5LnNsaWRlVXAoKTtcbi8vICAgICAgIH1cbi8vICAgICB9KTtcbi8vICAgfVxuXG4gIC8vU2Nyb2xsIHRvIHRvcFxuLy8gICAoZnVuY3Rpb24oKSB7XG4vLyAgICAgJChcIi5zaXRlLWZvb3Rlcl9faXRlbV9zY3JvbGwtdG9wXCIpLmNsaWNrKGZ1bmN0aW9uKCkge1xuLy8gICAgICAgJChcImh0bWwsIGJvZHlcIikuYW5pbWF0ZSh7IHNjcm9sbFRvcDogMCB9LCBcImZhc3RcIik7XG4vLyAgICAgfSk7XG4vLyAgIH0pKCk7XG4vLyB9KTtcblxuXG4vLyAkKGZ1bmN0aW9uKCkge1xuXG4vLyAgICQoXCIuY2F0LW1lbnVcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XG4vLyBcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuLy8gXHRcdHZhciAkdGhpcyA9ICQodGhpcyk7XG4vLyBcdFx0JHRoaXMuY2xvc2VzdChcIi5uYXZfX2NhdFwiKS50b2dnbGVDbGFzcyhcImFjdGl2ZVwiKTtcbi8vIFx0XHQkKFwiYm9keVwiKS50b2dnbGVDbGFzcyhcImlzLW92ZXJsYXllZFwiKTtcblxuLy8gXHRcdCQoZG9jdW1lbnQpLmJpbmQoXCJjbGljay53cmFwcGVyXCIsIGZ1bmN0aW9uKGUpIHtcbi8vIFx0XHRcdGlmICgkKGUudGFyZ2V0KS5jbG9zZXN0KCR0aGlzKS5sZW5ndGggPT0gMCkge1xuLy8gXHRcdFx0XHQkKFwiYm9keVwiKS5yZW1vdmVDbGFzcyhcImlzLW92ZXJsYXllZFwiKTtcbi8vIFx0XHRcdFx0JChcIi5uYXZfX2NhdFwiKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcbi8vIFx0XHRcdFx0JChkb2N1bWVudCkudW5iaW5kKFwiY2xpY2sud3JhcHBlclwiKTtcbi8vIFx0XHRcdH1cbi8vIFx0XHR9KTtcbi8vIFx0fSk7XG5cbi8vIH0oKSlcbi8vICQoJy5waG9uZV9faW5wdXQnKS5tYXNrKCcoOTkpIDk5OS05OS05OScpO1xuXG5cbiJdfQ==
