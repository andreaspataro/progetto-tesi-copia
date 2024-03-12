var dom_cards_main_page = document.querySelector(".cards_main");
var dom_cards_container = document.querySelector(".cards-container");
var dom_card = document.querySelectorAll(".card");
var dom_card_wrapper = document.querySelectorAll(".card-wrapper");
var dom_cards_main_title = document.querySelector(".cards_main_title");
var dom_lvls_title = document.querySelector(".lvls-title");
var dom_cards_main_wrapper = document.querySelector(".cards_main_wrapper");

var state_level = 0;
var choices = [];
var stopclick = false;
var end_levels = false;

/* var cards_main_colors = ["#0a0908", "#fff"]; */
var cards_main_colors = ["#9899a6", "#000"];




/* prevenire il click su dom_cards_container al fade out delle cards dopo la scelta */
for (let j = 0; j < dom_card.length; j++) {
    dom_card[j].addEventListener('click', card_event_listener = (event) => {
        cards_engine(dom_card[j]);
    });
}


function cards_engine(clickedCard) {
    if (!stopclick) {
        /* dom_cards_container.style.display = "none"; */
        /* array di scelte */
        choices[state_level] = {
            id: clickedCard.getAttribute("data-id"),
            type: elements[state_level].type
        };

        clickedCard.classList.add("selected-card");

        get_content(elements[state_level].type, state_level, clickedCard, choices);

        if (state_level < elements.length - 1) {
            state_level++;

            if (random_mode) {
                dom_lvls_title.textContent = random_titles[state_level];
            } else {
                dom_lvls_title.textContent = elements_titles[state_level];
            }
            let cards_wrapper_out = page_exit(dom_cards_main_wrapper);
            cards_wrapper_out.onfinish = () => {
                if (random_mode) {
                    clickedCard.parentNode.classList.remove("card-flip");
                }
                /* elimino le inclusioni di font se ci sono */
                dom_cards_main_wrapper.style.display = "none";
                delete_inclusions();
                let title_anim_in = page_enter(dom_lvls_title);
                title_anim_in.onfinish = () => {
                    dom_lvls_title.style.display = "block";
                    dom_lvls_title.style.opacity = "1";
                    let timeout = setTimeout(() => {
                        let title_anim_out = page_exit(dom_lvls_title);
                        title_anim_out.onfinish = () => {
                            dom_lvls_title.style.display = "none";
                            dom_lvls_title.style.opacity = "0";
                            populate_cards(dom_card, elements, state_level);
                            if (ismobile()) {
                                swiperCards.slideTo(0, 1, false);
                            }
                            page_enter(dom_cards_main_wrapper);
                        }
                    }, 1500);
                }
            }
        } else {
            stopclick = true;
            end_levels = true;
            if (ismobile()) {
                swiperCards.slideTo(0, 1, false);
            }
            window.location.hash = 'custom_picks';
        }
    } else {
        clickedCard.removeEventListener('click', card_event_listener);
    }
}


function get_content(type, index, card, array_choices) {
    if (type == "colors") {
        array_choices[index].color = card.getAttribute("data-color")
    } else if (type == "fonts") {
        array_choices[index].font = card.getAttribute("data-font-name");
        array_choices[index].link = card.getAttribute("data-font-incl");
    } else if (type == "textures" ||
        type == 'interiors' ||
        type == 'exteriors' ||
        type == 'artworks' ||
        type == 'places') {
        array_choices[index].link = card.getAttribute("data-img-link");
    } else if (type == "moods" || type == "adjectives") {
        array_choices[index].word = card.getAttribute("data-word");
    }
}



function random_cards(array, choices) {
    var random_cards = [];
    while (random_cards.length < 12) {
        let index = random_index(array);

        if (!random_cards.includes(array[index])) {

            var found = choices.find((elem) => elem.id == array[index].id && elem.type == array[index].type);
            if (!found) {
                random_cards.push(array[index]);
            } else {
                console.log("trovato uno");
            }
        }
    }
    return random_cards;
}

