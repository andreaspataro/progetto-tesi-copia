var dom_custom_picks_page = document.querySelector(".custom_picks");
var dom_picks_container = document.querySelector(".picks-container");
var dom_picks_cards_wrapper = document.querySelector(".picks-menu-cards-wrapper");
var dom_picks_menu_close = document.querySelector(".picks-menu-close");
var dom_picks_menu = document.querySelector(".picks-menu-container");
var dom_picks_select = document.getElementById("picks-menu-select");
var dom_picks_title = document.querySelector(".custom_picks_title");
var dom_select_text = document.querySelector(".select-text");
var dom_picks_single_wrapper = document.querySelectorAll('.picks-container > .card-wrapper');


dom_select_text.textContent = "Colors";

var custom_picks_menu_colors = ["#9899a6", "#000"];
/* var custom_picks_menu_colors = ["#0a0908", "#fff"]; */

var selected_card;


dom_picks_menu_close.addEventListener("click", function () {

    let page_anim_out = page_exit(dom_custom_picks_page);
    page_anim_out.onfinish = () => {
        dom_custom_picks_page.style.display = "none";
        dom_custom_picks_page.style.opacity = "0";
        dom_picks_container.style.display = "flex";
        dom_picks_container.style.opacity = "1";
        dom_picks_menu.style.display = "none";
        dom_picks_menu.style.opacity = "0";

        let alt_bg_anim = animate_bg_alternate(cards_main_colors[0], cards_main_colors[1]);

        alt_bg_anim.onfinish = () => {
            dom_containerbg.style.background = cards_main_colors[0];
            dom_containerbg.style.color = cards_main_colors[1];
        }
        dispose_choices();
        show_choiches();
        dispose_select_picks();
        reset_select();
        page_enter(dom_custom_picks_page);
    }
})


function dispose_choices() {
    if(ismobile()) {
        let picks_swiper = document.querySelector(".swiperPicks > .swiper-wrapper");
        for (let j = picks_swiper.children.length - 1; j >= 0; j--) {
            picks_swiper.removeChild(picks_swiper.children[j]);
        }
    } else {
        for (let i = dom_picks_container.children.length - 1; i >= 0; i--) {
            dom_picks_container.removeChild(dom_picks_container.children[i]);
        }
    } 
}

function show_choiches() {
    if (choices.length > 0) {
        dom_picks_title.textContent = "These are the cards you selected";
        for (let i = 0; i < choices.length; i++) {
            if(ismobile()){
                create_card(choices[i], choices[i].type, swiperPicks, true, false, true);    
            } else {
                create_card(choices[i], choices[i].type, dom_picks_container, true, false, false);
            }
            
        }

    } else {
        dom_picks_title.textContent = "Click on the \'+\' to add a card";
    }

    check_add_cards();
    
}

function check_add_cards() {
    if (choices.length < 12) {
        newAddCard = document.createElement("div");
        newAddCard.classList.add("card", "add-cards");
        cardCount = document.createElement("div");
        cardCount.classList.add("card-counter");
        cardCount.textContent = choices.length + "/12";
        addCardContent = document.createElement("div");
        addCardContent.classList.add("add-cards-content");
        addCardContent.textContent = "+";
        newAddCard.appendChild(cardCount);
        newAddCard.appendChild(addCardContent);
        new_card_wrapper = document.createElement("div");
        new_card_wrapper.classList.add("card-wrapper");
        new_card_wrapper.appendChild(newAddCard);



        if(ismobile()){
            let slide = document.createElement("div");
            slide.classList.add("swiper-slide");
            slide.appendChild(new_card_wrapper)
            swiperPicks.appendSlide(slide);
        } else {
            dom_picks_container.appendChild(new_card_wrapper);
        }




        newAddCard.addEventListener('click', function () {
            edit_card(null);
        });
    }
}

function delete_card(obj) {
    let currentCard = obj.children[0];
    let currentCardId = currentCard.getAttribute("data-id");
    let currentCardType = currentCard.getAttribute("data-type");
    let index = choices.findIndex((elem) => elem.id == currentCardId && elem.type == currentCardType);
    if (index !== -1) {
        let card_anim_out = page_exit(obj);
        card_anim_out.onfinish = () => {
            obj.style.display = "none";
            obj.style.opacity = "0";
            if(ismobile()) {
                let picks_swiper = document.querySelector(".swiperPicks > .swiper-wrapper");
                console.log(picks_swiper.children);
                for (let j = picks_swiper.children.length - 1; j >= 0; j--) {
                    picks_swiper.removeChild(picks_swiper.children[j]);
                }
            } else {
                for (let i = dom_picks_container.children.length - 1; i >= 0; i--) {
                    dom_picks_container.removeChild(dom_picks_container.children[i]);
                }
            } 
            choices.splice(index, 1);
            show_choiches();
        }



    }
}

