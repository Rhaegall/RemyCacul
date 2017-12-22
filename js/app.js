(function main(){


	// Variable globale
	//********************************************************
	var nbr1;
	var nbr2; 
	var resultat;
	var fonction;

	// Fonction qui permet d'additionner deux nombres
	//********************************************************
	function add(nbr1, nbr2){
		resultat = Number(nbr1) + Number(nbr2);
	}
	// Fonction qui permet de soustraire deux nombre 
	//********************************************************
	function subs(nbr1, nbr2){

		resultat = nbr1 - nbr2;
	}
	// Fonction qui permet de mulitplier deux nombres
	//********************************************************
	function multiply(nbr1, nbr2){
		resultat = nbr1 * nbr2;
	}
	// Fonction qui permet de diviser deux nombres
	//********************************************************
	function divise(nbr1, nbr2){
		if(nbr2 == 0){
			resultat = "math error !"
		}else{
			resultat =  nbr1 / nbr2;
		}

	}


	// Evenement quand on clique sur un button numéro
	//********************************************************
	$(".buttonNum").on("click", function(){						// On selectionne tous les boutons NUMERO au clique.
		var touch = $(this).val();									// Nbr1 = valeur du bouton cliqué 
		$('#idEcran').append(touch);
	});

	$(".button").on("click", function(){						// On selectionne les boutons FONCTION au clique.
		var touch = $(this).val();									// Nbr1 = valeur du bouton cliqué 
		
		if(touch == "+"){
			nbr1 = $("#idEcran").html();
			fonction = "+";
			$("#idEcran").html("");
		}else if(touch == "-"){
			nbr1 = $("#idEcran").html();
			fonction = "-";
			$("#idEcran").html("");
		}else if(touch == "x"){
			nbr1 = $("#idEcran").html();
			fonction = "x";
			$("#idEcran").html("");
		}else if(touch == "/"){
			nbr1 = $("#idEcran").html();
			fonction = "/";
			$("#idEcran").html("");
		}

		if(touch == "CE"){										// Si nbr1 = CE alors j'efface l'affichage
			$('#idEcran').html("");
		}


		if(touch == "="){										// Si le bouton = est cliquer
			nbr2 = $("#idEcran").html();						// nbr2 = valeur écris sur l'écran

			if(fonction == "+"){								// Si fonction = "+"
				add(nbr1, nbr2);								// Appel de la fonction addition
				$('#idEcran').html(resultat);					// Affichage du resulat sur l'écran
			}else if(fonction == "-"){							
				subs(nbr1, nbr2);								// Appel de la fonction addition
				$('#idEcran').html(resultat);					
			}else if(fonction == "x"){								// Si fonction = "+"
				multiply(nbr1, nbr2);								// Appel de la fonction addition
				$('#idEcran').html(resultat);					// Affichage du resulat sur l'écran
			}else if(fonction == "/"){								// Si fonction = "+"
				divise(nbr1, nbr2);								// Appel de la fonction addition
				$('#idEcran').html(resultat);					// Affichage du resulat sur l'écran
			}
			
		}
	});


})();