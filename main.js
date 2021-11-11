// CHECH
console.log(`JS OK`);

const app = new Vue ({

    el: '#app',

    data: {
        message: 'SIGNORAAAAAAAA',
        image: './limoni_meme1.jpg',
        titleClass: 'yellow',
    },
    
    methods: {
        // change color function()
        changeColor() {
            this.titleClass = this.titleClass === 'yellow' ? 'black': 'yellow';
        }
    }
});

// console.log(message)

