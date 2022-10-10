

function StopWatch(){
    let started = false, duration  = 0;
    this.intervalId = null;
    this.start = function(){
        if(started)
            throw new Error('Stopwatch alread started')
        started = true
        this.intervalId = setInterval(() => {
            duration += 1;
        }, 1);
    }
    this.stop = function(){
        if(!started)
          throw new Error('Stopwatch is not started')
        clearInterval(this.intervalId)
        started = false
    }
    this.reset = function(){
        duration = 0
    }

    Object.defineProperty(this,'duration', {
        get: function(){
            return duration/1000
        }
    })

}

const sw = new StopWatch();