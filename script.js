const fetchData = async () => {
    try {
      const response = await fetch('https://api.quotable.io/random');
      const data = await response.json();
      const AutherName = document.getElementById('AutherName');
    const content = document.getElementById ('content');

    AutherName.textContent = data.author;

    content.textContent = '';

 for (const char of data.content) {
          await new Promise(resolve => setTimeout(resolve, 50)); // Adjust the typing speed here
          content.textContent += char;
        }

    } catch (error) {
      console.log(error);
    }
  };
  fetchData()
  // Call the async function
  const regroupBtn = document.getElementById('shareBtn');

  
  regroupBtn.addEventListener('click',()=>{
    fetchData()
    
})