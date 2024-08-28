function encryptText() {
    let text = document.getElementById('inputText').value.toLowerCase();
    let encryptedText = text.replace(/e/g, "enter")
                            .replace(/j/g, "imes")
                            .replace(/a/g, "ai")
                            .replace(/o/g, "ober")
                            .replace(/u/g, "ufat");
    document.getElementById('inputText').value = encryptedText;
}

function decryptText() {
    let text = document.getElementById('inputText').value.toLowerCase();
    let decryptedText = text.replace(/enter/g, "e")
                            .replace(/imes/g, "j")
                            .replace(/ai/g, "a")
                            .replace(/ober/g, "o")
                            .replace(/ufat/g, "u");
    document.getElementById('inputText').value = decryptedText;
}

function copyText() {
    let resultText = document.getElementById('inputText').value;
    navigator.clipboard.writeText(resultText).then(() => {
        alert('Texto copiado al portapapeles');
    });
}