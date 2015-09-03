$(document).ready( function(){
alert(":)")

 $("#closeBtn").click( function(){
      //alert("you clicked me!!");
      $("#lightbox").fadeOut();
    });
    $("#openLightbox").click( function(){

      $("#lightbox").fadeIn( 3000);
    });
	var counter = 3;
	var dt = new Date();
	var h = dt.getHours();
	var m = dt.getMinutes();
	var s = dt.getSeconds();
	var timeOut;
	var timer;
	var cd; //countdown interval
	var secondCounter = 0;

	$("#startGame").click( function(){
		startCountDown()
	});

	function startCountDown() {
		cd = setInterval( function(){
			console.log(counter);
			$("#startGame").html(counter);
			counter--;
		}, 1000);

		var timeOut = setTimeout(function() {
		
		console.log("TIMES UP!");
		clearInterval( cd );
		updateClockView();
		hideStart();
		startTimer();
		showClock();
	}, 3000);
	}

	function showClock(){
		$("#clock").show();
	}

	function hideStart(){
		$("#startGame").hide();
	}
	function updateClockView(){
		$("#h").html( fixNumber( h ) );
		$("#m").html( fixNumber( m ) );
		$("#s").html( fixNumber ( s ) );
	}

     function startTimer(){
	  var timer = setInterval( function(){
		giveMeTheTime()
	    updateClockView();
		counterHandler();
		handleUIUX();
		 }, 1000 ) ;
	};
	function counterHandler(){
		if(secondCounter < 60 ){
			secondCounter++;
		}else{
			secondCounter = 0;
		}
	}
	function handleUIUX(){
		if( secondCounter % 2 === 0){
			$("#lightBoxContentBox").css( 'background', 'black' );
			$("body").css( 'color', 'red');
			
			console.log( secondCounter + "its even" );
		}else{
			$("#lightBoxContentBox").css( 'background', 'yellow');
			$("body").css('color', 'black');
			
			console.log( secondCounter + "its odd" );
		}
	}
	
	console.log( dt.getFullYear() );
	console.log( dt.getMonth() + 1);
	console.log( dt.getDate() );
	console.log( dt.getHours() );
	console.log( dt.getMinutes() );
	console.log( dt.getSeconds() );

	function giveMeTheTime(){
	 dt = new Date();
	 h = dt.getHours();
	 m = dt.getMinutes();
	 s = dt.getSeconds();
	 console.log( h );
	 console.log( m );
	 console.log( s );

	 $("#h").html( fixNumber( h ) );
	 $("#m").html( fixNumber( m ) );
	 $("#s").html( fixNumber( s ) );

	}
	function fixNumber( num ){
       if( num < 10){
       	num = "0"+num;
       }
       return num;
	}


   });
