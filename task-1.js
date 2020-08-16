// new CountdownTimer({
//     selector: '#timer-1',
//     targetDate: new Date('Nov 20, 2020'),
//   });



const timer1 = document.querySelector('#timer-1');
const dataDays = document.querySelector('span[data-value="days"]');
const dataHours = document.querySelector('span[data-value="hours"]');
const dataMins = document.querySelector('span[data-value="mins"]');
const dataSecs = document.querySelector('span[data-value="secs"]');
  const timer = {
    start(){
      const targetDate = new Date('Nov 20, 2020');
      setInterval(()=>{
        const currentTime = Date.now();
        const deltaTime = targetDate - currentTime;
        updateTimer1(deltaTime);
      },1000);
    },
  }
  timer.start();
  function updateTimer1(time){
    const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = pad(Math.floor((time % (1000 * 60)) / 1000)); 
    dataDays. textContent = `${days}`;
    dataHours. textContent = `${hours}`;
    dataMins. textContent = `${mins}`;
    dataSecs. textContent = `${secs}`;
  }
  function pad(value){
    return String(value).padStart(2, '0');
  }