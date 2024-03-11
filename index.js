window.addEventListener('load', function () {
/*     const hash = window.location.hash?.substring (1)
    if (!hash){
        window.location.hash = "home"
    }else{
        change_page(window.location.hash.substring(1));
    }
 */    
    if (window.location.hash?.substring (1) == 'home'){
        change_page("home");    
    } else {
        window.location.hash = 'home';
    }
    //change_page(window.location.hash?.substring (1) ?? "home");
    init_background(bg_colors);
})

var page = "home";
var bg_colors = [
    ["#136f63", "#fff"],
    ["#007e73", "#fff"],
    ["#3626a7", "#fff"],
    ["#3a0ca3", "#fff"],
    ["#453f3c", "#fff"],
    ["#3c096c", "#fff"],
    ["#3066be", "#fff"],
    ["#5226ef", "#fff"],
    ["#694a38", "#fff"],
    ["#0052a3", "#fff"],
    ["#29524a", "#fff"],
    ["#131519", "#fff"],
    ["#184ded", "#fff"],
    ["#32a287", "#000"],
    ["#ffa50a", "#000"],
    ["#fb8b24", "#000"],
    ["#cf5c36", "#000"],
    ["#e55934", "#000"],
    ["#0e9594", "#000"],
    ["#f98948", "#000"],
    ["#f18805", "#000"],
    ["#ff6d00", "#000"],
    ["#ff9e00", "#000"],
    ["#ff9100", "#000"],
    ["#f5853f", "#000"],
    ["#32a287", "#000"],
    ["#6C6EA0", "#000"],
    ["#5F4BB6", "#fff"],
    ["#AD2E24", "#fff"],
    ["#F5E0B7", "#000"],
    ["#A63D40", "#fff"],
    ["#613DC1", "#fff"],
    ["#06D6A0", "#000"],
    ["#81171B", "#fff"],
    ["#AD2E24", "#fff"],
    ["#4361EE", "#fff"], 
    ["#102EB1", "#fff"]
];

/* #F7EDE2 bianco panna */

var bg_neutral_colors = [
    ["#343434", "#fff"],
    ["#56666b", "#fff"],
    ["#0a0908", "#fff"],
    ["#131519", "#fff"],
    ["#090c08", "#fff"],
    ["#9899a6", "#000"],
    ["#babfd1", "#000"]
];

var pages = {
    'home': {
        'init': page_home_init,
        'dispose': page_home_dispose,
    },
    'help': {
        'init': page_help_init,
        'dispose': page_help_dispose,
    },
    'cards_main': {
        'init': page_cards_main_init,
        'dispose': page_cards_main_dispose,
    },
    'custom_picks': {
        'init': page_custom_picks_init,
        'dispose': page_custom_picks_dispose,
    },
    'random': {
        'init': page_cards_main_init,
        'dispose': page_cards_main_dispose,
    },
};

var active_page = null;

var dom_body = document.getElementById("body");
var dom_containerbg = document.getElementById("container-bg");
var dom_hometxt = document.querySelector(".home-centered");
var dom_hometxt_letter = document.querySelectorAll(".centered-funct-right-letter");
var dom_hometxt_title = document.querySelector(".centered-funct");
var dom_header_logo = document.querySelector(".header-logo");
var dom_menu_help = document.getElementById("menu-help");
var dom_menu_help_mobile = document.getElementById("mobile-menu-help");
var dom_menu_home = document.getElementById("menu-home");
var dom_menu_home_mobile = document.getElementById("mobile-menu-home");
var dom_menu_random = document.getElementById("menu-random");
var dom_menu_random_mobile = document.getElementById("mobile-menu-random");
var dom_menu_custom_picks = document.getElementById("menu-picks");
var dom_menu_custom_picks_mobile = document.getElementById("mobile-menu-picks");
var dom_hamburger = document.getElementById("header-menu-mobile");
var dom_menu_mobile = document.querySelector(".menu-mobile-page");
var dom_hamburger1 = document.querySelector(".hamburger1");
var dom_hamburger2 = document.querySelector(".hamburger2");

var bg_anim; 

dom_hamburger.addEventListener('click', () => {
    dom_menu_mobile.classList.toggle("menu-open");
    dom_body.classList.toggle("menu-mobile-open");
    dom_hamburger1.classList.add("hamburger-transition-default");
    dom_hamburger2.classList.add("hamburger-transition-default");
})


dom_hometxt_title.addEventListener('click', () => {
    window.location.hash = "cards_main";
});

dom_menu_help.addEventListener('click', () => {
    window.location.hash = "help";
});

dom_menu_help_mobile.addEventListener('click', () => {
    window.location.hash = "help";
    dom_menu_mobile.classList.remove('menu-open');
    dom_body.classList.remove("menu-mobile-open");
});

dom_header_logo.addEventListener('click', () => {
    window.location.hash = "home";
});

dom_menu_home.addEventListener('click', () => {
    window.location.hash = "home";
});

dom_menu_home_mobile.addEventListener('click', () => {
    window.location.hash = "home";
    dom_menu_mobile.classList.remove('menu-open');
    dom_body.classList.remove("menu-mobile-open");
});

dom_menu_custom_picks.addEventListener('click', () => {
    window.location.hash = "custom_picks";
});

dom_menu_custom_picks_mobile.addEventListener('click', () => {
    window.location.hash = "custom_picks";
    dom_menu_mobile.classList.remove('menu-open');
    dom_body.classList.remove("menu-mobile-open");
});

dom_menu_random.addEventListener('click', () => {
    window.location.hash = "random";
});

