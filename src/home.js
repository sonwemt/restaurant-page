export default class Home {
    fillContent (wrapper) {
        const header = document.createElement('h2');
        header.textContent = "Welcome to Business Pizza";
        wrapper.appendChild(header);

        const paraWrapper = document.createElement('div');
        const paragraph1 = document.createElement('div');
        const paragraph2 = document.createElement('div');
        const paragraph3 = document.createElement('div');

        paragraph1.textContent = 
        "Integer id sem aliquam diam ultricies faucibus ut a justo." + 
        "Nullam sit amet dictum metus. Nulla molestie sollicitudin iaculis." + 
        "Interdum et malesuada fames ac ante ipsum primis in faucibus."+ 
        "Praesent porta neque arcu.";

        paragraph2.textContent = "Opening hours\n Monday - Thursday: 10:00-20:00\n" + 
        "Friday - Saturday: 10:00-24:00";

        paraWrapper.appendChild(paragraph1);
        paraWrapper.appendChild(paragraph2);
        wrapper.appendChild(paraWrapper);
    }
}