function edit_card(obj) {
    console.log(obj);
    let page_anim_out = page_exit(dom_custom_picks_page);
    page_anim_out.onfinish = () => {
        dom_custom_picks_page.style.display = "none";
        dom_custom_picks_page.style.opacity = "0";
        dom_picks_container.style.display = "none";
        dom_picks_container.style.opacity = "0";
        dom_picks_menu.style.display = "block";
        dom_picks_menu.style.opacity = "1";
        dom_picks_title.textContent = "Select any card from the deck";
        let alt_bg_anim = animate_bg_alternate(custom_picks_menu_colors[0], custom_picks_menu_colors[1]);

        alt_bg_anim.onfinish = () => {
            dom_containerbg.style.background = custom_picks_menu_colors[0];
            dom_containerbg.style.color = custom_picks_menu_colors[1];
        }
        page_enter(dom_custom_picks_page);
        dom_picks_cards_wrapper.scrollTo(0, 0);

    }

    dom_picks_cards_wrapper.scrollTo(0, 0);
    /* dom_picks_container.style.display = "none";
    dom_picks_container.style.opacity = "0"; */

    /* dom_picks_menu.style.display = "block";
    dom_picks_menu.style.opacity = "1"; */
    if (dom_picks_select.children.length == 0) {
        for (let element of elements_unique) {
            let option = document.createElement("option");
            option.value = element.type;
            option.textContent = element.type;
            dom_picks_select.appendChild(option);
        }
    }

    selected_card = obj;

    show_select_picks();


    dom_picks_select.addEventListener("change", function () {
        dispose_select_picks();
        show_select_picks();
    });

}

function show_select_picks() {
    for (let element of elements_unique) {
        if (element.type == dom_picks_select.value) {
            for (let card of element.set) {
                if(ismobile()){
                    create_card(card, element.type, swiperPicksMenu, false, true, true);    
                } else {
                    create_card(card, element.type, dom_picks_cards_wrapper, false, true, false);
                }
            }
        }
    }
    
    dom_picks_cards_wrapper.scrollTo(0, 0);
    let value = dom_picks_select.value;
    dom_select_text.textContent = value[0].toUpperCase() + value.slice(1);
}

function dispose_select_picks() {
    dom_picks_cards_wrapper.scrollTo(0, 0);
    if(ismobile()) {
        let picks_menu_swiper = document.querySelector(".swiperPicksMenu > .swiper-wrapper");
        console.log(picks_menu_swiper.children);
        for (let j = picks_menu_swiper.children.length - 1; j >= 0; j--) {
            picks_menu_swiper.removeChild(picks_menu_swiper.children[j]);
        }
        swiperPicksMenu.slideTo(0, 1, false);
    } else {
        for (let i = dom_picks_cards_wrapper.children.length - 1; i >= 0; i--) {
            dom_picks_cards_wrapper.removeChild(dom_picks_cards_wrapper.children[i]);
        }
    }
}

function reset_select() {
    dom_picks_select.selectedIndex = 0;
    if(ismobile()){
        swiperPicksMenu.slideTo(0, 1, false);
    }
}

function change_add_card(card) {
    if (selected_card !== null) {
        var selected_card_type = selected_card.children[0].getAttribute("data-type");
        var selected_card_id = selected_card.children[0].getAttribute("data-id");
        var index = choices.findIndex(elem => elem.id == selected_card_id && elem.type == selected_card_type);

    } else {
        var index = choices.length;
    }

    var card_type = card.getAttribute("data-type");
    choices[index] = {
        id: card.getAttribute("data-id"),
        type: card_type,
    }
    get_content(card_type, index, card, choices);

    let page_anim_out = page_exit(dom_custom_picks_page);
    page_anim_out.onfinish = () => {
        dom_custom_picks_page.style.display = "none";
        dom_custom_picks_page.style.opacity = "0";
        dom_picks_container.style.display = "flex";
        dom_picks_container.style.opacity = "1";
        dom_picks_menu.style.display = "none";
        dom_picks_menu.style.opacity = "0";
        dispose_choices();
        show_choiches();
        dispose_select_picks();
        reset_select();
        page_enter(dom_custom_picks_page);
    }

    /* dom_picks_menu.style.display = "none";
    dom_picks_menu.style.opacity = "0";

    dom_picks_container.style.display = "flex";
    dom_picks_container.style.opacity = "1";
    dispose_choices();
    show_choiches();
    dispose_select_picks();
    reset_select(); */
}


