const fetchData = async () => {
    try {
      const response = await fetch('https://api.quotable.io/random');
      const data = await response.json();
      const AutherName = document.getElementById('AutherName');
    const content = document.getElementById ('content');

    AutherName.textContent = data.author;

    content.textContent = '';

 for (const char of data.content) {
          await new Promise(resolve => setTimeout(resolve, 50)); 
          content.textContent += char;
        }

    } catch (error) {
      console.log(error);
    }
  };
  fetchData()



  // Call the async function
  const regroupBtn = document.getElementById('shareBtn');
  const linkBtn = document.getElementById('linkBtn');





  linkBtn.addEventListener('click', ()=>{
    let textCopied = document.getElementById('textCopied')
    console.log(textCopied)
    let txt = `${content.textContent}`
    navigator.clipboard.writeText(txt)
    textCopied.classList.remove('d-none');
    setTimeout(() => {
      textCopied.classList.add('d-none');

    }, 750);
})
  regroupBtn.addEventListener('click',()=>{
    fetchData()
    
})

