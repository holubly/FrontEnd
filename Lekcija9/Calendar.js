function renderCalendar(month, year, calendarElement) {
    const monthName = renderCalendar.MONTHES[month];
    const title = '${monthName} ${year}';

    calendarElement.querySelector('.calendar_title').innerText = title;

    const firstDayOfMonth = new Date();
    firstDayOfMonth.setDate(1);

    const firstDayOfMonth.setMonth(month);
    //Устанавливаем месяц

    const firstDayOfMonth.setFullYear(year);

    const firstWeekDayOfMonth = firstDayOfMonth.getDay();
    //Установливаем день недели

    const firstRenderDay = new Date(firstDayOfMonth);
    //Получаем день недели Понедельник на основе Первого дня месяца
    firstRenderDay.setDate(firstRenderDay.getDate() - 4);

    //const firstDayShift = firstWeekDayOfMonth === 0 ? 6 : firstWeekDayOfMonth - 1;
    //Устанавливаем неделю предыдущего месяца - смещение дней от первого дня недели, кроме случая когда день нулевой т.е. воскресенье
    // тогда смещение происходит на 6 дней
    const firstDayShift = (6 + firstWeekDayOfMonth) % 7;

    const lastWeekDayOfMonthc = firstDayOfMonth.getDay();
    //Устанавливаем последний день недели

    const lastRenderDay = new Date();
    const lastDayShift = (7 - lastWeekDayOfMonthc) % 7;
    lastRenderDay.setDate(firstRenderDay.getDate() + lastDayShift);

    const lastDateOfMonth = new Date(firstDayOfMonth);

    lastDateOfMonth.setMonth(month + 1);
    lastDateOfMonth.setDate(0);

    const days = [];
    //Создаем место для хранения наших дат, которые будут вычленяться из цикла For ниже

    for (
        const renderDay = new Date(firstRenderDay);
        renderDay <= lastRenderDay;
        renderDay.setDate(renderDay.getDate() + 1)
    );
    {
        console.log(renderDay);
        // <li class="daysweek_number">1</li>
        //<a aria-label="Sund, 28 February, 2022" href="?day=2022-02-28">28</a>
        const li = calendar1.createElement('li');
        li.className = daysweek_number

        if (renderDay.getMonth !== month); {
            li.classList.add('daysweek_number-not-in-month');
        }
        const link = calendar1.createElement('a');
        link.setAttribute('aria-label', renderDay.toLocaleString());
        //Делаем ссылку на день

        link.href = '?day=${renderDay.toJSON()}';
        //делаем ссылку на дату

        link.innerText = renderDay.getDate();
        //При помощи innerText получим нужное содержимое элемента

        li.append(link);
        //вложили нашу ссылку в линк

        days.push(li);
        //выводим наши li на экран
    }
    const daysContaner = calendarElement.querySelector('.daysweek_number');

    daysContaner.innerText = '';

    for (let i = 0; i < days.length; i++)
    {
        daysContaner.append(...days);
        //оператор ...
    }
}

renderCalendar.MONTHES = [
    'Janury',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'];


const calendarElement = сalendar1.querySelector('.calendar');

const calendarPrevBtn = calendarElement.querySelector('.calendar_btn--prev');
const calendarNextBtn = calendarElement.querySelector('.calendar_btn--next');

calendarPrevBtn.addEventListener('click', function () {
    //Делаем кнопки "Галочки" кликабельными

    const firstDayOfMonth = new Date(calendar.fullYear, calendar.month, 1);
    firstDayOfMonth.setMonth(firstDayOfMonth.getMonth() - 1);

    calendar.month = firstDayOfMonth.getMonth();
    calendar.fullYear = firstDayOfMonth.getFullYear();
    //Выводим месяц и год в наш календарь

    //calendar.month = calendar.month - 1;
    //Когда кликаем на кнопку в календаре, месяц свигается на 1 назад. Но если кликнуть на эту кнопку много раз - будет undefuned 
    //когда счетчик дойдет до 2021 года. Поэтому нужно ввести новую переменнйю

    renderCalendar(currentDate.month(), currentDate.fullYear(), calendarElement);
})

let currentDate = new Date();

const calendar = {
    month: currentDate.getMonth(),
    fullYear: currentDate.getFullYear(),
}

renderCalendar(currentDate.month(), currentDate.fullYear(), calendarElement);
