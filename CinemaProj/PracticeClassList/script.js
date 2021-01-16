const btnBlock=document.querySelector('.btn-block'),
        btns = document.querySelectorAll('button');

        btnBlock.addEventListener('click', (event) => {

            let target=event.target;

            if(target.matches('button')) {
            if (target && target.matches('button.red')) {
                
                    target.classList.remove('red');
                 
            } else {  {

                target.classList.add('red');
            }
                    
            }
        }
        });