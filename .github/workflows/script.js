// Примерен скрипт за добавяне на продукти в количката
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', () => {
        alert("Продуктът е добавен в количката!");
    });
});

