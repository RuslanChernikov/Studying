
const deadline = new Date (2021, 09, 13, 06, 55);

function counter(endtime) {
    const t=Date.parse(endtime)-Date.parse(new Date());

    let days=Math.floor(t/(1000*60*60*24)),
        hours =Math.floor((t/(1000*60*60))%24),
        minutes = Math.floor((t/(1000*60))%60),
        seconds=Math.floor((t/1000)%60);

        return {
            'total': t,
            'days':days,
            'hours':hours,
            'minutes':minutes,
            'seconds':seconds,
        };

}

function setClock(selector, endtime) {

   let timer = document.querySelector('.timer'),
    days = timer.querySelector('#days'),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds');

            let timeInterval=setInterval(updateClock, 1000);

            updateClock();

          function updateClock() {

            const t=counter(endtime);

            days.innerHTML=t.days,
            hours.innerHTML=t.hours,
            minutes.innerHTML=t.minutes,
            seconds.innerHTML=t.seconds;

          }

}

setClock('.timer', deadline);
