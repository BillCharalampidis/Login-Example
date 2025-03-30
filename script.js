let user = document.getElementById('user');
let password = document.getElementById('pass');
function login(event){
    event.preventDefault();

    if (user.value === 'admin' && password.value === '1234'){
        document.location.href="schedule.html"
    }
    else{
        alert('Incorrect Username or Password!');
    }
    };
    function time(){
    const currentDate = new Date();
    const currentDay = currentDate.toLocaleDateString('en-US', { weekday: 'long' });
    const currentTime = currentDate.toLocaleTimeString();
    document.getElementById('currentDate').innerText = `${currentDay}, ${currentTime}`;
    window.setInterval(time, 1000);
    };
    
    window.onload = function () {
        time();
    };

    document.addEventListener('DOMContentLoaded', () => {
        const table = document.getElementById('schedule');
        
        table.addEventListener('click', (event) => {
            const target = event.target;
            
            if (target.tagName === 'TD') {
                const originalText = target.innerText;
                
                
                const input = document.createElement('input');
                input.value = originalText;
                target.innerHTML = ''; 
                target.appendChild(input);
                
                
                input.focus();
    
                
                input.addEventListener('blur', () => {
                    target.innerText = input.value || originalText; 
                });
    
                input.addEventListener('keydown', (e) => {
                    if (e.key === 'Enter') {
                        target.innerText = input.value || originalText; 
                    }
                });
            }
        });
    });
    
