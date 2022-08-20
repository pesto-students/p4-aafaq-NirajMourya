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
        }, 500);
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
    }, 500);
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
    }, 500);
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

