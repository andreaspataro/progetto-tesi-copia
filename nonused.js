/* 
function title_in_out(title) {
    if(title.animation?.playState == 'running'){
        title.animation.cancel();
    }
    title.style.display = "block";
    title.animation = title.animate([
        {
            opacity: "0"
        },
        {
            opacity: '1',
            
        },
        {
            opacity: '0'
        }

    ],
        {
            duration: 2000,
            iterations: 1,
        }
    );

    return title.animation;
}
 */


/* function page_exit_new(page) {
    return new Promise ((resolve, reject) => {
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
                duration: 1400,
                iterations: 1,
                easing: "ease-out"
            }
        );
    
    
        page.animation.onfinish = () => {
            page.style.display = "none";
            page.style.opacity = "0";
        }

        resolve();
    })
    
}



function page_enter_new(page) {
    return new Promise ((resolve, reject) => {
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
                duration: 2000,
                iterations: 1,
                delay: 1600
            }
        );
    
        page.animation.onfinish = () => {
            page.style.opacity = "1";
        }

        resolve();
    })
} */
/* function calc_luminance(color){
    var r = parseInt(color.substr(1,2), 16)/255;
    var g = parseInt(color.substr(3,2), 16)/255;
    var b = parseInt(color.substr(5,2), 16)/255;
    return (r + g + b)/3;
}

function calc_contrast(color1, color2){
    let lum1 = calc_luminance(color1);
    let lum2 = calc_luminance(color2);
    return (Math.max(lum1, lum2) + 0.1) / (Math.min(lum1, lum2) + 0.1);
}
 */


/*  dom_containerbg.animate({
        background: [dom_containerbg.style.background, background ],
        color: [dom_containerbg.style.color, color],
    }, {
        // sync options
        duration: 1000,
        iterations: 1,
    }); */


    /* da guardare https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timing-function per integrare 
guarda qua : https://developer.mozilla.org/en-US/docs/Web/API/KeyframeEffect/KeyframeEffect#parameters
e qua https://developer.mozilla.org/en-US/docs/Web/API/Animation
e qua https://developer.mozilla.org/en-US/docs/Web/API/Element/animate

*/


 /*  dom_hometxt.animate([
         {
             transform: "translate(-50%, -50%)"
         },
 
         {
             transform: "translate(-50%, -42%)"
         }
     ], {
         duration: 1000,
         iterations: Infinity,
         direction: "alternate",
         easing: "ease-in-out"
     }) */


     /* test 1 */