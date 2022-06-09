export default class InitialLoad {
    fillPage (wrapper) {
        const header = document.createElement('div');
        header.classList.add('header');
        const headerText = document.createTextNode('Business Pizza');
        header.appendChild(headerText);
        wrapper.appendChild(header);

        const tabs = document.createElement('ul');
        tabs.classList.add('tabs')
        let elements = 3;
        for(let i = 1; i <= elements; i++) {
            const tab = document.createElement('li');
            tab.classList.add('tab');
            tab.id = i;
            let content = '';
            if(i === 1) {
                content = 'Home';
            }
            else if(i === 2) {
                content = 'Menu';
            }
            else {
                content = 'Contact'
            }
            const text = document.createTextNode(content);
            tab.appendChild(text);
            tabs.appendChild(tab);
        }
        wrapper.appendChild(tabs);
        //Create wrapper for tab content
        const innerContent = document.createElement('div');
        innerContent.classList.add('innerContent');
        wrapper.appendChild(innerContent);
    }
}