dom_menu_random_mobile.addEventListener('click', () => {
    window.location.hash = "random";
    dom_menu_mobile.classList.remove('menu-open');
    dom_body.classList.remove("menu-mobile-open");
});

window.addEventListener('hashchange', function (pageName) {
    /* console.log(pageName.target.page); */
    // const page = pippo.target.page;
    const page = location.hash.substring(1);
    change_page(page);
});

function change_page(page) {
    if (active_page) {
        console.log('DISATTIVO ' + active_page);
        pages[active_page].dispose().then(function(){
            active_page = page;
            console.log('ATTIVO ' + page);
            pages[page].init();        
        });
    } else {
        active_page = page;
        console.log('ATTIVO ' + page);
        pages[page].init();
    }
}


function random_index(array) {
    let index = Math.floor(Math.random() * array.length);
    return index;
}

function standard_background() {
    standard_int = setInterval(() => {
        let new_random = bg_colors[random_index(bg_colors)]
        let newbg = new_random[0];
        let newcolor = new_random[1];
        dom_hamburger1.classList.remove("hamburger-transition-default");
        dom_hamburger2.classList.remove("hamburger-transition-default");
        dom_hamburger1.classList.add("hamburger-transition2");
        dom_hamburger2.classList.add("hamburger-transition2");
        check_txt_color(newcolor);
        animate_bg_alternate(newbg, newcolor);

    }, 25000);
}

function check_txt_color(txtcolor) {
    dom_body.classList.remove("whitetxt");
    dom_body.classList.remove("blacktxt");

    if(txtcolor == '#000'){
        dom_body.classList.add("blacktxt");
    } else {
        dom_body.classList.add("whitetxt");
    }
}


function alternate_background() {
    alternate_int = setInterval(() => {
        let new_random = bg_neutral_colors[random_index(bg_neutral_colors)]
        let newbg = new_random[0];
        let newcolor = new_random[1];

        check_txt_color(newcolor);

        animate_bg_standard(newbg, newcolor);

    }, 25000);
}

function background_transition(background, txtcolor) {
    bg_anim = dom_containerbg.animate([
        {
            background: dom_containerbg.style.background,
            color: dom_containerbg.style.color
        },
        {
            background: background,
            color: txtcolor
        }
    ], {
        duration: 2000,
        iterations: 1,
        easing: "ease-in-out"
    })

    return bg_anim;
}

function init_background(colorSet) {
    let index = random_index(colorSet);
    check_txt_color(colorSet[index][1]);
    dom_containerbg.style.background = colorSet[index][0];
    dom_containerbg.style.color = colorSet[index][1];
}


function page_exit(page) {
    if(page.animation?.playState == 'running'){
        page.animation.cancel();
    }
    page.animation = page.animate([
        {
            opacity: "1"
        },
        {
            opacity: '0'
        }
    ],
        {
            duration: 1500,
            iterations: 1,
            easing: "ease-out"
        }
    );


    page.animation.onfinish = () => {
        page.style.display = "none";
        page.style.opacity = "0";
    }

    return page.animation;
}

function page_enter(page) {
    if(page.animation?.playState == 'running'){
        page.animation.cancel();
    }
    page.style.display = "block";
    page.animation = page.animate([
        {
            opacity: "0"
        },
        {
            opacity: '1'
        }
    ],
        {
            duration: 1500,
            iterations: 1,
            easing: "ease-in"
        }
    );

    page.animation.onfinish = () => {
        page.style.opacity = "1";
    }
    return page.animation;
}


function animate_bg_standard(background, txtcolor) {
    anim = dom_containerbg.animate([
        {
            background: dom_containerbg.style.background,
            color: dom_containerbg.style.color
        },
        {
            background: "#000",
            color: "#fff",
            offset: 0.2
        },
        {
            background: background,
            color: txtcolor
        }
    ], {
        duration: 4000,
        iterations: 1,
        easing: "ease-in-out"
    })

    anim.onfinish = () => {
        dom_containerbg.style.background = background;
        dom_containerbg.style.color = txtcolor;
    }

    return anim;
}

function animate_bg_alternate(background, txtcolor) {
    bg_anim = dom_containerbg.animate([
        {
            background: dom_containerbg.style.background,
            color: dom_containerbg.style.color
        },
        {
            background: background,
            color: txtcolor
        }
    ], {
        duration: 4000,
        iterations: 1,
        easing: "ease-in-out"
    })

    bg_anim.onfinish = () => {
        dom_containerbg.style.background = background;
        dom_containerbg.style.color = txtcolor;
        dom_hamburger1.classList.remove("hamburger-transition2");
        dom_hamburger2.classList.remove("hamburger-transition2");
    }

    return bg_anim;
}




function animate_background(background) {
    dom_containerbg.animate([
        // key frames
        { background: dom_containerbg.style.background },
        { background: background }
    ], {
        // sync options
        duration: 2000,
        iterations: 1,
        easing: 'ease-in-out'
    });
}

function animate_fontcolor(color) {
    dom_containerbg.animate([
        // key frames
        { color: dom_containerbg.style.color },
        { color: color }
    ], {
        // sync options
        duration: 3000,
        iterations: 1,
        easing: 'ease-in'
    });
}


function animate_background2(background) {
    dom_containerbg.animate([
        { background: dom_containerbg.style.background },
        { background: "#000" },
        { background: background }
    ], {
        duration: 6000,
        iterations: 1,
        easing: 'ease-in-out'
    })
}

function animate_fontcolor2(color) {
    dom_containerbg.animate([
        // key frames
        { color: dom_containerbg.style.color },
        { color: "#fff" },
        { color: color }
    ], {
        // sync options
        duration: 5000,
        iterations: 1,
        easing: 'ease-in'
    });
}










