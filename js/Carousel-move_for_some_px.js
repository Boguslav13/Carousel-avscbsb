function SlideShow( id , step )
{
	let Sliders = document.getElementById( id ).querySelectorAll( 'div.Slide' );
	let SlidersCount = Sliders.length - 1;

	if( step == '-1' )
	{
		Sliders[ 2 ].style.transform = 'translateX(' + 255 + 'px)';
		Sliders[ 1 ].style.transform = 'translateX(' + 255 + 'px)';
		Sliders[ 0 ].style.transform = 'translateX(' + 255 + 'px)';
		setTimeout( function(){
			document.getElementById( id ).insertBefore( Sliders[ SlidersCount ] , document.getElementById( id ).childNodes[ 0 ] );
			Sliders[ 2 ].style.transform = 'translateX(' + '0' + 'px)';
			Sliders[ 1 ].style.transform = 'translateX(' + '0' + 'px)';
			Sliders[ 0 ].style.transform = 'translateX(' + '0' + 'px)';
		} , 1000 );
	} else {
		Sliders[ 0 ].style.transform = 'translateX(' + '-255' + 'px)';
		Sliders[ 1 ].style.transform = 'translateX(' + '-255' + 'px)';
		Sliders[ 2 ].style.transform = 'translateX(' + '-255' + 'px)';
		Sliders[ 3 ].style.transform = 'translateX(' + '-255' + 'px)';
		setTimeout( function(){
			document.getElementById( id ).appendChild( Sliders[ 0 ] );
			Sliders[ 0 ].style.transform = 'translateX(' + '0' + 'px)';
			Sliders[ 1 ].style.transform = 'translateX(' + '0' + 'px)';
			Sliders[ 2 ].style.transform = 'translateX(' + '0' + 'px)';
			Sliders[ 3 ].style.transform = 'translateX(' + '0' + 'px)';
		} , 1000 );
	
	}

}
