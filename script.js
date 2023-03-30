//your code here
const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	let prices = document.querySelectorAll('.price');
	let sum = 0;
	prices.forEach(price => {
		sum += parseFloat(price.textContent);
	});
	document.getElementById('table').innerHTML += `
	   <tr id="ans">
          <td></td>
          <td>${sum}</td>
        </tr>`
};

getSumBtn.addEventListener("click", getSum)