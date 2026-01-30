// Student feedback submission
document.getElementById('feedbackForm')?.addEventListener('submit', async function(e){
  e.preventDefault();
  const data = Object.fromEntries(new FormData(this).entries());
  const res = await fetch('http://localhost:3000/feedback', {
    method:'POST',
    headers:{'Content-Type':'application/json'},
    body: JSON.stringify(data)
  });
  const result = await res.json();
  alert(result.message);
  if(result.success) window.location.href = "index.html";
});

// Admin login
document.getElementById('adminLogin')?.addEventListener('submit', async function(e){
  e.preventDefault();
  const username = this.username.value;
  const password = this.password.value;
  if(username==="admin" && password==="admin123"){
    document.getElementById('adminLogin').style.display="none";
    const dashboard=document.getElementById('dashboard');
    dashboard.style.display="block";

    const res=await fetch('http://localhost:3000/feedbacks');
    const feedbacks=await res.json();
    const tbody=document.querySelector('#feedbackTable tbody');
    tbody.innerHTML='';
    feedbacks.forEach(f=>{
      const row=document.createElement('tr');
      row.innerHTML=`
        <td>${f.name}</td>
        <td>${f.email}</td>
        <td>${f.room}</td>
        <td>${f.breakfast}</td>
        <td>${f.lunch}</td>
        <td>${f.dinner}</td>
        <td>${f.services}</td>
      `;
      tbody.appendChild(row);
    });
  }else{
    alert("Invalid credentials!");
  }
});
