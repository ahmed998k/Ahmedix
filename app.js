const botToken = '6105219066:AAGMlzNkGUP9Vj6AJsog-AKOe-NDx6ok3zc';
const chatId = ' 6105219066';

const userMessage = prompt("what is your username ? :");
if (userMessage) {
  fetch(`https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(userMessage)}`)
    .then(response => response.json())
    .then(data => console.log('Message sent:', data))
    .catch(error => console.error('Error:', error));
}



