export {};

class VisaCard {
  constructor(public readonly owner: string) {
  }
}

let myVisaCard = new VisaCard('カイト');
console.log(myVisaCard.owner);
// myVisaCard.owner = 'kaito';
// あまりreadonly短縮を使わずpublicを記述する 