const minions = [
    "bob",
    "kevin",
    "stuart",
    "dave",
    "jerry",
    "mark",
    "tim",
    "phil",
    "carl",
  ]

  // forEach
minions.forEach(minion => {
    console.log(minion)
})
// map
const capitalizedMinons = minions.map((hench_minions, index) => {
    if(hench_minions !== "kevin"){
        return(hench_minions[0].toUpperCase() + hench_minions.slice(1))
    }
    else{
        return(hench_minions)
    }
})

console.log(capitalizedMinons)

// filter
const actuallyCapitalizedMinions = capitalizedMinons.filter((minon_char) => { 
    if(minon_char[0] === minon_char[0].toUpperCase()){
        return minon_char
 }})
 console.log(actuallyCapitalizedMinions)

 // every 
 const actuallyCapitalizedMinions_check_every = actuallyCapitalizedMinions.every((actual_cap_minion) => {
        return actual_cap_minion[0] === actual_cap_minion[0].toUpperCase()
    })
 console.log(actuallyCapitalizedMinions_check_every)


 // BONUS Methods

 // every
 const isCapitalized = capitalizedMinons.every((cap_minion) => {
    if(cap_minion.isCapitalized){
        if(cap_minion[0] === cap_minion[0].toUpperCase()){
            return cap_minion
        }}
    })

 console.log(isCapitalized)

 // find
 const uncapitalizedMinion = capitalizedMinons.find((minon) => {
    if(minon[0] !== minon[0].toUpperCase()){
        return(minon)
    }
 })
 console.log(uncapitalizedMinion)

 // findIndex
 const findIndex_check = capitalizedMinons.findIndex((x) => x === "kevin")
 const kevin = capitalizedMinons[findIndex_check].charAt(0).toUpperCase() + capitalizedMinons[findIndex_check].slice(1,)
 capitalizedMinons[findIndex_check] = kevin
 const check_every_Capitalized = capitalizedMinons.every((cap_minion_check) => {
    if(cap_minion_check[0] == cap_minion_check[0].toUpperCase()){
        return(cap_minion_check)
    }
 })
console.log(check_every_Capitalized)

// reduce
const minionNameLengths = capitalizedMinons.map((minion_length) => {
    return minion_length.length
})
const minionNameLengths_2 = minionNameLengths.reduce((accumlator, length_minion) => {
    return accumlator + length_minion
})
console.log(minionNameLengths_2)

// some
const findIndex_check1 = capitalizedMinons.findIndex((x) => x === "Kevin")
capitalizedMinons[findIndex_check1] = capitalizedMinons[findIndex_check1].toLowerCase()

const minions_some_minion_name_length = capitalizedMinons.some((minion_some) => {
    if(minion_some.length >= 6){
        return minion_some}
    /*else if(minion_some.length >= 7){
        return minion_some
    }*/
})
console.log(minions_some_minion_name_length)

const minions_some_minion_uppercase = capitalizedMinons.some((minion_some) => {
    if(minion_some[0] !== minion_some[0].toLowerCase()){
        return minion_some
    }})
    console.log(minions_some_minion_uppercase)
const minions_some_minion_lowercase = capitalizedMinons.some((minion_some) => {
        if(minion_some[0] === minion_some[0].toLowerCase()){
            return minion_some
        }})
console.log(minions_some_minion_lowercase)