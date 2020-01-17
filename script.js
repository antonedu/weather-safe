$(document).ready(function(){
	$('#nav-icon1').click(function(){
		$(this).toggleClass('open');
	});
});

$(document).ready(function () {
    $(window).scroll(function(){
        var ScrollTop = parseInt($(window).scrollTop());
        console.log(ScrollTop);

        if (ScrollTop > 1000) {
					document.getElementById("box4").classList.add("slideInLeft");
					document.getElementById("box4").style.display = "block";
        }
    });
});

$(document).ready(function () {
    $(window).scroll(function(){
        var ScrollTop = parseInt($(window).scrollTop());
        console.log(ScrollTop);

        if (ScrollTop > 1200) {
					document.getElementById("box5").classList.add("slideInRight");
					document.getElementById("box5").style.display = "block";
        }
    });
});


$(document).ready(function () {
    $(window).scroll(function(){
        var ScrollTop = parseInt($(window).scrollTop());
        console.log(ScrollTop);

        if (ScrollTop > 1400) {
					document.getElementById("box6").classList.add("slideInLeft");
					document.getElementById("box6").style.display = "block";
        }
    });
});
