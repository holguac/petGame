
// const list = ["rain","sunny","cool",];
// const random = Math.floor(Math.random() * list.length);
//   const weather =list[random];
//    console.log(weather)


// class Plants {
  
//     constructor(){
//       this._weather = weather;
      
//     }
    
//     get weather (){
//       return this.weather
//       console.log(weather)
//     }
    
// } console.log(Plants (weather))


class Plants {
  constructor(name){
    this._name = name;
    this._weather = ["rain","sunny","cool"];
    this._thirst = 0;
    this._random = Math.floor(Math.random() * this._weather.length);
    this._day = this._weather[this._random];
 }
 get name (){
   return this._name;
 }

 get thirst (){
   return this._thirst;
 }
   randomDay () {
   if (this._day === "sunny"){ 
     console.log(`The weather is ${this._random} +1 thirst`);
    this._thirst++; 
   } 
   else if  (this._day === "rain"){
    console.log(`The weather is ${this._random} +1 thirst`);
    this._thirst++;  
   }
   
  };

} 

const Yucca = new Plants("Yucca");
// (Yucca.weather())
console.log(Yucca)



