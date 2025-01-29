import '../styles/content.styles.css';

export default function content(){

    const testDiv = document.createElement('div');
    testDiv.classList.add('testDiv');

    document.body.appendChild(testDiv);

};