function dispose_cards(card) {
    card.children[0].style.background = 'transparent';
    card.children[0].style.fontFamily = 'unset';
    card.children[0].textContent = "";
    card.children[1].textContent = "";
    card.children[0].classList.remove("font-display");
    card.classList.remove("word-display");
    card.classList.remove("image-display");
    card.classList.remove("selected-card");
    if (card.children[0].children[0] != null) {
        card.children[0].removeChild(card.children[0].children[0]);
    }
    card.removeAttribute('data-color');
    card.removeAttribute('data-font-name');
    card.removeAttribute('data-font-incl');
    card.removeAttribute('data-img-link');

}

function delete_inclusions() {
    var headChildren = document.head.children;
    for (let i = headChildren.length - 1; i >= 0; i--) {
        var child = headChildren[i];
        if (child.tagName === 'LINK' && child.getAttribute('data-cat') === 'card') {
            child.remove();
        }
    }
}


function populate_cards(cards, elements, level) {
    if (random_mode) {
        dom_cards_main_title.textContent = random_titles[state_level];
    } else {
        dom_cards_main_title.textContent = elements_titles[state_level];
    }

    /* dom_cards_container.style.display = "flex"; */
    var arr_cards = random_cards(elements[level].set, choices);
    for (let i = 0; i < cards.length; i++) {
        dispose_cards(cards[i]);
        /* cards[i].setAttribute("data-id", arr_cards[i].id); */
        levels_type(cards[i], arr_cards[i], elements[level].type);
    }
}

function random_dispose() {
    for (let i = 0; i < dom_card.length; i++) {
        let outerWrapper = dom_card[i].parentNode.parentNode;
        let cardWrapper = dom_card[i].parentNode.parentNode.parentNode
        dom_card[i].classList.remove("card-front");
        cardWrapper.appendChild(dom_card[i]);
        cardWrapper.removeChild(outerWrapper);
    }
}


function random_engine() {
    for (let i = 0; i < dom_card.length; i++) {
        let padre = dom_card[i].parentNode;

        let outerwrap = document.createElement("div");
        outerwrap.classList.add("card-outer-wrapper");

        let innerwrap = document.createElement("div");
        innerwrap.classList.add("card-inner-wrapper");

        let back = document.createElement("div");
        back.classList.add("card-back");

        let backFirstFrame = document.createElement("div");
        backFirstFrame.classList.add("card-back-outer-frame");
        let backSecondFrame = document.createElement("div");
        backSecondFrame.classList.add("card-back-inner-frame");
        let backCardTitle = document.createElement("div");
        backCardTitle.classList.add("card-back-title");
        backCardTitle.classList.add("title-font");

        backCardTitle.textContent = "CARDS";

        backSecondFrame.appendChild(backCardTitle)
        backFirstFrame.appendChild(backSecondFrame);
        back.appendChild(backFirstFrame);

        dom_card[i].classList.add("card-front");

        innerwrap.appendChild(back);
        innerwrap.appendChild(dom_card[i]);
        outerwrap.appendChild(innerwrap);
        padre.appendChild(outerwrap);


        innerwrap.addEventListener('click', card_event_listener = (event) => {
            innerwrap.classList.add("card-flip");
            let time = setTimeout(() => {
                cards_engine(dom_card[i])
            }, 1000);

        });
    }
}


function levels_type(dom_card, random_card, type) {
    dom_card.setAttribute("data-id", random_card.id);
    dom_card.setAttribute("data-type", type);
    if (type == "colors") {
        dom_card.children[0].style.background = random_card.color;
        dom_card.children[1].textContent = random_card.color;
        dom_card.setAttribute("data-color", random_card.color);
    }
    if (type == "fonts") {
        var linkElement = document.createElement('link');
        linkElement.rel = 'stylesheet';
        linkElement.href = random_card.link;
        linkElement.setAttribute("data-cat", "card");
        document.head.appendChild(linkElement);
        dom_card.children[0].classList.add("font-display");
        dom_card.children[0].textContent = "Aa";
        dom_card.children[0].style.fontFamily = random_card.font;
        dom_card.children[1].textContent = random_card.font;
        dom_card.setAttribute("data-font-name", random_card.font);
        dom_card.setAttribute("data-font-incl", random_card.link);
    }
    if (type == "textures" ||
        type == "interiors" ||
        type == "exteriors" ||
        type == "artworks" ||
        type == "places") {
        var img = document.createElement('img');
        img.classList.add("card-rect_img");
        img.setAttribute("id", 'card-rect_img');
        img.setAttribute("src", random_card.link);
        dom_card.children[0].appendChild(img);
        dom_card.classList.add("image-display");
        dom_card.setAttribute("data-img-link", random_card.link);
    }
    if (type == "moods" || type == "adjectives") {
        dom_card.children[0].textContent = random_card.word;
        dom_card.classList.add("word-display");
        dom_card.setAttribute("data-word", random_card.word);
    }
}




