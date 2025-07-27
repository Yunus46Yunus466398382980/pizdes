const input = document.getElementById('input')
const sentBtn = document.getElementById('sentBtn')
const userList = document.getElementById('userList')
//speed class = 1 
//speed id = 100

sentBtn.addEventListener('click', () => {
    const tr = document.createElement('tr')
    tr.innerHTML = `
    
    
    
       <tr>
        <th>
          <label>
            <input type="checkbox" class="checkbox" />
          </label>
        </th>
        <td>
          <div class="flex items-center gap-3">
            <div class="avatar">
              <div class="mask mask-squircle h-12 w-12">
                <img
                  src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div class="flex gap-2 items-center">
              <div class="font-bold">${input.value}</div>
            <button class="text-base-100 btn btn-error">delete</button>
            <button class="text-base-100 btn btn-accent">edit</button>
            </div>  
          </div>
        </td>
      
      </tr>
    
    
    
    `
    input.value = ''
    userList.append(tr)
})

