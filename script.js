let number = 0

$('h2').text(`${number}`) 

$('#increase').click(() => {
   number = number + 1,
   $('h2').text(`${number}`) 
}
)

$('#decrease').click(() => {
   number = number - 1,
   $('h2').text(`${number}`) 
 }
 )