function page_cards_main_init() {
    return new Promise((resolve, reject) => {
        if (ismobile()) {
            
        }

        if (window.location.hash == "#random") {
            random_mode = true;
        }

        clearInterval(standard_int);

        dom_body.classList.add("point");

        choices.length = 0;
        state_level = 0;
        stopclick = false;
        end_levels = false;


        dom_cards_main_wrapper.style.display = "none";
        dom_cards_main_wrapper.style.opacity = "0";
        if (random_mode) {
            dom_lvls_title.textContent = random_titles[state_level];
        } else {
            dom_lvls_title.textContent = elements_titles[state_level];
        }
        dom_lvls_title.style.display = "block";
        dom_lvls_title.style.opacity = "1";

        let page_anim_in = page_enter(dom_cards_main_page);
        page_anim_in.onfinish = () => {

            dom_cards_main_page.style.display = "block";
            dom_cards_main_page.style.opacity = "1";
            let timeout = setTimeout(() => {
                let alt_bg_anim = background_transition(cards_main_colors[0], cards_main_colors[1]);
                dom_hamburger1.classList.remove("hamburger-transition-default");
                dom_hamburger2.classList.remove("hamburger-transition-default");
                dom_hamburger1.classList.add("hamburger-transition");
                dom_hamburger2.classList.add("hamburger-transition");
                check_txt_color(cards_main_colors[1]);

                alt_bg_anim.onfinish = () => {
                    dom_containerbg.style.background = cards_main_colors[0];
                    dom_containerbg.style.color = cards_main_colors[1];
                    dom_body.classList.remove("point");
                    dom_hamburger1.classList.remove("hamburger-transition");
                    dom_hamburger2.classList.remove("hamburger-transition");
                }
                let title_animation_exit = page_exit(dom_lvls_title);
                title_animation_exit.onfinish = () => {
                    dom_lvls_title.style.display = "none";
                    dom_lvls_title.style.opacity = "0";

                    populate_cards(dom_card, elements, state_level);
                    if (random_mode) {
                        random_engine();
                    }
                    page_enter(dom_cards_main_wrapper);
                }
            }, 1500);
        }
    });


}

function page_cards_main_dispose() {
    return new Promise((resolve, reject) => {
        let page_anim_out = page_exit(dom_cards_main_page);
        page_anim_out.onfinish = () => {
            dom_cards_main_page.style.display = "none";
            dom_cards_main_page.style.opacity = "0";

            if (end_levels) {
                dom_cards_main_wrapper.style.display = "none";
                dom_cards_main_wrapper.style.opacity = "0";
                dom_lvls_title.textContent = "You have finished. The next page will show your choices.";
                dom_lvls_title.style.display = "block";
                dom_lvls_title.style.opacity = "1";

                let page_anim_in = page_enter(dom_cards_main_page);
                page_anim_in.onfinish = () => {
                    dom_cards_main_page.style.display = "block";
                    dom_cards_main_page.style.opacity = "1";
                    let timeout = setTimeout(() => {
                        let page_anim_out = page_exit(dom_cards_main_page);
                        page_anim_out.onfinish = () => {
                            dom_cards_main_page.style.display = "none";
                            dom_cards_main_page.style.opacity = "0";
                            /* clearInterval(alternate_int); */
                            if (random_mode) {
                                random_dispose();
                                random_mode = false;
                            }

                            if(ismobile()){
                                /* dom_cards_container.removeChild(dom_cards_container.children[0]); */
                            }

                            resolve();
                        }
                    }, 1500);
                }
            } else {
                if (random_mode) {
                    random_dispose();
                    random_mode = false;

                    if(ismobile()){
                        /* dom_cards_container.removeChild(dom_cards_container.children[0]); */
                    }
                }
                resolve();
            }
            /* for (let i = 0; i < dom_card.length; i++) {
                dispose_cards(dom_card[i]);
            }; */

        }
    })

}
