window.addEventListener('load', function()
{
    if(!localStorage.getItem('cookieConsent'))
    {
        document.querySelector('.popup').style.display = 'flex'
    }
});


document.querySelector('.btn').addEventListener('click', function()
{
    if (this.querySelector('.message').textContent === 'Accept')
        {
            localStorage.setItem('cookieConsent', 'accepted');


            document.querySelector('.popup').classList.add('slide-out');
            
            setTimeout(() => {
                document.querySelector('.popup').style.display = 'none'
            }, 400)
        }
});
