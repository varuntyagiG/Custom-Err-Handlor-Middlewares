const mongoose = require('mongoose');
const Chat = require('./models/chats.js');

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/fakewhatsapp');
};

main().then((res)=>{
    console.log('Connected succesfully');
}).catch((err)=>{
    console.log(err);
});

const chat1 = new Chat({
    from : 'Varun',
    to : 'Anjali',                           // this file is used to store data in database...
    mssege : 'Hey! How are you ?',
    created_at : new Date()
});

let chating = [ 
    {
        from : 'Varun',
        to : 'Anjali',
        mssege : 'Hey! How are you ?',
        created_at : new Date()
    },
    {
        from : 'Varun',
        to : 'Rohan',
        mssege : 'Send me a notes',
        created_at : new Date()
    },
    {
        from : 'Varun',
        to : 'aaditya',
        mssege : 'where are you from?',
        created_at : new Date()
    },
    {
        from : 'Varun',
        to : 'Rohan',
        mssege : 'I love you',
        created_at : new Date()
    },
    {
        from : 'Varun',
        to : 'Kushal',
        mssege : 'where are u from?',
        created_at : new Date()
    }
];

Chat.insertMany(chating);