function create_card(data, type, node, icons, click, swiper) {

    let newCardWrapper = document.createElement("div");
    newCardWrapper.classList.add("card-wrapper");

    let newCard = document.createElement("div");
    if (!click) {
        newCard.classList.add("not-clickable");
    }

    newCard.classList.add("card");
    let newCardRect = document.createElement("div");
    newCardRect.classList.add("card-rect");

    let newCardText = document.createElement("div");
    newCardText.classList.add("card-text");

    newCard.appendChild(newCardRect);
    newCard.appendChild(newCardText);

    if (click) {
        newCard.addEventListener("click", function () {
            change_add_card(this);
            newCard.classList.add("selected-card");
        })
        
    }
    newCardWrapper.appendChild(newCard);

    if (icons) {
        var deleteIcon = document.createElement("div");
        deleteIcon.classList.add("card-icon", "card-icon-delete");
        var del_icon_img = document.createElement("img");
        del_icon_img.src = "img/icone/xmark-solid.svg";
        deleteIcon.appendChild(del_icon_img);

        var editIcon = document.createElement("div");
        editIcon.classList.add("card-icon", "card-icon-edit");
        var edit_icon_img = document.createElement("img");
        edit_icon_img.src = "img/icone/pen-solid.svg";
        editIcon.appendChild(edit_icon_img);

        newCard.appendChild(deleteIcon);
        newCard.appendChild(editIcon);
    }

    if (swiper) {
        let slide = document.createElement("div");
        slide.classList.add("swiper-slide");
        slide.appendChild(newCardWrapper);
        node.appendSlide(slide);
    } else {
        node.appendChild(newCardWrapper);
    }


    if (icons) {
        deleteIcon.addEventListener("click", function () {

            delete_card(deleteIcon.parentElement.parentElement);
        });

        editIcon.addEventListener("click", function () {
            edit_card(editIcon.parentElement.parentElement);
        });
    }

    levels_type(newCard, data, type);
}

function create_slider(node, className) {
    let swiperWrapper = document.createElement("div");
    swiperWrapper.classList.add("swiper-wrapper");

    let slider = document.createElement("div");
    slider.classList.add(className, "swiper");

    slider.appendChild(swiperWrapper);

    let pagination = document.createElement("div");
    pagination.classList.add("swiper-pagination");

    let prev = document.createElement("div");
    prev.classList.add(className+"-swiper-button-prev", "swiper-button-prev");

    let next = document.createElement("div");
    next.classList.add(className+"-swiper-button-next", "swiper-button-next");

    slider.appendChild(pagination);
    slider.appendChild(prev);
    slider.appendChild(next);
    node.appendChild(slider);
}

function page_custom_picks_init() {
    
    clearInterval(standard_int);
    dom_body.classList.add("point");
    let alt_bg_anim = background_transition(cards_main_colors[0], cards_main_colors[1]);
    dom_hamburger1.classList.remove("hamburger-transition-default");
    dom_hamburger2.classList.remove("hamburger-transition-default");
    dom_hamburger1.classList.add("hamburger-transition");
    dom_hamburger2.classList.add("hamburger-transition");
    check_txt_color(cards_main_colors[1]);
    alt_bg_anim.onfinish = () => {
        dom_containerbg.style.background = cards_main_colors[0];
        dom_containerbg.style.color = cards_main_colors[1];
        dom_hamburger1.classList.remove("hamburger-transition");
        dom_hamburger2.classList.remove("hamburger-transition");
        dom_body.classList.remove("point");
    }
    show_choiches();
    page_enter(dom_custom_picks_page);
}

function page_custom_picks_dispose() {
    return new Promise((resolve, reject) => {
        let page_anim_out = page_exit(dom_custom_picks_page);
        page_anim_out.onfinish = () => {
            dom_custom_picks_page.style.display = "none";
            /* clearInterval(alternate_int); */
            reset_select();
            dispose_choices();
            dispose_select_picks();
            dom_picks_menu.style.display = "none";
            dom_picks_menu.style.opacity = "0";
            dom_picks_container.style.display = "flex";
            dom_picks_container.style.opacity = "1";

            if(ismobile()){
                /* dom_picks_container.removeChild(dom_picks_container.children[0]); */
                swiperPicksMenu.slideTo(0, 1, false);
                swiperPicks.slideTo(0, 1, false);
                
            }

            resolve();
        }

    })

}

