/****
 * Daily Challenge: Letters
 * 
 * Instructions
 * Daily Challenge : Show Only The Letters
 * Create an input type text that takes/shows only letters. (ie. numbers and special 
 * characters won’t be accepted)
 * Hint: use one of the following events to remove any character that is not a letter
 * keyup event
 * or keypress event
 * or keydown event
 * or input event
 * Hint : Check out keycodes in Javascript or Regular Expressions
 */

///[^\wèéòàùì\s]/gi


function verifierCaracteres(event) {
	 		
	var keyCode = event.which ? event.which : event.keyCode;

	var touche = String.fromCharCode(keyCode);
			
	var champ = document.getElementById('fname');
			
	var caracteres = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
			
	if(caracteres.indexOf(touche) >= 0) {

		champ.value += touche;
	}
			
}



























function checkEnter1(e) {
    let compareValue = textEnter.with 
    //e.preventDefault()
    if (textEnter.value.match("^[a-zA-Zèéòàùì]*$")) {
        console.log("ok")
    } else {

       // let replaceCharacter = textEnter.value.replace(, "")
       // textEnter.textContent = replaceCharacter
       // console.log(replaceCharacter)
       // const newStr = textEnter.textContent.replace("^[;,_ *-+]*$", "");
        console.log("pas bon");

    }



}
