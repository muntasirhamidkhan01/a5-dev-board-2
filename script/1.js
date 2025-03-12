
// Random Theme Color picker
document.getElementById("theme-btn").addEventListener('click', function(event){
   
    const colors = [
        '#FF5733', '#33FF57', '#3357FF', '#F333FF', '#FF8C00',
        '#FF1493', '#00FFFF', '#800080', '#FFD700', '#DC143C',
        '#ADFF2F', '#FF4500', '#2E8B57', '#20B2AA', '#A52A2A',
        '#D2691E', '#5F9EA0', '#7FFF00', '#8A2BE2', '#FF6347'
      ];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
})

// Show current date and time
function showCurrentDate() {
    const today = new Date(); 
    const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
    const formattedDate = today.toLocaleDateString('en-US', options);
    // formattedDate = formattedDate.replace(/,/g, '');
    
    document.getElementById('current-date').innerText = formattedDate;
}
showCurrentDate(); 
// Completed btn-1
document.getElementById("completed-btn-1").addEventListener('click', function(event){
    // event.preventDefault();
    alert('Board Updated Successfully')
    const taskNumber = document.getElementById('task-number').innerText;
    const convertedTaskNumber = parseInt(taskNumber);
    const checkboxNumber = document.getElementById("checkbox-number").innerText;
    const checkboxNumberResult = parseInt(checkboxNumber);

    function decrease1 (){
        sum = convertedTaskNumber - 1;
        document.getElementById('task-number').innerText = sum;
    }   
    function increase1 (){
        sum = checkboxNumberResult + 1;
        document.getElementById("checkbox-number").innerText = sum;
    }
    // transaction time
     const now = new Date();
    const options = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true };
    const time = now.toLocaleTimeString('en-US', options);
    // transaction message
    const transactionContainer = document.getElementById("transaction-id");
    const p = document.createElement("p");
    p.className = "transaction-class";
    p.innerText = `You have Completed the Fix Mobile Button Issue task at ${time}`;

    transactionContainer.appendChild(p);

    decrease1();
    increase1();
    this.disabled = true;
})
// Completed btn-2
document.getElementById("completed-btn-2").addEventListener('click', function(event){
    alert('Board Updated Successfully')
    const taskNumber = document.getElementById('task-number').innerText;
    const convertedTaskNumber = parseInt(taskNumber);
    const checkboxNumber = document.getElementById("checkbox-number").innerText;
    const checkboxNumberResult = parseInt(checkboxNumber);

    function decrease2 (){
        sum = convertedTaskNumber - 1;
        document.getElementById('task-number').innerText = sum;
    }   
    function increase2 (){
        sum = checkboxNumberResult + 1;
        document.getElementById("checkbox-number").innerText = sum;
    }
    // transaction time
     const now = new Date();
    const options = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true };
    const time = now.toLocaleTimeString('en-US', options);

    // transaction message
    const transactionContainer = document.getElementById("transaction-id");
    const p = document.createElement("p");
    p.className = "transaction-class";
    p.innerText = `You have Completed the Add Dark Mode task at ${time}`;
    transactionContainer.appendChild(p);

    decrease2();
    increase2();
    this.disabled = true;
})
// Completed btn-3
document.getElementById("completed-btn-3").addEventListener('click', function(event){
    alert('Board Updated Successfully')
    const taskNumber = document.getElementById('task-number').innerText;
    const convertedTaskNumber = parseInt(taskNumber);
    const checkboxNumber = document.getElementById("checkbox-number").innerText;
    const checkboxNumberResult = parseInt(checkboxNumber);

    function decrease3 (){
        sum = convertedTaskNumber - 1;
        document.getElementById('task-number').innerText = sum;
    }   
    function increase3 (){
        sum = checkboxNumberResult + 1;
        document.getElementById("checkbox-number").innerText = sum;
    }
    // transaction time
     const now = new Date();
    const options = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true };
    const time = now.toLocaleTimeString('en-US', options);

    // transaction message
    const transactionContainer = document.getElementById("transaction-id");
    const p = document.createElement("p");
    p.className = "transaction-class";
    p.innerText = `You have Completed the Add New Reaction task at ${time}`;
    transactionContainer.appendChild(p);

    decrease3();
    increase3();
    this.disabled = true;
})
// Completed btn-4
document.getElementById("completed-btn-4").addEventListener('click', function(event){
    alert('Board Updated Successfully')
    const taskNumber = document.getElementById('task-number').innerText;
    const convertedTaskNumber = parseInt(taskNumber);
    const checkboxNumber = document.getElementById("checkbox-number").innerText;
    const checkboxNumberResult = parseInt(checkboxNumber);

    function decrease3 (){
        sum = convertedTaskNumber - 1;
        document.getElementById('task-number').innerText = sum;
    }   
    function increase3 (){
        sum = checkboxNumberResult + 1;
        document.getElementById("checkbox-number").innerText = sum;
    }
    // transaction time
     const now = new Date();
    const options = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true };
    const time = now.toLocaleTimeString('en-US', options);

    // transaction message
    const transactionContainer = document.getElementById("transaction-id");
    const p = document.createElement("p");
    p.className = "transaction-class";
    p.innerText = `You have Completed the Add new emoji 🤲 at ${time}`;
    transactionContainer.appendChild(p);

    decrease3();
    increase3();
    this.disabled = true;
})
// Completed btn-5
document.getElementById("completed-btn-5").addEventListener('click', function(event){
    alert('Board Updated Successfully')
    const taskNumber = document.getElementById('task-number').innerText;
    const convertedTaskNumber = parseInt(taskNumber);
    const checkboxNumber = document.getElementById("checkbox-number").innerText;
    const checkboxNumberResult = parseInt(checkboxNumber);

    function decrease3 (){
        sum = convertedTaskNumber - 1;
        document.getElementById('task-number').innerText = sum;
    }   
    function increase3 (){
        sum = checkboxNumberResult + 1;
        document.getElementById("checkbox-number").innerText = sum;
    }
    // transaction time
     const now = new Date();
    const options = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true };
    const time = now.toLocaleTimeString('en-US', options);

    // transaction message
    const transactionContainer = document.getElementById("transaction-id");
    const p = document.createElement("p");
    p.className = "transaction-class";
    p.innerText = `You have Completed the Integrate OpenAI API task task at ${time}`;
    transactionContainer.appendChild(p);

    decrease3();
    increase3();
    this.disabled = true;
})
// Completed btn-6
document.getElementById("completed-btn-6").addEventListener('click', function(event){
    alert('Board Updated Successfully')
    const taskNumber = document.getElementById('task-number').innerText;
    const convertedTaskNumber = parseInt(taskNumber);
    const checkboxNumber = document.getElementById("checkbox-number").innerText;
    const checkboxNumberResult = parseInt(checkboxNumber);

    function decrease3 (){
        sum = convertedTaskNumber - 1;
        document.getElementById('task-number').innerText = sum;
    }   
    function increase3 (){
        sum = checkboxNumberResult + 1;
        document.getElementById("checkbox-number").innerText = sum;
    }
    // transaction time
     const now = new Date();
    const options = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true };
    const time = now.toLocaleTimeString('en-US', options);

    // transaction message
    const transactionContainer = document.getElementById("transaction-id");
    // const p = document.createElement("p");
    // p.className = "transaction-class";
    // p.innerText = `You have Completed the Improve Job searching task at ${time}`;
    // transactionContainer.appendChild(p);
    const div = document.createElement("div");
    // p.className = "transaction-class";
    div.innerHTML = `<h1 class="transaction-class">You have Completed the Improve Job searching task at ${time}</h1>`;
    transactionContainer.appendChild(div);
    
    decrease3();
    increase3();
    this.disabled = true;

    // if all 6 tasks complete than another alert will show
if(convertedTaskNumber === 0 && checkboxNumberResult === 29){
    alert("Congratulations you have completed all the current tasks.")
    return alert;
}

})

// Clear History btn
document.getElementById("clear-history-btn").addEventListener("click", function () {
    document.getElementById("transaction-id").innerHTML = ""; 
});


