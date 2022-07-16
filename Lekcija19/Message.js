function checkAge(age) {
    if (age >= 18)
    {
        return true;
    } else
    {
        return confirm("Запроси до екрану дорослих");
    }
}
let age = promрt('Скільки вам років?', '18');
if (checkAge(age))
{
    console.log("Доступ надано");
} else
{
    console.log("Доступ закрито");
}

setTimeout("Доступ закрито", 5000);