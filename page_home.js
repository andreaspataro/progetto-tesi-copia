var home_mouseout_listener;
var home_mouseover_listener;
var letters_over_int;
var standard_int;
var letters_int;
var home_first_visit = true;
var dom_page_home = document.querySelector(".home");
var dom_home_txt_overlay = document.querySelector(".centered-funct-overlay");

function page_home_init() {
    if (!home_first_visit) {
        let new_random = bg_colors[random_index(bg_colors)]
        let newbg = new_random[0];
        let newcolor = new_random[1];
        let bg_anim = background_transition(newbg, newcolor);
        dom_hamburger1.classList.remove("hamburger-transition-default");
        dom_hamburger2.classList.remove("hamburger-transition-default");
        dom_hamburger1.classList.add("hamburger-transition");
        dom_hamburger2.classList.add("hamburger-transition");
        check_txt_color(newcolor);
        dom_body.classList.add("point");
        bg_anim.onfinish = () => {
            dom_containerbg.style.background = newbg;
            dom_containerbg.style.color = newcolor;
            dom_hamburger1.classList.remove("hamburger-transition");
            dom_hamburger2.classList.remove("hamburger-transition");
            dom_body.classList.remove("point");
            standard_background();
        }
        page_enter(dom_page_home);
    } else {
        standard_background();
    }
    
    dom_home_txt_overlay.addEventListener('mouseover', home_mouseover_listener = () => {
        console.log("on");
        get_letters(dom_hometxt_letter);
        letters_over_int = setInterval(() => {
            get_letters(dom_hometxt_letter);
        }, 800)
    });
    dom_home_txt_overlay.addEventListener('mouseout', home_mouseout_listener = () => {
        console.log("out");
        clearInterval(letters_over_int);
    });

}

function page_home_dispose() {
    return new Promise((resolve, reject) => {
        clearInterval(standard_int);
        let page_animation = page_exit(dom_page_home);

        page_animation.onfinish = (event) => {
            dom_page_home.style.display = "none";
            dom_page_home.style.opacity = "0";
            console.log(event);
            dom_home_txt_overlay.removeEventListener('mouseover', home_mouseover_listener);
            dom_home_txt_overlay.removeEventListener('mouseout', home_mouseout_listener);
            clearInterval(letters_over_int);
            
            clearInterval(letters_int);
            home_first_visit = false;

            resolve();
        }
        
    })

}




function get_letters(array) {
    let i = 0;
    letters_int = setInterval(() => {
        if (i < array.length) {
            animate_letters(array[i]);
            i++;
        }
    }, 100);
}

function animate_letters(elemento) {
    elemento.animate([
        {
            transform: "translateY(0)"
        },
        {
            transform: "translateY(-8px)"
        },
        {
            transform: "translateY(0)"
        }
    ],
        {
            duration: 400,
            iterations: 1
        }
    );
}