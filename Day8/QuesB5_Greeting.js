
function greeting(){
    let time = new Date().getHours()
    if(time<12){
        return "Good Morning" 
    }else if(time<18){
        return "Good Afternoon"
    }else{
        return "Good Evening"
    }
}

module.exports = {
    greeting : greeting
}
