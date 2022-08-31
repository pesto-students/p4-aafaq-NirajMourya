function  doTask1()
{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(true)
            { 
                resolve("Task 1 Completed");
            }
            else
            {
                reject(new Error("Task 1 Failed"));
            }
        }, 2000);
    });
}

function  doTask2()
{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(true)
            { 
                resolve("Task 2 Completed");
            }
            else
            {
                reject(new Error("Task 2 Failed"));
            }
    },2000);
    });
}

function  doTask3()
{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(true)
            { 
                resolve("Task 3 Completed");
            }
            else
            {
                reject(new Error("Task 3 Failed"));
            }
    }, 2000);
    });
}

async function asyncCall() {
    try
    {
        let Task1 = await doTask1();
        console.log(Task1);
        let Task2 = await doTask2();
        console.log(Task2);
        let Task3 = await doTask3();
        console.log(Task3);
    } catch (err) {
        console.log('Error Occurred: ',err);
    }
}

asyncCall();

async function* generatorFunction() {
        let Task1 = yield doTask1().then((Task1_data) => 
        {
            console.log(Task1_data);
        }).catch((err) => {
            console.log('Error Occurred: ',err);
        });
        let Task2 = yield doTask2().then((Task2_data) => 
        {
            console.log(Task2_data);
        }).catch((err) => {
            console.log('Error Occurred: ',err);
        });
        let Task3 = yield doTask3().then((Task3_data) => 
        {
            console.log(Task3_data);
        }).catch((err) => {
            console.log('Error Occurred: ',err);
        });
        return {done:true};
}

const iterator = generatorFunction();
iterator.next();
iterator.next();
iterator.next();