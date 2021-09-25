'use strict'

class Post {
    constructor(author, text, date = Date()) {
        this.author = author
        this.text = text
        this.date = date
    }
    edit(text) {
        this.text = text
    }
}

class AttacedPost extends Post {
    constructor(author, text, date = Date()) {
        super([author, text, date])
        this.highlighted = false
    }
    makeTextHighlighted() {
        this.highlighted = true
    }
}


let post_1 = new Post('author_1','my_text')

let post_2 = new AttacedPost('author_2','my_text_attached')

console.log(post_1)

console.log(post_2)

post_1.edit('my_new_text')

post_2.makeTextHighlighted()

console.log(post_1)

console.log(post_2)