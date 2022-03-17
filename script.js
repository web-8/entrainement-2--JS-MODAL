document.getElementById("leadModal"); /*je cible le modal*/

var modal = document.getElementById("leadModal"); /*je lui dis quoi faire avec la déclaration de variable*/
console.log(modal, 'console log de modal'); /*je mets ceci pour connaitre le contexte plus facilement*/

var boutonNon = document.getElementById("boutonNon");/*je déclare la variable*/
/* ici je vais donner l'action au bouton non de fermer le modal car l'utilisateur n'en veut pas*/
/* je dois le placer en dessous du var modal*/
boutonNon.onclick = function(){
    modal.style.display = "none";/* modal est l'élément à modifier*/
    /*style est pour cibler le css*/
    /*display est la fonction à modifier*/
}

window.onscroll = function (){modalHomePage()}; /*le modal est enregistrer pour être ouvert*/
function modalHomePage(){
    if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350){
        modal.style.display = "block";
        window.onscroll = null; /*suppression de l'évenement onscroll*/
    }
}
/*mon if est dans une fonction*/
/* le if signifie si et les accolades signifie alors*/
/* pour faire les barres du milieu, qui signifie "ou" je dois faire Alt Gr avec la touche 6 */
/* ce code sert à donner une taille en pixel par rapport au défilement de la page*/
/* je dis que si la page défile de plus de 350px, alors je veux que mon modal apparaisse*/
/*pour que mon modal apparaisse, je demande de passer du display none en display block : */
/* modal est l'élément à modifier*/
/*style est pour cibler le css*/
/*display est la fonction à modifier*/
/*block est la fonction que je lui ordonne*/


