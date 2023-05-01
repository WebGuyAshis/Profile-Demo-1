const galleryImages = document.getElementsByClassName('gallery-img')



function popup(eachElem) {
    let topVal = eachElem.offsetTop;
    let leftVal = eachElem.offsetLeft;
    console.log(topVal);
    console.log(leftVal);
}

for (let eachElem of galleryImages) {
    eachElem.addEventListener('click', function () {
        popup(eachElem);
    });
}

//   Links Appear
const socialLinks = document.getElementsByClassName('social-links');

function linksAppear() {
    console.log("Follow");
    let delay = 0;
    for (let eachLink of socialLinks) {
        console.log("Inside loop");
        setTimeout(() => {
            eachLink.style.height = '35px';
        }, delay);
        delay = delay + 500;
    }
}

let themeBtn = document.getElementById('theme-img');
let themeClr = document.getElementById('theme-clr');
let themeBtnOut = false
themeBtn.addEventListener('mouseover', () => {
    themeBtnOut = true;
    console.log("Mouse");
    themeClr.style.display = 'flex';
    document.getElementById('theme').style.left = '5px';
    setTimeout(() => {
        themeClr.style.height = '150px'
        themeClr.style.width = '40px';
    });
})
function closeTheme() {
    themeBtnOut = false;

    document.getElementById('theme').style.left = '-20px';
    themeClr.style.display = 'none';

}

let logo = document.getElementById('logo-first');
let nameF = document.getElementById('name-first');
let project = document.getElementById('project-first');
function changeThemeOrange() {
    console.log("Orange");
    logo.style.color = "orangered"
    nameF.style.color = 'orangered'
    project.style.color = 'orangered';
    document.getElementById('profile-container').style.backgroundColor = 'white';
    document.body.style.backgroundColor = 'white';

}
function changeThemeGreen() {
    console.log("Green");
    logo.style.color = "green"
    nameF.style.color = 'green'
    project.style.color = 'green';

    document.getElementById('profile-container').style.backgroundColor = 'rgba(230, 255, 231,0.5)';
    document.body.style.backgroundColor = 'rgba(230, 255, 231,0.5)';
    document.getElementById('profile-name').style.color = "black";
}
function changeThemePink() {
    console.log("Pink");
    logo.style.color = "rgb(255, 77, 112)"
    nameF.style.color = 'rgb(255, 77, 112)'
    project.style.color = 'rgb(255, 77, 112)';
    document.getElementById('profile-container').style.backgroundColor = 'rgb(255, 238, 243 )';
    document.body.style.backgroundColor = 'rgb(255, 238, 243 )';
    document.getElementById('profile-name').style.color = "black";

}

const navLinks = document.getElementsByClassName('nav-links')

function changeThemeDark() {
    console.log("Dark");
    logo.style.color = "orangered"
    nameF.style.color = 'orangered'
    project.style.color = 'orangered';
    document.getElementById('logo').style.color = 'white';
    document.getElementById('navbar').style.backgroundColor = "rgb(27,28,30)";
    for(let each of navLinks){
        each.style.color = 'rgb(118,120,121)';
    }
    
    document.getElementById('profile-name').style.color = "white";
    document.getElementById('profile-container').style.backgroundColor = 'black'
    document.body.style.backgroundColor = 'black'
}


function handleClicks(event) {
    let target = event.target;
    let fetchId = target.id;
    let fetchClass = target.classList.value;

    console.log("Target:", target);
    console.log("Id:", fetchId);
    console.log("Class:", fetchClass);

    if( fetchId != 'themeBtn' && themeBtnOut && fetchClass!= 'color-theme'){
        console.log("Close");
        closeTheme();
    }

    if (fetchId == 'follow-me') {
        linksAppear();
    } else if (fetchId == 'white-orange') {
        changeThemeOrange();
    }else if (fetchId == 'white-green') {
        changeThemeGreen();
    }else if (fetchId == 'white-pink') {
        changeThemePink();
    }else if (fetchId == 'grey-black') {
        changeThemeDark();
    }
}

document.addEventListener('click', handleClicks);