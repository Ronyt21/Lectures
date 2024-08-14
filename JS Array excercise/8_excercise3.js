const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1995 },
    { first: 'Issac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galilio', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marrie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
];

const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Blair, Robert', 'Blair, Tony', 'Blake, Willson'];


// 8. Reduce Excercise 
// Sum up the instances of each of the these
const data = ['car','car','truck','truck','bike','walk','car','van','bike','walk','car','van','car','truck'];

const transportation = data.reduce((obj,item)=>{
    if(!obj[item]){
        obj[item] = 0;
    }
    obj[item]++;
    return obj;
},{})

console.table(transportation)






