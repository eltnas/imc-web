let linkToFace = "https://www.facebook.com/eltnasdev";
let linkToLinkedin = "https://www.linkedin.com/in/eltnas/";
let linkToInsta = "https://www.instagram.com/eltnas.dev/";
let linkToUser = "https://eltnas.github.io/";
function toSocialPage(val){
    if(val === 1){
        window.open(linkToFace)
    }
    else if(val === 2){
        window.open(linkToLinkedin)
    }
    else if(val === 3){
        window.open(linkToInsta)
    }
    else if(val === 4){
        window.open(linkToUser)
    }
}