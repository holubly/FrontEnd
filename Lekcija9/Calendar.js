const today = new Date;
today.setDate(2022, 6, 7);
//в календарі буде поточна дата 

firstDateOfMonth = new Date;
//alert(currentDate);

firstDateOfMonth.setDate(1);
const lastDateOfMonth = new Date(firstDateOfMonth);
lastDateOfMonth.setMonth(lastDateOfMonth.getMonth() + 1);
lastDateOfMonth.setDate(0);

Document.append(currentDate, firstDateOfMonth, lastDateOfMonth);
