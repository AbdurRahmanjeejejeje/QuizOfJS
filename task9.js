const data = [
    {
        fileName: 'abu.jpg',
        fileSize: 3.5
    },

    {
        fileName: 'apple.jpg',
        fileSize: 1.5
    },

    {
        fileName: 'flower.jpg',
        fileSize: 3
    },

    {
        fileName: 'tree.jpg',
        fileSize: 2
    }
];


data.forEach( pingan => {
    if(pingan.fileSize<=2){

        console.log(`${pingan.fileSize} is allowed to upload`)

    }

    else{
         console.log(`${pingan.fileSize} is not allowed to upload`)
    }
})