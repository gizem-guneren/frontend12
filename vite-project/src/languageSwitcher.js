document.addEventListener('DOMContentLoaded', () => {
    const turkishSwitch = document.getElementById('turkishSwitch');
    
    //
    let isTurkish = localStorage.getItem('lang') === 'tr';
  
  
    function switchToTurkish() {
    
        localStorage.setItem('lang', 'tr');
        
       
        document.querySelectorAll('.en-text').forEach((el) => {
            el.style.display = 'none'; 
        });
        document.querySelectorAll('.tr-text').forEach((el) => {
            el.style.display = 'inline'; 
        });
  
       
        turkishSwitch.innerHTML = 'ENGLISH\'E GEÇ';
    }
  
   
    function switchToEnglish() {
      
        localStorage.setItem('lang', 'en');
  
        
        document.querySelectorAll('.en-text').forEach((el) => {
            el.style.display = 'inline'; 
        });
        document.querySelectorAll('.tr-text').forEach((el) => {
            el.style.display = 'none'; 
        });
  
     
        turkishSwitch.innerHTML = 'TÜRKÇE\'YE GEÇ';
    }
  
    
    if (isTurkish) {
        switchToTurkish();
    } else {
        switchToEnglish();
    }
  
   
    turkishSwitch.addEventListener('click', () => {
        if (isTurkish) {
            switchToEnglish();
        } else {
            switchToTurkish();
        }
        isTurkish = !isTurkish; 
    });
  });
  