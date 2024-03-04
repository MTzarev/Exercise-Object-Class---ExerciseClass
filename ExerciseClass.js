function exerciseClass (input){
class Dog {
constructor (name, poroda){
    this.name = name;
    this.poroda = poroda;
}
speek (){
    console.log(`${this.name} is poroda ${this.poroda} and because is a dog it says Bauuu`);
}
}
for (let i=0; i<input.length; i++){
    let dogInfo = input[i].split(` `)
    // this.name = dogInfo[0]
    // this.poroda = dogInfo[1];
    let dog= new Dog (dogInfo[0], dogInfo[1])
    dog.speek()

}

    console.log();
}
exerciseClass(['Djess Mops', 'Arlen Buldog']);
//exerciseClass();