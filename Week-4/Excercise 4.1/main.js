function getNumber()
{
    return new CustomPromise((resolve, reject) => {
        setTimeout(() => {
        let randomInt = Math.floor(Math.random() * 100) + 1;
        if(randomInt % 5 == 0)
        {
            reject(new Error(`${randomInt} is divisible by 5`));
        }
        else
        {
            resolve(randomInt);
        }
    }, 0);
    });
}

class CustomPromise
{
    constructor(executionFunction) {
        this.promiseChain = [];
        this.handleError = () => {};
        this.onResolve = this.onResolve.bind(this);
        this.onReject = this.onReject.bind(this);
        executionFunction(this.onResolve, this.onReject);
    }

    onResolve(value) {
        let storedValue = value;
        try {
          this.promiseChain.forEach((nextFunction) => {
             storedValue = nextFunction(storedValue);
          });
        } catch (error) {
          this.promiseChain = [];
          this.onReject(error);
        }
      }
    
      onReject(error) {
        this.handleError(error);
      }

    then(handleSuccess) {
        this.promiseChain.push(handleSuccess);
        return this;
      }
    
    catch(handleError) {
        this.handleError = handleError;
        return this;
    }
}

getNumber().then((randomNumber) => {
      console.log(`${randomNumber} is not divisible by 5`);   
})
.catch((error) => {
    console.log(error.message);   
})
