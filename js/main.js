$( document ).ready( function(){
  setInterval( function(){
    $( "body" ).css( 'background-color', '#F00' );
    setTimeout( function(){
      $( "body" ).css( 'background-color', '#00F' );
    }, 100 );
  }, 200);
   console.log('Toda listo');
});
