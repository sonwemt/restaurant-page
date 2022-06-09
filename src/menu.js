export default class Menu {
    fillContent (wrapper) {
        const header = document.createElement('h2');
        header.textContent = "Menu - Our Offerings";
        wrapper.appendChild(header);

        const paraWrapper = document.createElement('div');
        const paragraph1 = document.createElement('div');
        const paragraph2 = document.createElement('div');
        const paragraph3 = document.createElement('div');

        paragraph1.textContent = 
        "Integer id sem aliquam ante ipsum primis in faucibus."+ 
        "Praesent porta neque arcu.";

        paragraph2.textContent = "Opening hours\n Monday - Thursday: 10:00-20:00\n" + 
        "Friday - Saturday: 10:00-24:00";

        paraWrapper.appendChild(paragraph1);
        paraWrapper.appendChild(paragraph2);
        wrapper.appendChild(paraWrapper);
    }
}