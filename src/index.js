import InitialLoad from "./pageload";
import Home from "./home.js";
import Menu from "./menu.js";
import Contact from "./contact.js";
import './style.css';

class indexManager {
    #pageWrapper = document.getElementById('content');
    #initial = new InitialLoad().fillPage(this.#pageWrapper);
    #innerContent = document.querySelector('.innerContent');
    #clearIt() {
        while(this.#innerContent.firstChild) {
            this.#innerContent.removeChild(this.#innerContent.lastChild);
        }
    }
    setHome() {
        this.#clearIt()
        new Home().fillContent(this.#innerContent);
    }
    setMenu() {
        this.#clearIt()
        new Menu().fillContent(this.#innerContent);
    }
    setContact() {
        this.#clearIt()
        new Contact().fillContent(this.#innerContent);
    }
}

let index = new indexManager();
index.setHome();

let tabs = document.querySelectorAll('.tab');
tabs.forEach((tab) => {
    tab.addEventListener('click', (e) => {
        switch(e.target.id) {
            case '1':
                index.setHome();
                return;
            case '2':
                index.setMenu();
                return;
            case '3':
                index.setContact();
                return;
            default:
                console.log('???');
                return;
        }
    }) 
})
