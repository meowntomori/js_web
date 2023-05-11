function getOrder(computer) {

  let basePrice = 50000;

  let totalPrice = basePrice;



  // проверяем каждый технический показатель и добавляем стоимость

  if (computer.processor === "Intel Core i5") {

    totalPrice += 5040;

  } else if (computer.processor === "Intel Core i7") {

    totalPrice += 15000;

  }



  if (computer.ram === "16 ГБ") {

    totalPrice += 10000;

  } else if (computer.ram === "32 ГБ") {

    totalPrice += 18000;

  }



  if (computer.storage === "512 ГБ SSD") {

    totalPrice += 14000;

  } else if (computer.storage === "1 ТБ SSD") {

    totalPrice += 24000;

  }



  // выводим результат заказа

  let message = "Вы заказали компьютер со следующими характеристиками:\n";

  message += "Процессор: " + computer.processor + "\n";

  message += "Оперативная память: " + computer.ram + "\n";

  message += "Накопитель: " + computer.storage + "\n";

  message += "Итоговая цена: " + totalPrice + " рублей";



  alert(message);

}



// пример использования

let myComputer = {

  processor: "Intel Core i5",

  ram: "16 ГБ",

  storage: "512 ГБ SSD",

};



getOrder(myComputer);
