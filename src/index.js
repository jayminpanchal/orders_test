/* 

  Write solution to count number of units sold a day for a specific product at everyday of the week.
  Make sure to run test to check if your solution pass the test. ` npm run test `
  Test code already provided/written.
  
  INPUT:
  ProductID: @type: Number
  Orders Data: @type: Array[]
  
  [{
      "orderId": 122,
      "creationDate": "2017-03-25T11:24:20Z",
      "orderLines": [
        { "productId": 9870, "name": "Pencil", "quantity": 2, "unitPrice": 3.00 },
        { "productId": 1746, "name": "Eraser", "quantity": 1, "unitPrice": 1.00 }
      ]
  }, {
      "orderId": 123,
      "creationDate": "2017-03-26T11:24:20Z",
      "orderLines": [
        { "productId": 9871, "name": "Pen", "quantity": 3, "unitPrice": 3.00 },
        { "productId": 1746, "name": "Eraser", "quantity": 1, "unitPrice": 1.00 }
      ]
  }..... N ]


  _______________________________

  Output:
  {
      SUNDAY: 5
      MONDAY: 2
      TUESDAY: 0
      WEDNESDAY: 3
      THURSDAY: 2
      FRIDAY: 6
      SATURDAY: 4
  }
*/


export default class OrdersAnalyzer {
  constructor() {
    this.weekdays = [
      "SUNDAY",
      "MONDAY",
      "TUESDAY",
      "WEDNESDAY",
      "THURSDAY",
      "FRIDAY",
      "SATURDAY",
    ];
  }

  totalQuantity(productId, orders) {
    // TODO: Implement
    // 1.create an output object that holds the result
    let output = {};
    // 2. loop over the weekdays and assign each day as key and its value is 0 in the output
    // 3.map through the orders
    this.weekdays.forEach(item => output[item] = 0);
    orders.map((order) => {
      const dateObj = new Date(order.creationDate);
      const day = this.weekdays[dateObj.getDay()];
      const quantity = order.orderLines.filter(orderLine => orderLine.productId === productId).reduce((total, orderLine) => {
        return total + orderLine.quantity;
      },output[day] || 0);
      output[day] = quantity;
    });
    return output;
  }
}