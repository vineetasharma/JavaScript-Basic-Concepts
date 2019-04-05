function studentId(){
    var id= 'stu-12A-1';
    function getId(){
        return id;
    }
    function setId(newId){
        id= newId;
    } 
    return {
        getId: getId,
        setId: setId
    }
}

var studentObj= studentId();

console.log('Student Id:::',studentObj.getId());

studentObj.setId('NewOneIdSetDuringCall');
console.log('Student NEw Id:::',studentObj.getId());