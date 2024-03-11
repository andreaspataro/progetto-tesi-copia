
var dom_page_help = document.querySelector(".help");

function page_help_init() {
    let new_random = bg_colors[random_index(bg_colors)]
    let newbg = new_random[0];
    let newcolor = new_random[1];
    dom_body.classList.add("point");
    let bg_anim = background_transition(newbg, newcolor);
    dom_hamburger1.classList.remove("hamburger-transition-default");
    dom_hamburger2.classList.remove("hamburger-transition-default");
    dom_hamburger1.classList.add("hamburger-transition");
    dom_hamburger2.classList.add("hamburger-transition");
    check_txt_color(newcolor);
    bg_anim.onfinish = () => {
        dom_containerbg.style.background = newbg;
        dom_containerbg.style.color = newcolor;
        dom_hamburger1.classList.remove("hamburger-transition");
        dom_hamburger2.classList.remove("hamburger-transition");
        dom_body.classList.remove("point");
        standard_background();
    }
    page_enter(dom_page_help);
}

function page_help_dispose() {
    return new Promise((resolve, reject) => {
        clearInterval(standard_int);
        let page_anim_out = page_exit(dom_page_help);
        page_anim_out.onfinish = () =>{
            dom_page_help.style.display = "none";
            resolve();
        }
        
    });
    
}



