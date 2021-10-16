const counters = document.querySelectorAll('.counter');

counters.forEach((counter) => {

    counter.innerHTML = 0;

    const updateCounter = () => {


        const targetCounter = +counter.getAttribute('data-target');
        const startingCount = +counter.innerHTML;
        const incrCount = targetCounter / 100;

        if (startingCount < targetCounter) {
            counter.innerHTML = `${Math.round(startingCount + incrCount)}`;
            setTimeout(updateCounter, 10);
        } else {
            counter.innerHTML = targetCounter;
        }

    }
    updateCounter();
})