const generateBtn = document.querySelector('.generate-button')
const memeTitle = document.querySelector('.meme-title')
const memeImage = document.querySelector('.meme-image')
const authorOutput=document.querySelector('.author span')

function getMeme(){
    fetch('https://meme-api.com/gimme/wholesomememes')
    .then((res) => {
        return res.json()
    }).then((data) => {
        const { author, title, url } = data;
        memeTitle.innerText=title
        memeImage.src=url;
        authorOutput.innerText=author;

        // console.log(author, title, url);
    })

}
getMeme();

generateBtn.addEventListener('click', () => {
   
    getMeme();
})