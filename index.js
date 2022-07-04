function shadowcreator(options) {

    let images = document.querySelectorAll(".shadowcreator");

    if (options.shadow_type === "hard")
        options.shadow_type = '0px'
    else
        options.shadow_type = '15px'

    images.forEach(image => {
        image.style.boxShadow = `10px 10px ${options.shadow_type} 1px rgba(0,0,0,0.12)`;

        if(options.padding){
            image.style.padding = options.padding;
        }else {
            image.style.padding = "0px";
        }

    })

}

module.exports.shadowcreator = shadowcreator;